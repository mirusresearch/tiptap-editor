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
                    value: "Chairman's Circle",
                    message: 'term not allowed',
                    offset: 7, // identifies which instance of the word is problematic
                    length: 17, // length of the word
                },
            ],
            localtext: "<p>test </p><p>Chairman's Circle</p>",
            localcount: null,
        };
    },
};
</script>
