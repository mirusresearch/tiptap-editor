import { Plugin, PluginKey } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';
import { insertText } from 'tiptap-commands';

function triggerWord(word) {
    return $position => {
        const regexp = new RegExp(word, 'gm');
        const textFrom = $position.before();
        const textTo = $position.end();
        const text = $position.doc.textBetween(textFrom, textTo, '\0', '\0');

        let match = regexp.exec(text);
        let position;

        while (match !== null) {
            const matchPrefix = match.input.slice(Math.max(0, match.index - 1), match.index);

            if (/^[\s\0]?$/.test(matchPrefix)) {
                const from = match.index + $position.start();
                let to = from + match[0].length;

                if (from < $position.pos && to >= $position.pos) {
                    position = {
                        range: {
                            from,
                            to,
                        },
                        query: match[0].slice(word.length),
                        text: match[0],
                    };
                }
            }

            match = regexp.exec(text);
        }

        return position;
    };
}

export default function SuggestionsPlugin({
    word = null,
    appendText = null,
    suggestionClass = 'suggestion',
    command = () => false,
    items = [],
    onEnter = () => false,
    onChange = () => false,
    onExit = () => false,
    onKeyDown = () => false,
    onFilter = (searchItems, query) => {
        if (!query) {
            return searchItems;
        }

        return searchItems.filter(item =>
            JSON.stringify(item)
                .toLowerCase()
                .includes(query.toLowerCase())
        );
    },
}) {
    return new Plugin({
        key: new PluginKey('suggestions'),

        view() {
            return {
                update: (view, prevState) => {
                    const prev = this.key.getState(prevState);
                    const next = this.key.getState(view.state);

                    // See how the state changed
                    const moved = prev.active && next.active && prev.range.from !== next.range.from;
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
                        query: state.query,
                        text: state.text,
                        decorationNode,
                        virtualNode,
                        items: onFilter(Array.isArray(items) ? items : items(), state.query),
                        command: ({ range, attrs }) => {
                            command({
                                range,
                                schema: view.state.schema,
                                attrs,
                            })(view.state, view.dispatch, view);

                            if (appendText) {
                                insertText(appendText.trim())(view.state, view.dispatch, view);
                            }

                            // need to merge text nodes
                            setTimeout(() => {
                                document.getElementsByClassName('editor__content')[0].normalize();
                            });
                        },
                    };

                    // Trigger the hooks when necessary
                    if (handleExit) {
                        onExit(props);
                    }

                    if (handleChange) {
                        onChange(props);
                    }

                    if (handleStart) {
                        onEnter(props);
                    }
                },
            };
        },

        state: {
            init() {
                return {
                    active: false,
                    range: {},
                    query: null,
                    text: null,
                };
            },

            apply(tr, prev) {
                const { selection } = tr;
                const next = { ...prev };

                if (selection.from === selection.to) {
                    if (selection.from < prev.range.from || selection.from > prev.range.to) {
                        next.active = false;
                    }

                    // Try to match against where our cursor currently is
                    const $position = selection.$from;
                    const match = triggerWord(word)($position);
                    const decorationId = (Math.random() + 1).toString(36).substr(2, 5);

                    if (match) {
                        next.active = true;
                        next.decorationId = prev.decorationId ? prev.decorationId : decorationId;
                        next.range = match.range;
                        next.query = match.query;
                        next.text = match.text;
                    } else {
                        next.active = false;
                    }
                } else {
                    next.active = false;
                }

                if (!next.active) {
                    next.decorationId = null;
                    next.range = {};
                    next.query = null;
                    next.text = null;
                }

                return next;
            },
        },

        props: {
            handleKeyDown(view, event) {
                const { active, range } = this.getState(view.state);
                if (!active) return false;
                return onKeyDown({ view, event, range });
            },
            decorations(editorState) {
                const { active, range, decorationId } = this.getState(editorState);
                if (!active) return null;
                return DecorationSet.create(editorState.doc, [
                    Decoration.inline(range.from, range.to, {
                        nodeName: 'span',
                        class: suggestionClass,
                        'data-decoration-id': decorationId,
                    }),
                ]);
            },
        },
    });
}
