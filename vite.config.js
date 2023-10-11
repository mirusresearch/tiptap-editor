import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';

const path = require('path');

export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'TiptapEditor',
            fileName: (format) => `tiptap-editor.${format}.js`,
        },
    },
});
