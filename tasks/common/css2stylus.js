/**
 * css 文件转 stylus
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
    rootDir: 'temp/src/**/*.css', // 源文件路径
    baseDir: 'temp/src/', // 带转换文件根路径
    distDir: 'temp/dist/', // 构建路径
  }, config);

  return gulp.src(cfg.rootDir, { base: cfg.baseDir })
    .pipe(named(function(file) {
      var dist = util.dir(cfg.distDir + file.history[0].match(/[^\\\/]+$/)[0].split('.')[0] + '.styl');

      gutil.log(file.history[0]);

      if (fs.existsSync(dist)) {
        fs.unlinkSync(dist);
      }

      exec('css2stylus ' + file.history[0] + ' -o ' + cfg.distDir);
      this.queue(file);
    }));
};