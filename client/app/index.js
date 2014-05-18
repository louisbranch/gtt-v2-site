var $ = require("jquery");
var Backbone = require("backbone");
var Marionette = require("backbone.marionette");
var Layout = require("./layout");
var Menu = require("menu");

Backbone.$ = Marionette.$ = $; // Fix for missing dependency

var App = module.exports = new Marionette.Application();

var layout = new Layout();

var projects = new Backbone.Collection(window.GTT.projects);
var menu = new Menu({collection: projects});

App.addInitializer(function () {
  $("body").append(layout.render().el);
  layout.menu.show(menu);
  Backbone.history.start();
});
