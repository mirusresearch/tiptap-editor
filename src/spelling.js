import { Node, Plugin, PluginKey } from 'tiptap';
import { Decoration, DecorationSet } from 'prosemirror-view';
import { replaceText } from 'tiptap-commands';
import get from 'lodash.get';

function dispatch(tr, state, view) {
    state = state.apply(tr);
    view.updateState(state);
}

function lint(doc, position, prev, getWords) {
    const words = getWords();
    const badWordsRegex = new RegExp(`\\b(${words.join('|')})\\b`, 'ig');

    let highlights = [];
    let on = { active: false };

    if (words.length < 1) {
        return { highlights, on };
    }

    function record(from, to, text) {
        if (position && position.pos >= from && position.pos <= to) {
            const decorationId = get(
                prev,
                'active.decorationId',
                (Math.random() + 1).toString(36).substr(2, 5)
            );

            highlights.push({ from, to, text, decorationId });
            on.active = true;
            on.decorationId = decorationId;
            on.range = { to, from };
            on.query = text;
            on.text = text;
        } else {
            highlights.push({ from, to, text });
        }
    }

    // For each node in the document
    doc.descendants((node, pos) => {
        if (node.isText) {
            // Scan text nodes for bad words
            let m;
            while ((m = badWordsRegex.exec(node.text))) {
                record(pos + m.index, pos + m.index + m[0].length, m[0]);
            }
        }
    });

    return { highlights, on };
}

export default class Highlight extends Node {
    get name() {
        return 'spelling';
    }

    get defaultOptions() {
        return {
            getWords: () => [],
            onChange: () => {},
            onEnter: () => {},
            onExit: () => {},
            onKeyDown: () => {},
            wordClass: 'highlighted',
        };
    }

    get schema() {
        return {
            attrs: {
                id: {},
                label: {},
            },
            group: 'inline',
            inline: true,
            selectable: false,
            atom: false,
            toDOM: mark => {
                return mark.attrs.label;
            },
            parseDOM: [
                {
                    tag: 'span[data-mention-id]',
                    getAttrs: dom => {
                        const id = dom.getAttribute('data-mention-id');
                        const label = dom.innerText.split(this.options.matcher.char).join('');
                        return { id, label };
                    },
                },
            ],
        };
    }

    get plugins() {
        const self = this;

        return [
            // underline the words
            new Plugin({
                key: new PluginKey('spelling'),
                view() {
                    return {
                        update: (view, prevState) => {
                            const prev = this.key.getState(prevState).on;
                            const next = this.key.getState(view.state).on;
                            const moved =
                                prev.active && next.active && prev.range.from !== next.range.from;
                            const started = !prev.active && next.active;
                            const stopped = prev.active && !next.active;
                            const changed = !started && !stopped && prev.query !== next.query;
                            const handleStart = started || moved;
                            const handleChange = changed && !moved;
                            const handleExit = stopped || moved;

                            // Cancel when suggestion isn't active
                            if (!handleStart && !handleChange && !handleExit) {
                                return;
                            }

                            const state = handleExit ? prev : next;
                            const decorationNode = document.querySelector(
                                `[data-decoration-id="${state.decorationId}"]`
                            );

                            // build a virtual node for popper.js or tippy.js
                            // this can be used for building popups without a DOM node
                            const virtualNode = decorationNode
                                ? {
                                      getBoundingClientRect() {
                                          return decorationNode.getBoundingClientRect();
                                      },
                                      clientWidth: decorationNode.clientWidth,
                                      clientHeight: decorationNode.clientHeight,
                                  }
                                : null;

                            const props = {
                                view,
                                range: state.range,
                                text: state.text,
                                decorationNode,
                                virtualNode,
                                command: ({ range, attrs }) => {
                                    const result = replaceText(
                                        range,
                                        view.state.schema.nodes[self.name],
                                        attrs
                                    )(view.state, view.dispatch, view);

                                    // need to merge text nodes
                                    setTimeout(() => {
                                        document
                                            .getElementsByClassName('editor__content')[0]
                                            .normalize();
                                    });

                                    return result;
                                },
                            };

                            // Trigger the hooks when necessary
                            if (handleExit) {
                                self.options.onExit(props);
                            }

                            if (handleChange) {
                                self.options.onChange(props);
                            }

                            if (handleStart) {
                                self.options.onEnter(props);
                            }
                        },
                    };
                },
                state: {
                    init(_, { doc }) {
                        return lint(doc, null, {}, self.options.getWords);
                    },
                    apply(tr, prev) {
                        const { selection } = tr;
                        const next = Object.assign({}, prev);
                        const position = selection.$from;
                        return lint(tr.doc, position, prev, self.options.getWords);
                    },
                },
                props: {
                    handleKeyDown(view, event) {
                        const { active, range } = this.getState(view.state).on;
                        if (!active) {
                            return false;
                        }
                        return self.options.onKeyDown({ event });
                    },
                    decorations(state) {
                        let decos = [];
                        this.getState(state).highlights.forEach(prob => {
                            decos.push(
                                Decoration.inline(prob.from, prob.to, {
                                    class: self.options.wordClass,
                                    'data-decoration-id': prob.decorationId
                                        ? prob.decorationId
                                        : undefined,
                                })
                            );
                        });
                        return DecorationSet.create(state.doc, decos);
                    },
                },
            }),
        ];
    }
}
