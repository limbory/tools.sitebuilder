'use strict';

var
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  html2jade = require('gulp-html2jade'),
  config = require('../cfg/gulpfile.config');

module.exports = function() {
  return gulp.src(config.tool.src + '**/*.html')
    .pipe(html2jade({
      nspaces: 2
    })).pipe(gulp.dest(config.tool.dist))
    .on('end', function () {
      gutil.log('--------------html2jade转换结束--------------');
    });
};