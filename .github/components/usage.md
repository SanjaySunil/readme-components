<!-- Usage
This is a pre-written component which will be directly used in the README.
-->

## Usage

### [`readme-components`](./examples/readme-components)

```js
import README from "readme-components";

let template = new README();

template.use_component("./templates/header.md", {
  name: "My AMAZING README!",
  description: "Customizable and reusable!",
});

template.use_component("./templates/license.md", {
  author: "John Doe",
  email: "john@doe.com",
  license: "MIT",
});

template.make_readme();
```
