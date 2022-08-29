"use strict";
import fs from "fs";

String.prototype.metadata =
  String.prototype.metadata ||
  function () {
    var str = this.toString();
    if (arguments.length) {
      var t = typeof arguments[0];
      var key;
      var args =
        "string" === t || "number" === t
          ? Array.prototype.slice.call(arguments)
          : arguments[0];

      for (key in args) {
        str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
      }
    }
    return str;
  };

class README {
  constructor() {
    this.metadata = undefined;
    this.readme = "";
  }
  read_metadata(file_name) {
    try {
      let file = fs.readFileSync(file_name, "utf8");
      return file;
    } catch (err) {
      throw err;
    }
  }
  use_component(component, replace_info) {
    try {
      let component_template = this.read_metadata(component);
      let built_component = component_template;
      if (replace_info !== undefined)
        built_component = component_template.metadata(replace_info);
      if (this.readme === "") this.readme = this.readme + built_component;
      else this.readme = this.readme + "\n\n" + built_component;
    } catch (err) {
      throw err;
    }
  }
  make_readme() {
    fs.writeFile("README.md", this.readme, function (err) {
      if (err) {
        throw err;
      }
    });
  }
}

export default README;
