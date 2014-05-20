var Backbone = require("backbone");
var Days = require("./days");

module.exports = Backbone.Model.extend({
  idAttribute: "name",

  urlRoot: "/projects",

  parse: function (response) {
    this.days = new Days(response.days);
    return response;
  }
});
