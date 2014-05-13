var $ = require("jquery");
var Backbone = require("backbone");
var Marionette = require("backbone.marionette");
var HeaderView = require("header");

Backbone.$ = Marionette.$ = $; // Fix for missing dependency

var header = new HeaderView();

$("body").append(header.render().el);
