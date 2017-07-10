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
    var his = (obj.history || [])[0];
    return his.replace(/\.[^\.]+$/, '')
      .replace(/(^[\s\S]+client[\\\/]+js[\\\/]+controllers[\\\/]+)([\s\S]+)/, '$2');

  };

module.exports = function(path) {
  gutil.log('********************开始执行jshint任务********************');

  return gulp.src(typeof(path) === 'string' ? path : config.js.src.replace(/\/[^\/]+\/[^\/]+$/, '/controllers/**/*.js'))
    .pipe(jshint(jshintCfg))
    .pipe(jshint.reporter('default'))
    .on('end', function() {
      gutil.log('********************完成jshint任务********************');
    })

    .pipe(named(function(file) {
      return strHandle(file);
    })).pipe(webpack(webpackCfg))
    .pipe(gulp.dest(config.js.dist))
    .on('end', function() {
      gutil.log('...task done!');
    });
}
