'use strict';

var
  config = require('../cfg/gulpfile.config'),
  jshintCfg = require('../cfg/jshint.config'),
  webpackCfg = require('../cfg/webpack.config'),

  gulp = require('gulp'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  webpack = require('webpack-stream'),
  named = require('vinyl-named'),

  strHandle = function(obj) {
    var
      his = (obj.history || [])[0],
      base = obj.base
    ;
    return his.slice(base.length).replace(/\.[^\.]+$/, '');
  };

module.exports = function() {
  gutil.log('********************开始执行jshint任务********************');

  return gulp.src(config.js.src.replace(/\/[^\/]+\/[^\/]+$/, '/controllers/**/*.js'))
    .pipe(jshint(jshintCfg))
    .pipe(jshint.reporter('default'))
    .on('end', function() {
      gutil.log('********************完成jshint任务********************');
    })

    .pipe(named(function(file) {
      return strHandle(file);
    })).pipe(webpack(webpackCfg))
    .pipe(gulp.dest(config.js.dist));
}
