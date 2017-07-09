'use strict';

var
  gulp = require('gulp'),
  jade = require('gulp-jade'),
  config = require('../cfg/gulpfile.config');

module.exports = function() {
  return gulp.src(config.html.src)
    .pipe(jade())
    .pipe(gulp.dest(config.html.dist));
};
