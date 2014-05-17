var Marionette = require("backbone.marionette");

module.exports = Marionette.ItemView.extend({
  template: "#template-menu"
});

function stringToColor(str) {
  var hash = 0;
  var color = '#';

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}
