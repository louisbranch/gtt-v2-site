var _ = require("underscore");
var Backbone = require("backbone");
var Project = require("./models/project");
var CreateView = require("./views/create");
var ShowView = require("./views/show");

module.exports = Backbone.Router.extend({

  initialize: function (options) {
    this.App = options.App;
  },

  routes: {
    "": "index",
    "projects": "index",
    "projects/new": "create",
    "projects/:name": "show"
    "projects/:name/days": "show"
  },

  index: function () {
    var projects = window.GTT.projects;
    var project = _.first(projects);
    if (project) {
      this.App.vent.trigger("navigate", "/projects/" + project);
    } else {
      this.create();
    }
  },

  show: function (name) {
    var App = this.App
    var model = new Project({name: name});
    var view = new ShowView({model: model, collection: model.days});

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
