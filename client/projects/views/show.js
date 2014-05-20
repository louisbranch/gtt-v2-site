var Marionette = require("backbone.marionette");
var Day = require("./day");

module.exports = Marionette.CompositeView.extend({
  template: "#template-project",

  itemView: Day,

  itemViewContainer: "tbody"
});
