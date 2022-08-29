import README from '../lib/index.js';

let template = new README();

template.use_component("./templates/header.md", {
  name: "My AMAZING README!",
  description: "Customizable and reusable!",
});
template.use_component("./templates/license.md", { author: "John Doe", email: "john@doe.com", license: "MIT" });

template.make_readme()
console.log('Have a look at your README!')