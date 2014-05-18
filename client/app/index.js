var $ = require("jquery");
var Backbone = require("backbone");
var Marionette = require("backbone.marionette");
var Layout = require("./layout");
var Menu = require("menu");
var Projects = require("projects");

Backbone.$ = Marionette.$ = $; // Fix for missing dependency

var App = module.exports = new Marionette.Application();

var layout = new Layout();

var menu = new Menu();

App.addInitializer(function () {
  $("body").append(layout.render().el);
  layout.menu.show(menu);
  new Projects({App: App});
  Backbone.history.start();
});

App.vent.on("navigate", function (path) {
  Backbone.history.navigate(path, true);
});

App.vent.on("render:content", function (view) {
  layout.content.show(view);
});
