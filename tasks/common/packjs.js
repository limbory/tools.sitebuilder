/**
 * webpack 打包 js
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-06 10:41:30
 * @version 1.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  named = require('vinyl-named'),
  jshint = require('gulp-jshint'),
  webpack = require('webpack-stream'),
  webpackOrigin = require('webpack'),

  util = require('../util'),
  jshintCfg = require(util.dir('config/common/jshint.config')),
  webpackCfg = require(util.dir('config/common/webpack.config'));

module.exports = function(config) {
  var cfg = Object.assign({
    rootDir: '', // 源文件路径
    baseDir: '', // 带转换文件根路径
    distDir: '', // 构建路径
    isCompress: false // 转换后是否压缩（默认不压缩）
  }, config);

  var stream = gulp.src(cfg.rootDir, {
      base: cfg.baseDir
    })
    .pipe(jshint(jshintCfg))
    .pipe(jshint.reporter('default'))
    .pipe(named(function(file) {
      return util.handleDirString(file.history.slice(0, 1))
        .slice(util.handleDirString(cfg.baseDir).length).join('/').replace(/\.[^\.]*$/, '');
    }));

  if (cfg.isCompress) {
    webpackCfg.plugins.push(new webpackOrigin.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: false }
    }));
    delete webpackCfg.devtool;
  }

  return stream.pipe(webpack(webpackCfg))
    .pipe(gulp.dest(cfg.distDir));

};