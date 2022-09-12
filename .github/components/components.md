<!-- Using markdown components -->

## Markdown components

`readme-components` has some premade [`components`](./lib/templates/) that can be used in your own READMEs.

Simply use `.use_premade(template)` in order to make use of them!

#### Example
```js
import README from "readme-components";

template = new README();

template.use_premade("header", {
  name: "my-awesome-readme",
  description: "made using a premade header!"
});

template.make_readme();
```

### Making your own components

Making components is just the same as normal markdown. However, anything that needs to be replaced during build needs to be wrapped round with curly brackets and an identifer.

#### [template.md]()

```markdown
## My {descriptive_word} component

Such a descriptive word.
```

#### [make_template.js]()

```js
import README from "readme-components";

template = new README();

template.use_component("./template.md", {
  descriptive_word: "incomprehensible",
});

template.make_readme();
```
