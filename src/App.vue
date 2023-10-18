<template>
    <tiptapEditor
        :value.sync="localtext"
        :warnings="warnings"
        :showMenu="showMenu"
        :maxCharacterCount="maxCharacterCount"
        :height="height"
        v-on:new-character-count="localcount = $event"
        id="unique_id"
        placeholder="write something will-ya!"
    />
</template>

<script>
import tiptapEditor from './tiptap-editor.vue';

export default {
    name: 'app',
    components: { tiptapEditor },
    data() {
        return {
            maxCharacterCount: 250, //default null for infinity
            height: '200px', // default it 300px
            showMenu: true, // false to hide
            warnings: [
                {
                    value: 'red',
                    message: 'did you mean...',
                    options: ['read', 'reed'], // optional
                    offset: 57, // identifies which instance of the word is problematic
                    length: 3, // length of the word
                },
                {
                    value: 'prob|emati(', // avoid regexs that go bump in the night
                    isWord: false,
                    message: 'What even is this?',
                },
                {
                    value: '<script&gt;', // can use the real thing, or escape it
                    isWord: false,
                    message: 'you sure you wanted a tag?',
                    overrideClass: 'underline-blue', // optional
                    offset: 12,
                    length: 8,
                },
                {
                    value: 'green',
                    message: 'I really like this!',
                    overrideClass: 'underline-green', // optional
                },
                {
                    value: 'orange',
                    message: 'this is a bad idea!',
                    overrideClass: 'underline-orange', // optional
                },
            ],
            localtext:
                'Hi! 👋🏻 &lt;script&gt; welcome to tiptap editor, here is a red mark blue with suggestions. Even prob|emati( strings. You can highlight with other colors, e.g blue, orange, and green!! This &lt;script&gt should not have any highlight.',
            localcount: null,
        };
    },
};
</script>
