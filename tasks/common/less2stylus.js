/**
 * less 文件转 stylus
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-14 10:22:22
 * @version 1.0.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  named = require('vinyl-named'),
  exec = require('child_process').exec,
  fs = require('fs'),

  util = require('../util');

module.exports = function(config) {
  var cfg = Object.assign({
    rootDir: 'temp/src/**/*.less', // 源文件路径
    baseDir: 'temp/src/', // 带转换文件根路径
    distDir: 'temp/dist/', // 构建路径
  }, config);

  if (!fs.existsSync(util.dir(cfg.distDir))) {
    fs.mkdirSync(util.dir(cfg.distDir));
  }

  return gulp.src(cfg.rootDir, { base: cfg.baseDir })
    .pipe(named(function(file) {
      gutil.log(file.history[0]);
      exec('less2stylus ' + file.history[0].replace(/(^|[^\\\/])([\\\/])([^\\\/]|$)/g, '$1$2$2$3') + ' > ' + util.dir(cfg.distDir + file.history[0].match(/[^\\\/]+$/)[0] + '.styl').replace(/(^|[^\\\/])([\\\/])([^\\\/]|$)/g, '$1$2$2$3'));
      this.queue(file);
    }));
};