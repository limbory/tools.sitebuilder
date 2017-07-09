'use strict';

var
  gulp = require('gulp'),
  config = require('../cfg/gulpfile.config');

module.exports = function(reload) {
  return gulp.src(config.watch.dir)
    .pipe(reload({
      stream: true
    }));
};
