<template>
    <div>
        <div class="editor">
            <editor-menu-bar :editor="editor">
                <div class="menubar" slot-scope="{ commands, isActive }">
                    <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bold() }"
                        @click="commands.bold"
                    >
                        <b>B</b>
                    </button>

                    <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.italic() }"
                        @click="commands.italic"
                    >
                        <i>I</i>
                    </button>

                    <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bullet_list() }"
                        @click="commands.bullet_list"
                    >
                        &#8729;
                    </button>

                    <button
                        class="menubar__button"
                        @click="commands.undo"
                    >
                        &#8592;
                    </button>

                    <button
                        class="menubar__button"
                        @click="commands.redo"
                    >
                        &#8594;
                    </button>

                </div>
            </editor-menu-bar>

            <editor-content class="editor__content" :editor="editor" />
        </div>

        <div class="error-list" :v-show="false" ref="errors">
            <template v-if="currentOptions">
                <b>did you mean..</b>
                <div
                    v-for="(option, index) in currentOptions"
                    :key="option.id"
                    class="error-list__item"
                    :class="{ 'is-selected': navigatedOptionIndex === index }"
                    @click="selectOption(option)"
                >
                    {{ option.word }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
import {
    Blockquote,
    BulletList,
    ListItem,
    Bold,
    Italic,
    History,
    Mention,
} from 'tiptap-extensions';
import Spelling from './spelling.js';
import Highlight from './highlight.js';

export default {
    name: 'TextEditor',
    props: {
        value: { type: String, default: `this is the default test txt` },
        errors: {
            type: Array,
            default: () => [
                {
                    mispelledWord: 'txt',
                    options: [{ id: 1, word: 'text' }, { id: 2, word: 'texting' }],
                },
            ],
        },
    },
    components: { EditorContent, EditorMenuBar },
    data() {
        return {
            editor: null,
            currentOptions: null,
            navigatedOptionIndex: 0,
            insertOption: () => {},
            optionsRange: null,
        };
    },
    mounted() {
        const mentions = this.errors.map(error => {
            return new Spelling({
                word: error.mispelledWord,
                items: error.options,
                onEnter: ({ items, query, range, command, virtualNode }) => {
                    this.currentOptions = items;
                    this.navigatedOptionIndex = 0;
                    this.optionRange = range;
                    this.renderPopup(virtualNode);
                    this.insertOption = command;
                },
                onChange: ({ items, query, range, virtualNode }) => {
                    this.currentOptions = items;
                    this.navigatedOptionIndex = 0;
                    this.optionRange = range;
                    this.renderPopup(virtualNode);
                },
                onExit: () => {
                    this.navigatedOptionIndex = 0;
                    this.currentOptions = null;
                    this.optionRange = null;
                    this.destroyPopup();
                },
                onKeyDown: ({ event }) => {
                    // pressing up arrow
                    if (event.keyCode === 38) {
                        this.upHandler();
                        return true;
                    }
                    // pressing down arrow
                    if (event.keyCode === 40) {
                        this.downHandler();
                        return true;
                    }
                    // pressing enter
                    if (event.keyCode === 13) {
                        this.enterHandler();
                        return true;
                    }
                    return false;
                },
            });
        });

        this.editor = new Editor({
            extensions: [
                ...mentions,
                new Blockquote(),
                new BulletList(),
                new ListItem(),
                new Bold(),
                new Italic(),
                new History(),
                new Highlight({
                    words: this.errors.map(err => err.mispelledWord),
                }),
            ],
            content: this.value,
            onUpdate: ({ getJSON, getHTML }) => {
                this.$emit('update:value', getHTML());
            },
        });
    },
    beforeDestroy() {
        this.editor.destroy();
    },
    methods: {
        upHandler() {
            this.navigatedOptionIndex =
                (this.navigatedOptionIndex + this.currentOptions.length - 1) %
                this.currentOptions.length;
        },
        downHandler() {
            this.navigatedOptionIndex =
                (this.navigatedOptionIndex + 1) % this.currentOptions.length;
        },
        enterHandler() {
            const option = this.currentOptions[this.navigatedOptionIndex];
            if (option) {
                this.selectOption(option);
            }
        },
        selectOption(option) {
            this.insertOption({
                range: this.optionRange,
                attrs: {
                    id: option.id,
                    label: option.word,
                },
            });
            this.editor.focus();
        },
        renderPopup(node) {
            if (this.popup) {
                return;
            }

            this.popup = tippy(node, {
                content: this.$refs.errors,
                trigger: 'mouseenter',
                interactive: true,
                theme: 'dark',
                placement: 'top-start',
                performance: true,
                inertia: true,
                duration: [400, 200],
                showOnInit: true,
                arrow: true,
                arrowType: 'round',
            });
        },
        destroyPopup() {
            if (this.popup) {
                this.popup.destroyAll();
                this.popup = null;
            }
        },
    },
};
</script>

<style lang="scss">
.error-list {
    .error-list__item {
        &.is-selected,
        &:hover {
            background-color: rgba(white, 0.2);
        }
    }
}

.is-highlighted {
    border-bottom: 3px red solid;
}

.editor {
    border: 1px solid hsla(0, 0%, 4%, 0.1);

    .menubar {
        border-bottom: 1px solid hsla(0, 0%, 4%, 0.1);

        button {
            font-size: 14px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            height: 30px;
            outline: 0;
            width: 35px;
            vertical-align: bottom;

            &.is-active,
            &:hover {
                background-color: #f0f0f0;
            }
        }
    }

    .editor__content {
        font-size: 16px;
        height: 300px;
        outline: 0;
        overflow-y: auto;
        padding: 10px;
    }
}
</style>
