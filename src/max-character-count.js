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
                    if (self.options.maxCharacterCount !== null && transaction.docChanged) {
                        const step = transaction.steps[0].toJSON();

                        return (
                            state.doc.content.size < self.options.maxCharacterCount ||
                            step.from < step.to || // let deletes through
                            step.stepType !== 'replace' // let none adds through
                        );
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
