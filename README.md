vue component that contains our custom setup for the tiptap editor

![example image](img/example.png)

```js
import TextEditor from 'tiptap-editor'

export default {
    components: { TextEditor },
}
```


```js
 [
                {
                    value: 'the',
                    message: 'did you mean...',
                    options: ['too', 'pizza'],
                },
                {
                    value: 'test text',
                    message: 'cannot say that, sorry',
                },
            ]
```
