var _ = require("underscore");
var Backbone = require("backbone");
var Project = require("./model");
var CreateView = require("./create");
var ShowView = require("./show");

module.exports = Backbone.Router.extend({

  initialize: function (options) {
    this.App = options.App;
    this.projects = window.GTT.projects;
  },

  routes: {
    "": "index",
    "projects": "index",
    "projects/new": "create",
    "projects/:name": "show"
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
    var App = this.App
    var model = new Project({name: name});
    var view = new ShowView({model: model});

    model.fetch({
      success: function () {
        App.vent.trigger("render:content", view);
      }
    })
  },

  create: function () {
    var model = new Project();
    var view = new CreateView({model: model});
    this.App.vent.trigger("render:content", view);
  }

});
