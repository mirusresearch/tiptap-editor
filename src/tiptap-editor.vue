<template>
    <div>
        <div class="tiptap-editor" tabindex="0">
            <div
                v-if="showMenu && editor"
                class="menubar"
                role="toolbar"
                :aria-controls="id || null"
            >
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
                <div class="character-count" v-if="maxCharacterCount && editor">
                    <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        :class="
                            maxCharacterCountExceeded
                                ? 'character-count__graph--warning'
                                : 'character-count__graph'
                        "
                    >
                        <circle r="10" cx="10" cy="10" fill="#e9ecef" />
                        <circle
                            r="5"
                            cx="10"
                            cy="10"
                            fill="transparent"
                            stroke="currentColor"
                            stroke-width="10"
                            :stroke-dasharray="`calc(${characterCountPercentage}px * 31.4 / 100) 31.4`"
                            transform="rotate(-90) translate(-20)"
                        />
                        <circle r="6" cx="10" cy="10" fill="white" />
                    </svg>
                    <div class="character-count__text" aria-live="polite">
                        {{ currentCharacterCount }} / {{ maxCharacterCount }} characters
                    </div>
                </div>
            </div>
            <editor-content
                :editor="editor"
                :style="{ height: height }"
                :id="id || null"
                role="textbox"
                class="editor__content"
                aria-label="text area"
                tabindex="-1"
            />
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
import { Editor, EditorContent } from '@tiptap/vue-2';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import CharacterCount from '@tiptap/extension-character-count';
import Document from '@tiptap/extension-document';
import Italic from '@tiptap/extension-italic';
import History from '@tiptap/extension-history';
import ListItem from '@tiptap/extension-list-item';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';
import tippy from 'tippy.js';
import Warning from './warnings';
import unescape from 'lodash.unescape';

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
            default: null,
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
            navigatedOptionIndex: 0,
            insertOption: () => {},
            optionsRange: null,
            initialCharacterCount: 0,
            previousCharacterCount: 0,
            previousHTML: '',
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
                    offset: mistake.offset,
                    length: mistake.length,
                    options: (mistake.options || []).map((value, id) => ({ value, id })),
                };
            });
        },
        currentCharacterCount() {
            return this.editor.storage.characterCount.characters();
        },
        maxCharacterCountExceeded() {
            if (this.editor) {
                return this.currentCharacterCount >= this.maxCharacterCount;
            }
        },
        characterCountPercentage() {
            if (this.editor) {
                return Math.round((100 / this.maxCharacterCount) * this.currentCharacterCount);
            }
        },
    },
    mounted() {
        this.currentValue = this.value;
        this.editor = new Editor({
            content: this.value,
            parseOptions: { preserveWhitespace: 'full' },
            onUpdate: ({ getJSON, getHTML }) => {
                this.currentValue = this.editor.getHTML();
                this.$emit('update:value', this.currentValue);
            },
            extensions: [
                Bold,
                BulletList,
                CharacterCount.configure({ limit: this.maxCharacterCount }),
                Document,
                History,
                Italic,
                ListItem,
                Paragraph,
                Placeholder.configure({
                    placeholder: this.placeholder,
                }),
                Text,
                Warning.configure({
                    getErrorWords: this.getErrorWords,
                    onEnter: ({ range, command, virtualNode, text }) => {
                        this.currentWarning = this.errors.find((err) => err.value === text);
                        this.currentOptions = this.currentWarning.options || [];
                        this.navigatedOptionIndex = 0;
                        this.optionRange = range;
                        this.renderPopup(virtualNode);
                        this.insertOption = command;
                    },
                    onChange: ({ range, virtualNode, text }) => {
                        this.currentWarning = this.errors.find((err) => err.value === text);
                        this.currentOptions = this.currentWarning.options || [];
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
                        if (event.keyCode === 38 && this.currentOptions !== null) {
                            this.upHandler();
                            return true;
                        }
                        // pressing down arrow
                        if (event.keyCode === 40 && this.currentOptions !== null) {
                            this.downHandler();
                            return true;
                        }
                        // pressing enter
                        if (event.keyCode === 13) {
                            return this.enterHandler();
                        }
                        // pressing escape
                        if (event.keyCode === 27) {
                            this.navigatedOptionIndex = 0;
                            this.optionRange = null;
                            this.currentOptions = null;
                            this.destroyPopup();
                            return true;
                        }
                        return false;
                    },
                }),
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
        this.initialCharacterCount = this.currentCharacterCount;
        this.previousCharacterCount = this.currentCharacterCount;
        this.editor.on('update', ({ editor }) => {
            this.warnings.forEach((warning) => {
                if (warning.length && warning.offset) {
                    if (editor.state.selection.head - 1 <= warning.offset) {
                        let charCountDiff =
                            this.currentCharacterCount - this.previousCharacterCount;
                        charCountDiff += this.adjustForNewlines();
                        warning.offset += charCountDiff;
                    }
                }
            });
            this.previousCharacterCount = this.currentCharacterCount;
            this.previousHTML = this.editor.getHTML();
            this.editor.commands.focus();
        });
        this.warnings.forEach((warning) => {
            if (warning.length && warning.offset >= 0) {
                warning.offset += this.getOffsetAdjustment(warning);
            }
        });
    },
    destroyed() {
        this.editor.destroy();
        if (this.popup) {
            this.popup.destroy();
        }
    },
    methods: {
        // compliance checks base offset data off the HTML value of the text
        // ProseMirror uses a unique token sequence indexing system - see https://prosemirror.net/docs/guide/#doc.indexing
        // we need to convert warning offsets to the index values ProseMirror expects
        getOffsetAdjustment(warning) {
            // compliance check offsets count all HTML entities as one character, whereas the editor value does not. compensate for
            // this by adding to the offset until it matches (or equals the length of the editor text as a failsafe break from the loop)
            const normalizedString = this.value.normalize('NFKC').replace(/&nbsp;/g, ' ');
            while (
                normalizedString.substr(warning.offset, warning.value.length) !== warning.value &&
                warning.offset <= normalizedString.length
            ) {
                warning.offset++;
            }

            // obtain the substring up until the beginning of the warning
            const originalLength = warning.offset;
            let substr = this.value.substr(0, warning.offset);

            // these tags count as one token, so we replace them with a single space
            substr = substr.replace(/<p>|<\/p>|<li>|<ul>|<\/ul>|<\/li>|<div>|<\/div>/g, ' ');

            // these tags don't count as a token, so we remove them
            const knownTagRegex = /<strong>|<\/strong>|<em>|<\/em>/g;
            substr = substr.replace(knownTagRegex, '');

            // return the number of chars the offset should be adjusted by
            return substr.length - originalLength;
        },
        // when the user adds a newline to the text of the editor, the character count stays the same, but ProseMirror's token
        // sequence indexing system adds 2 tokens to the content. We need to adjust warning offsets to account for that
        adjustForNewlines() {
            const regex = /<\/p><p>/g;
            const previousNewlines = (this.previousHTML.match(regex) || []).length;
            const newlines = (this.editor.getHTML().match(regex) || []).length;
            // multiply the difference in newlines by 2 since each instance counts as 2 tokens
            return (newlines - previousNewlines) * 2;
        },
        getErrorWords() {
            if (this.errors.length < 1) {
                return [];
            }
            return this.errors.map((err) => ({
                value: err.value,
                overrideClass: err.overrideClass,
                isWord: err.isWord,
                offset: err.offset,
                length: err.length,
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
            this.editor.commands.focus();
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
                this.warnings.forEach((warning) => {
                    if (warning.length && warning.offset >= 0) {
                        warning.offset += this.getOffsetAdjustment(warning);
                    }
                });

                // preserve selection after updating warnings
                const oldSelection = this.editor.view.state.selection;
                // this.editor.commands.setContent(this.currentValue);
                this.editor.commands.setTextSelection({
                    from: oldSelection.from,
                    to: oldSelection.to,
                });

                // record length of text that was used to generate the list of warnings
                this.initialCharacterCount = this.currentCharacterCount;
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
    border: 1px solid #e5e7eb;
    background: white;
    border-radius: 8px;
    padding: 4px;

    p.is-empty:first-child::before {
        content: attr(data-placeholder);
        float: left;
        color: #aaa;
        pointer-events: none;
        height: 0;
    }

    .menubar {
        // border-bottom: 1px solid #e5e7eb;
        padding: 4px;
        border-radius: 4px;
        background-color: #f4f4f5;
        display: flex;

        button {
            font-size: 14px;
            background-color: transparent;
            border: none;
            cursor: pointer;
            height: 30px;
            outline: 50;
            width: 35px;
            vertical-align: bottom;
            border-radius: 4px;
            margin-right: 3px;

            &:focus {
                outline: 2px solid #3b82f6;
                transition: all 0.08s ease-in-out;
            }

            &.is-active {
                background-color: #d3e3fd;
            }

            &.is-active:focus {
                background-color: #bfd2f9;
            }

            &:not(.is-active):hover {
                background-color: #e5e7eb;
            }

            &:not(.is-active):focus {
                background-color: #e5e7eb;
            }

            svg {
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
            border-bottom: 3px #3b82f6 solid;
        }

        ul {
            padding: 0px 40px;
        }

        .ProseMirror {
            height: 100%;
            padding: 2px;
            border-radius: 7px;

            &:focus {
                outline: 2px solid #3b82f6;
                transition: all 0.08s ease-in-out;
            }
        }
    }
}

.character-count {
    padding: 4px;
    border-radius: 4px;
    text-align: right;
    padding-right: 15px;
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    flex-grow: 2;

    &__graph {
        color: #a8c2f7;

        &--warning {
            color: #fb7373;
        }
    }
}
</style>
