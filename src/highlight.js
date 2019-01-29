import { Extension, Plugin } from 'tiptap';
import { Decoration, DecorationSet } from 'prosemirror-view';

function lint(doc, badWordsRegex) {
    let result = [];

    function record(from, to) {
        result.push({ from, to });
    }

    // For each node in the document
    doc.descendants((node, pos) => {
        if (node.isText) {
            // Scan text nodes for bad words
            let m;
            while ((m = badWordsRegex.exec(node.text))) {
                record(pos + m.index, pos + m.index + m[0].length);
            }
        }
    });

    return result;
}

function lintDeco(doc, wordClass, badWordsRegex) {
    let decos = [];
    lint(doc, badWordsRegex).forEach(prob => {
        decos.push(Decoration.inline(prob.from, prob.to, { class: wordClass }));
    });
    return DecorationSet.create(doc, decos);
}

export default class Highlight extends Extension {
    get name() {
        return 'highlight';
    }

    get defaultOptions() {
        return {
            words: [],
            wordClass: 'is-highlighted',
        };
    }

    get plugins() {
        this.options.badWordsRegex = new RegExp(`\\b(${this.options.words.join('|')})\\b`, 'ig');
        const self = this;
        return [
            new Plugin({
                state: {
                    init(_, { doc }) {
                        return lintDeco(doc, self.options.wordClass, self.options.badWordsRegex);
                    },
                    apply(tr, old) {
                        return tr.docChanged
                            ? lintDeco(tr.doc, self.options.wordClass, self.options.badWordsRegex)
                            : old;
                    },
                },
                props: {
                    decorations(state) {
                        return this.getState(state);
                    },
                },
            }),
        ];
    }
}
