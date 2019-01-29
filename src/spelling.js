import { Node } from 'tiptap';
import { replaceText } from 'tiptap-commands';
import SuggestionsPlugin from './SuggestionsPlugin.js';

export default class Spelling extends Node {
    get name() {
        return 'spelling';
    }

    get defaultOptions() {
        return {
            word: null,
            spellingClass: 'spelling',
            suggestionClass: 'is-highlighted',
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

    commands({ schema }) {
        return attrs => replaceText(null, schema.marks[this.name], attrs);
    }

    get plugins() {
        return [
            SuggestionsPlugin({
                command: ({ range, schema, attrs }) => {
                    return replaceText(range, schema.nodes[this.name], attrs);
                },
                appendText: ' ',
                word: this.options.word,
                items: this.options.items,
                onEnter: this.options.onEnter,
                onChange: this.options.onChange,
                onExit: this.options.onExit,
                onKeyDown: this.options.onKeyDown,
                onFilter: this.options.onFilter,
                suggestionClass: this.options.suggestionClass,
            }),
        ];
    }
}
