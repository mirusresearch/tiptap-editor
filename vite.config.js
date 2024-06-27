import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
    plugins: [vue(), cssInjectedByJsPlugin()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'TiptapEditor',
            fileName: 'tiptap-editor',
            formats: ['es'],
        },
    },
});
