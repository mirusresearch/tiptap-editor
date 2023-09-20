import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'

const path = require("path");

export default defineConfig({
    plugins: [vue()],
})