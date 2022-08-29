/**
 * This script was used to build the README 
 * for this package!
 */

import README from '../lib/index.js';
let template = new README({});

template.metadata = JSON.parse(template.read_metadata('package.json'));

template.use_component("./templates/header.md", {
  name: template.metadata.name,
  description: template.metadata.description,
  report_bug: template.metadata.bugs.url,
  request_feature: template.metadata.bugs.url,
});

template.use_component(
  "./templates/description.md",
  {
    name: template.metadata.name,
    long_description:
      "is a lightweight, easy-to-use tool for generating beautiful, concise and informative README's within seconds. The tool allows you to create templates which can be reused across many projects and makes README writing 100x easier and hassle-free. It requires little knowledge to use and you can get started right away with the following steps.",
  }
);

template.use_component("./templates/install.md", {package: template.metadata.name});
template.use_component("./docs/components/usage.md")
template.use_component("./docs/components/components.md")
template.use_component("./templates/license.md", {author: template.metadata.author.name, email: template.metadata.author.email, license: template.metadata.license})

template.make_readme();