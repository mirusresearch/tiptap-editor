<template>
    <div>
        <div class="tiptap-editor">
            <div v-if="showMenu" class="menubar" role="toolbar" :aria-controls="id || null">
                <button
                    :aria-pressed="`${editor.isActive('bold') ? 'true' : 'false'}`"
                    :class="{ 'is-active': editor.isActive('bold') }"
                    @keyup.left="toolbarGoLeft"
                    @keyup.right="toolbarGoRight"
                    @click="editor.chain().focus().toggleBold().run()"
                    aria-label="bold"
                    value="bold"
                    type="button"
                >
                    <b>B</b>
                </button>
                <button
                    :aria-pressed="`${editor.isActive('italic') ? 'true' : 'false'}`"
                    :class="{ 'is-active': editor.isActive('italic') }"
                    @click="editor.chain().focus().toggleItalic().run()"
                    @keyup.left="toolbarGoLeft"
                    @keyup.right="toolbarGoRight"
                    value="italic"
                    type="button"
                >
                    <i>I</i>
                </button>
                <button
                    @click="editor.chain().focus().toggleBulletList().run()"
                    :class="{ 'is-active': editor.isActive('bulletList') }"
                    @keyup.left="toolbarGoLeft"
                    @keyup.right="toolbarGoRight"
                    aria-label="bullet list"
                    value="bulletlist"
                    type="button"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="list-ul"
                        class="svg-inline--fa fa-list-ul fa-w-16"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                </button>
            </div>
            <editor-content
                :editor="editor"
                :style="{ height: height }"
                :id="id || null"
                role="Textbox"
                class="editor__content"
                aria-label="text area"
            />
        </div>
        <div
            :class="{ over: maxCharacterCountExceeded }"
            class="character-count"
            v-if="maxCharacterCount"
        >
            {{ maxCharacterCount - editor.storage.characterCount.characters() }} characters
            remaining
        </div>
        <div class="error-list" :v-show="false" ref="errors">
            <template v-if="currentWarning">
                <b>{{ currentWarning.message }}</b>
                <div
                    v-for="(option, index) in currentOptions"
                    :key="option.id"
                    class="error-list__item"
                    :class="{ selected: navigatedOptionIndex === index }"
                    @click="selectOption(option)"
                >
                    {{ option.value }}
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import 'current-script-polyfill';
import unescape from 'lodash.unescape';
import tippy from 'tippy.js';
import { Editor, EditorContent } from '@tiptap/vue-2';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import CharacterCount from '@tiptap/extension-character-count';
import Document from '@tiptap/extension-document';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';

export default {
    name: 'tiptapEditor',
    props: {
        height: {
            type: String,
            default: '300px',
        },
        id: { type: String, default: null },
        value: { type: String, default: '' },
        warnings: {
            type: Array,
            default: () => [],
        },
        maxCharacterCount: {
            type: Number,
            default: 66,
        },
        placeholder: { type: String, default: 'write your content here...' },
        showMenu: {
            type: Boolean,
            default: true,
        },
    },
    components: { EditorContent },
    data() {
        return {
            editor: null,
            currentWarning: null,
            currentOptions: null,
            currentValue: '',
            naviagedOptionIndex: 0,
            insertOption: () => {},
            optionsRange: null,
            currentCharacterCount: 0,
        };
    },
    computed: {
        errors() {
            if (this.warnings.length < 1) {
                return [];
            }
            return this.warnings.map((mistake) => {
                const isWord = mistake.isWord === undefined ? true : mistake.isWord;
                return {
                    overrideClass: mistake.overrideClass,
                    isWord: isWord,
                    value: isWord ? mistake.value : unescape(mistake.value),
                    message: mistake.message,
                    options: (mistake.options || []).map((value, id) => ({ value, id })),
                };
            });
        },
        maxCharacterCountExceeded() {
            return this.editor.storage.characterCount.characters() >= this.maxCharacterCount;
        },
    },
    mounted() {
        this.currentValue = this.value;
        this.editor = new Editor({
            content: this.value,
            parseOptions: { preserveWhitespace: 'full' },
            onUpdate: ({ getJSON, getHTML }) => {},
            extensions: [
                Bold,
                Italic,
                BulletList,
                ListItem,
                Document,
                Paragraph,
                Placeholder.configure({
                    placeholder: this.placeholder,
                }),
                Text,
                CharacterCount.configure({ limit: this.maxCharacterCount }),
            ],
        });
        tippy.setDefaults({
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
            hideOnClick: false,
        });
    },
    destroyed() {
        this.editor.destroy();
        if (this.popup) {
            this.popup.destroy();
        }
    },
    methods: {
        getErrorWords() {
            if (this.errors.length < 1) {
                return [];
            }
            return this.errors.map((err) => ({
                value: err.value,
                overrideClass: err.overrideClass,
                isWord: err.isWord,
            }));
        },
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
            if (this.currentOptions.length === 0) {
                return false;
            }

            const option = this.currentOptions[this.navigatedOptionIndex];
            if (option) {
                this.selectOption(option);
            }
            return true;
        },
        selectOption(option) {
            this.insertOption({
                range: this.optionRange,
                attrs: {
                    id: option.id,
                    label: option.value,
                },
            });
            this.editor.focus();
        },
        renderPopup(node) {
            if (!this.popup) {
                this.popup = tippy(node, { content: this.$refs.errors });
            }
        },
        destroyPopup() {
            if (this.popup) {
                this.popup.destroy();
                this.popup = null;
            }
        },
        toolbarGoLeft(evt) {
            evt.preventDefault();
            const prevSibling = evt.target.previousSibling;

            if (prevSibling && prevSibling.focus !== undefined) {
                prevSibling.focus();
            }
        },
        toolbarGoRight(evt) {
            evt.preventDefault();
            const nextSibling = evt.target.nextSibling;

            if (nextSibling && nextSibling.focus !== undefined) {
                nextSibling.focus();
            }
        },
    },
    watch: {
        warnings: function (n, o) {
            if (this.editor) {
                // preserve selection after updating warnings
                const oldSelection = this.editor.selection;
                this.editor.setContent(this.currentValue);
                this.editor.setSelection(oldSelection.from, oldSelection.to);
            }
        },
    },
};
</script>

<style lang="scss">
.error-list {
    .error-list__item {
        &.selected,
        &:hover {
            background-color: rgba(white, 0.2);
        }
    }
}

.tiptap-editor {
    textarea:focus,
    input:focus {
        outline: none;
    }

    *:focus {
        outline: none;
    }

    border: 1px solid #e5e7eb;
    border-radius: 5px;

    p.is-empty:first-child::before {
        content: attr(data-placeholder);
        float: left;
        color: #aaa;
        pointer-events: none;
        height: 0;
    }

    .menubar {
        border-bottom: 1px solid #e5e7eb;

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
                background-color: #e5e7eb;
                border-radius: 5px;
            }

            svg {
                padding-top: 4px;
                width: 12px;
            }
        }
    }

    .editor__content {
        font-size: 16px;
        outline: 0;
        overflow-y: auto;
        padding: 10px;

        .underline-red {
            border-bottom: 3px red solid;
        }

        .underline-orange {
            border-bottom: 3px orange solid;
        }

        .underline-green {
            border-bottom: 3px lightgreen solid;
        }

        .underline-blue {
            border-bottom: 3px blue solid;
        }

        ul {
            padding: 0px 40px;
        }

        .ProseMirror {
            height: 100%;
            padding: 2px;
        }
    }
}

.character-count {
    margin-top: 1rem;
    color: #868e96;
    float: right;

    &.over {
        color: red;
    }
}
</style>
