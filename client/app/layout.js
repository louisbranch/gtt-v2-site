var Marionette = require("backbone.marionette");

module.exports = Marionette.Layout.extend({
  template: "#template-app-layout",

  regions: {
    menu: "#gtt-menu",
    content: "#gtt-container"
  }
});
