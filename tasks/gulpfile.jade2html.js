'use strict';

var
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  jade = require('gulp-jade'),
  config = require('../cfg/gulpfile.config');

module.exports = function(path) {
  return gulp.src(typeof(path) === 'string' ? path : config.html.src)
    .pipe(jade())
    .pipe(gulp.dest(function() {
      if (typeof(path) === 'string') {
        return (config.html.dist + path.replace(/(^[\s\S]+client[\\\/]+views[\\\/]+)([\s\S]+)/, '$2').replace(/[\\\/]*[^\\\/]+$/, ''))
          .replace(/[\\\/]/g, '/');
      } else {
        return config.html.dist;
      }
    } ()))
    .on('end', function() {
      gutil.log('...task done!');
    });
};
