<template>
    <tiptapEditor
        :value.sync="localtext"
        :warnings="warnings"
        placeholder="write something will-ya!"
    />
</template>

<script>
import tiptapEditor from './tiptap-editor.vue';

export default {
    components: { tiptapEditor },
    data() {
        return {
            warnings: [
                {
                    value: 'the',
                    message: 'did you mean...',
                    options: ['too', 'pizza'], // optional
                },
                {
                    value: 'test text',
                    message: 'cannot say that, sorry',
                    overrideClass: 'underlined-green', // optional
                },
            ],
            localtext: 'this is the initial value',
        };
    },
};
</script>

<style>
</style>
