var $ = require("jquery");
var Backbone = require("backbone");
var Marionette = require("backbone.marionette");
var Layout = require("./layout");
var Menu = require("menu");

Backbone.$ = Marionette.$ = $; // Fix for missing dependency

var App = new Marionette.Application();

App.addInitializer(function () {
  var layout = new Layout();
  $("body").append(layout.render().el);
  layout.menu.show(new Menu());

  Backbone.history.start();
});

module.exports = App;
