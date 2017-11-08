/**
 * 构建文件清除
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-31 11:22:35
 * @version 1.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  clean = require('gulp-clean'),
  named = require('vinyl-named'),

  util = require('../util');

module.exports = function(config) {
  var cfg = Object.assign({
    fileDir: '', // 文件路径
  }, config);

  return gulp.src(cfg.fileDir, { read: false })
    .pipe(named(function(file) {
      gutil.log('delete directory ' + file.history.slice(-1));
      this.queue(file);
    }))
    .pipe(clean({ force: true }))
    .on('end', function() {
      gutil.log('Finished task--------------------clean distribution!');
    });
};