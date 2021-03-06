import { inject, BindingEngine } from "aurelia-framework";

// var MKBLoader = require('../../../../loader/mkb-loader');

@inject(BindingEngine)
export class ItemModal {
  constructor(bindingEngine) {
    this.bindingEngine = bindingEngine;
  }

  activate(context) {
    this.data = context.data;
    this.error = context.error;
    this.options = context.context.options;
    this.readOnly = context.options.readOnly;
  }

  // -------------------------------- //

  // get mkbLoader() {
  //     return MKBLoader;
  // }
}
