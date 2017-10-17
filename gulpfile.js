'use strict';

var
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  dir = require('./config/directory');


/* 测试用 */
gulp.task('default', function() {
  gutil.log(dir('cascsa'));
  gutil.log(process.env.NODE_ENV);
});
