<template>
    <div>
        <div class="tiptap-editor">
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
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list-ul" class="svg-inline--fa fa-list-ul fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                            </path>
                        </svg>
                    </button>
                    <!-- <button
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
                         </button> -->
                </div>
            </editor-menu-bar>
            <editor-content class="editor__content" :editor="editor" />
        </div>

        <div class="error-list" :v-show="false" ref="errors">
            <template v-if="currentWarning">
                <b>{{ currentWarning.message }}</b>
                <div
                    v-for="(option, index) in currentOptions"
                    :key="option.id"
                    class="error-list__item"
                    :class="{ 'selected': navigatedOptionIndex === index }"
                    @click="selectOption(option)"
                >
                    {{ option.value }}
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
    Placeholder,
} from 'tiptap-extensions';
import Warning from './warnings.js';

export default {
    name: 'TextEditor',
    props: {
        value: { type: String, default: '' },
        warnings: {
            type: Array,
            default: () => [],
        },
        placeholder: { type: String, default: 'write your content here...' },
    },
    components: { EditorContent, EditorMenuBar },
    data() {
        return {
            editor: null,
            currentWarning: null,
            currentOptions: null,
            currentValue: '',
            navigatedOptionIndex: 0,
            insertOption: () => {},
            optionsRange: null,
        };
    },

    computed: {
        errors() {
            if (this.warnings.length < 1) {
                return [];
            }
            return this.warnings.map(mistake => {
                return {
                    overrideClass: mistake.overrideClass,
                    value: mistake.value,
                    message: mistake.message,
                    options: (mistake.options || []).map((value, id) => ({ value, id })),
                };
            });
        },
    },
    mounted() {
        this.currentValue = this.value;
        this.editor = new Editor({
            extensions: [
                new Blockquote(),
                new BulletList(),
                new ListItem(),
                new Bold(),
                new Italic(),
                /* new History(), */
                new Placeholder({
                    emptyClass: 'is-empty',
                    emptyNodeText: this.placeholder,
                }),
                new Warning({
                    getErrorWords: this.getErrorWords,
                    onEnter: ({ range, command, virtualNode, text }) => {
                        this.currentWarning = this.errors.find(err => err.value === text);
                        this.currentOptions = this.currentWarning.options || [];
                        this.navigatedOptionIndex = 0;
                        this.optionRange = range;
                        this.renderPopup(virtualNode);
                        this.insertOption = command;
                    },
                    onChange: ({ range, virtualNode, text }) => {
                        this.currentWarning = this.errors.find(err => err.value === text);
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
                }),
            ],
            content: this.value,
            onUpdate: ({ getJSON, getHTML }) => {
                this.currentValue = getHTML();
                this.$emit('update:value', getHTML());
            },
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
        this.popup.destroyAll();
    },
    methods: {
        getErrorWords() {
            if (this.errors.length < 1) {
                return [];
            }
            return this.errors.map(err => ({ value: err.value, overrideClass: err.overrideClass }));
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
                this.popup.destroyAll();
                this.popup = null;
            }
        },
    },
    watch: {
        warnings: function(n, o) {
            if (this.editor) {
                // hack to trigger a view redraw
                const cursor = this.editor.state.selection;
                this.editor.setContent(this.currentValue);
                const restore_cursor = this.editor.state.tr.setSelection(cursor);
                this.editor.view.dispatch(restore_cursor);
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

    border: 1px solid hsla(0, 0%, 4%, 0.1);

    p.is-empty:first-child::before {
        content: attr(data-empty-text);
        float: left;
        color: #aaa;
        pointer-events: none;
        height: 0;
        font-style: italic;
    }

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

            svg {
                padding-top: 4px;
                width: 12px;
            }
        }
    }

    .editor__content {
        font-size: 16px;
        height: 300px;
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
    }
}
</style>
