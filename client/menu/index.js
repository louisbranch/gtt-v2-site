var Marionette = require("backbone.marionette");

module.exports = Marionette.ItemView.extend({
  template: "#template-menu",

  templateHelpers: {

    projects: function () {
      return window.GTT.projects;
    },

    color: function (name) {
      var hash = 0;
      var color = '#';

      for (var i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }

      for (var j = 0; j < 3; j++) {
        var value = (hash >> (j * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
      }

      return color;
    }

  }

});
