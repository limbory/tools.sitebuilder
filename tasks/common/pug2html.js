/**
 * pug 模板转 html 文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-26 10:09:05
 * @version 1.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  pug = require('gulp-pug'),

  util = require('../util'),
  dir = require(util.dir('config/directory'));

module.exports = function(config) {
  var cfg = Object.assign({
    rootDir: '', // 源文件路径
    baseDir: '', // 带转换文件根路径
    distDir: '', // 构建路径
    isCompress: false // 转换后是否压缩（默认不压缩）
  }, config);

  return gulp.src(cfg.rootDir, { base: cfg.baseDir })

    .pipe(pug({pretty: !cfg.isCompress}))
    .pipe(gulp.dest(cfg.distDir))

    .on('end', function() {
      gutil.log('Finished task--------------------pug2html!');
    });
};