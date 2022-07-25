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
    </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import CharacterCount from '@tiptap/extension-character-count';
import Document from '@tiptap/extension-document';
import Italic from '@tiptap/extension-italic';
import ListItem from '@tiptap/extension-list-item';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';

export default {
    name: 'tiptapEditor',
    props: {
        height: {
            type: String,
            default: '300px',
        },
        id: { type: String, default: null },
        maxCharacterCount: {
            type: Number,
            default: 66,
        },
        showMenu: {
            type: Boolean,
            default: true,
        },
    },
    components: { EditorContent },
    data() {
        return {
            editor: null,
            currentCharacterCount: 0,
        };
    },
    computed: {
        maxCharacterCountExceeded() {
            return this.editor.storage.characterCount.characters() >= this.maxCharacterCount;
        },
    },
    mounted() {
        this.editor = new Editor({
            content: '<p>This is up and running on tiptap 2.0! 🎉</p>',
            extensions: [
                Bold,
                Italic,
                BulletList,
                ListItem,
                Document,
                Paragraph,
                Text,
                CharacterCount,
            ],
        });
    },
    beforeDestroy() {
        this.editor.destroy();
    },
    methods: {
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
};
</script>

<style lang="scss">
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
        content: attr(data-empty-text);
        float: left;
        color: #aaa;
        pointer-events: none;
        height: 0;
        font-style: italic;
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
