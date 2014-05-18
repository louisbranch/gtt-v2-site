var _ = require("underscore");
var Backbone = require("backbone");
var Project = require("./model");
var View = require("./view");

module.exports = Backbone.Router.extend({

  initialize: function (options) {
    this.App = options.App;
    this.projects = window.GTT.projects;
  },

  routes: {
    "": "index",
    "/projects": "index",
    "/projects/new": "create",
    "/projects/:name": "show"
  },

  index: function () {
    var project = _.first(this.projects);
    if (project) {
      this.App.vent.trigger("navigate", "/projects/" + project);
    } else {
      this.create();
    }
  },

  show: function (name) {
    var model = new Project({name: name});
    //this.App.vent.trigger("render:content", view);
  },

  create: function () {
    var model = new Project();
    var view = new View({model: model});
    this.App.vent.trigger("render:content", view);
  }

});
