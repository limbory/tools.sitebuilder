/**
 * webpack 打包
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-27 15:14:39
 * @version 1.0.0
 */

'use strict';

const
  jshint = require('gulp-jshint'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),

  env = process.env,
  util = require('../../util'),
  dir = require('../directory/main')(env.PROJECT + '/'),
  jshintCfg = require('../config/jshint.config'),
  webpackCfg = require('../config/webpack.config');

module.exports = function(gulp) {

  gulp.task('packjs', function() {

    return gulp.src(util.dir(dir.js.src + 'main.js'))
      .pipe(jshint(jshintCfg))
      .pipe(jshint.reporter('default'))
      .pipe(webpackStream(webpackCfg, webpack))
      .pipe(gulp.dest(util.dir(dir.js.dist)));

  });

};