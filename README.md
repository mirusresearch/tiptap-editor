vue component that contains our custom setup for the tiptap editor. Able to highlihght phrases and give reasons/fixes to the warnings

![example image](img/example.png)

```js
<template>
  <TextEditor
    :value.sync="localtext"
    :warnings="warnings"
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

#### value
the initial text to edit

#### warnings
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
