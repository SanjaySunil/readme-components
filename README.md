<!-- Header -->
<br/><br/>
<h1 align="center">readme-components</h1>
  <p align="center">
    Generate a neat and informative README using customizable components
    <br />
    <br />
    <a href="https://github.com/SanjaySunil/package-readme/issues">Report Bug</a>
    ·
    <a href="https://github.com/SanjaySunil/package-readme/issues">Request Feature</a>
  </p>
</h1>
<br/><br/>

<!-- Description -->
## What's readme-components?

[readme-components]() is a lightweight, easy-to-use tool for generating beautiful, concise and informative README's within seconds. The tool allows you to create templates which can be reused across many projects and makes README writing 100x easier and hassle-free. It requires little knowledge to use and you can get started right away with the following steps.

<!-- Install -->
## Install
```sh
$ npm install readme-components
```

<!-- Usage
This is a pre-written component which will be directly used in the README.
-->

## Usage

### [`readme-components`](../examples/readme-components)

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


<!-- Using markdown components -->

## Markdown components

`readme-components` has some premade [`components`](../templates/) that can be used in your own READMEs.

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
import README from "readme-components";

template = new README();

template.use_component("./template.md", {
  descriptive_word: "incomprehensible",
});

template.make_readme();
```


<!-- License -->
## License

Copyright © 2022 Sanjay Sunil (sanjaysunil@protonmail.com)

Distributed under the MIT License. See `LICENSE` for more information.
