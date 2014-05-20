var Marionette = require("backbone.marionette");
var moment = require("moment");

module.exports = Marionette.ItemView.extend({
  template: "#template-day",

  tagName: "tr",

  templateHelpers: {

    time: function (date) {
      return moment(date).format("h:mma");
    },

    day: function (date) {
      return moment(date).format("dddd, MMMM Do");
    }

  }

});
