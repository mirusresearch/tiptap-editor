import { Extension, Plugin, PluginKey } from 'tiptap';

export default class MaxCharacterCount extends Extension {
    get name() {
        return 'max Character Count';
    }

    get defaultOptions() {
        return {
            maxCharacterCount: 100,
            onChange: () => {},
        };
    }

    get plugins() {
        const self = this;

        return [
            new Plugin({
                key: new PluginKey('maxCharacterCount'),
                filterTransaction: (transaction, state) => {
                    if (self.options.maxCharacterCount !== null) {
                        return state.doc.content.size < self.options.maxCharacterCount;
                    }
                    return true;
                },
                view() {
                    return {
                        update: (view, prevState) => {
                            self.options.onChange(view.state.doc.content.size);
                        },
                    };
                },
            }),
        ];
    }
}
