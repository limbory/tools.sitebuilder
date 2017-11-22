/**
 * webpack 打包 js
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-06 10:41:30
 * @version 1.0
 */

'use strict';

const
  gulp = require('gulp'),
  named = require('vinyl-named'),
  jshint = require('gulp-jshint'),
  webpack = require('webpack-stream'),
  webpackOrigin = require('webpack'),

  util = require('../util');

module.exports = function(config) {
  var cfg = Object.assign({
    rootDir: '', // 源文件路径
    baseDir: '', // 带转换文件根路径
    distDir: '', // 构建路径
    isCompress: false, // 转换后是否压缩（默认不压缩）
    devMode: '', // 调试模式
  }, config);

  var
    jshintCfg = require(cfg.jshintCfg),
    webpackCfg = require(cfg.webpackCfg);

  var stream = gulp.src(cfg.rootDir, {
      base: cfg.baseDir
    })
    .pipe(jshint(jshintCfg))
    .pipe(jshint.reporter('default'))
    .pipe(named(function(file) {
      return util.handleDirString(file.history.slice(0, 1))
        .slice(util.handleDirString(cfg.baseDir).length).join('/').replace(/\.[^\.]*$/, '');
    }));

  webpackCfg.devtool = cfg.devMode;

  if (cfg.isCompress) {
    webpackCfg.plugins.push(new webpackOrigin.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: false
      },
      mangle: {
        screw_ie8: false
      },
      output: {
        comments: false,
        screw_ie8: false
      }
    }));
    delete webpackCfg.devtool;
  }

  return stream.pipe(webpack(webpackCfg))
    .pipe(gulp.dest(cfg.distDir));

};