# Installation

## Direct Download / CDN

https://unpkg.com/tiptap-editor/dist/tiptap-editor 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/tiptap-editor@{{ $version }}/dist/tiptap-editor.js
 
Include tiptap-editor after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/tiptap-editor/dist/tiptap-editor.js"></script>
```

## NPM

```sh
$ npm install tiptap-editor
```

## Yarn

```sh
$ yarn add tiptap-editor
```

When used with a module system, you must explicitly install the `tiptap-editor` via `Vue.use()`:

```javascript
import Vue from 'vue'
import tiptap-editor from 'tiptap-editor'

Vue.use(tiptap-editor)
```

You don't need to do this when using global script tags.

