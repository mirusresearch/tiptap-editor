<template>
    <tiptapEditor
        :value.sync="localtext"
        :warnings="warnings"
        :showMenu="showMenu"
        :maxCharacterCount="maxCharacterCount"
        :height="height"
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
            maxCharacterCount: 200, //default null for infinity
            height: '200px', // default it 300px
            showMenu: true, // false to hide
            warnings: [
                {
                    value: 'red',
                    message: 'did you mean...',
                    options: ['read', 'reed'], // optional
                    // default class is red
                },
                {
                    value: '<script&gt;', // can use the real thing, or escape it
                    isWord: false,
                    message: 'you sure you wanted a tag?',
                    overrideClass: 'underline-blue', // optional
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
                '&lt;script&gt; welcome to tiptap editor, here is a red mark blue with suggestions. You can also to blue, orange, and green!!',
        };
    },
};
</script>
