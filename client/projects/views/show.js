var Marionette = require("backbone.marionette");

module.exports = Marionette.CompositeView.extend({
  template: "#template-project",

  itemView: Day,

  itemViewContainer: "ul"
});
