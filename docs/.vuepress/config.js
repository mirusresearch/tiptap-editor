module.exports = {
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'TiptapEditor',
      description: 'TiptapEditor for Vue.js'
    }
  },
  themeConfig: {
    repo: 'alec@mirusresearch.com/tiptap-editor',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com/alec@mirusresearch.com/tiptap-editor/releases'
        }],
        sidebar: [
          '/installation.md',
          '/started.md',
        ]
      }
    }
  }
}
