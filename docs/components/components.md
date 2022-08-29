<!-- Using markdown components -->

## Markdown components

`readme.js` has some premade [`components`](../templates/) that can be used in your own READMEs.

Simply move them to a folder in your project and include the information required.

### Making your own components

Making components is just the same as normal markdown. However, anything that needs to be replaced during build needs to be wrapped round with curly brackets and an identifer.

#### [template.md]()

```markdown
## My {descriptive_word} component

Such a descriptive word.
```

#### [make_template.js]()

```js
import README from "readme.js";

template = new README();

template.use_component("./template.md", {
  descriptive_word: "incomprehensible",
});

template.make_readme();
```
