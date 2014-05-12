var gulp = require("gulp");
var gutil = require("gulp-util");
var exec = require("gulp-exec");
var jshint = require("gulp-jshint");

gulp.task("test", function () {
  gulp.src("")
    .pipe(exec("npm test"))
    .on("error", gutil.log)
    .on("error", gutil.beep);
});

gulp.task("lint", function () {
  gulp.src(["app.js", "client/**/*.js"])
    .pipe(jshint());
});

gulp.task("default", function () {
  gulp.watch(["app.js", "client/**", "test/**"], function() {
    gulp.run("test");
  });
});

