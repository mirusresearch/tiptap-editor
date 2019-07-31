vue component that contains our custom setup for the tiptap editor. Able to highlihght phrases and give reasons/fixes to the warnings

```bash
npm i tiptap-editor
yarn add tiptap-editor
```

![example image](img/example.png)

```js
<template>
  <TextEditor
    :value.sync="localtext"
    :warnings="warnings"
    :showMenu="true"
    :maxCharacterCount="200"
    height="500px"
    placeholder="write something will-ya!"
    id="some_unique_id"
  />
</template

<script>
import TextEditor from 'tiptap-editor'

export default {
    components: { TextEditor },
    data() {
        return {
            warnings: [],
            value: 'this is the initial value'
        }
    }
}

</script>
```


### Props:

#### value: String
the text to edit

#### placeholder: String
Text to display when there is nothing in the editor

#### warnings: [ Objects ]
array of text that should be warned about
```js
[
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
]
```

#### maxCharacterCount: Number
Show a count of the current number of characters. If over the max the count will show red

#### height: String
height of the text editor, default is `300px`

#### showMenu: Boolean
if false, hide the format menu

#### id: String
give the editor a unique id, also adds aria tags to link the editor menu to the text area
