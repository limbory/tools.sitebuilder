/**
 * html 文件转 pug
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-17 15:09:58
 * @version 1.0.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  named = require('vinyl-named'),
  dest = require('gulp-dest'),
  html2pug = require('html2pug'),
  prettify = require('gulp-html-prettify'),
  removeHtmlComments = require('gulp-remove-html-comments');

module.exports = function(config) {
  var cfg = Object.assign({
    rootDir: 'temp/src/**/*.html', // 源文件路径
    baseDir: 'temp/src/', // 带转换文件根路径
    distDir: 'temp/dist/', // 构建路径
  }, config);


  return gulp.src(cfg.rootDir, { base: cfg.baseDir })
    .pipe(removeHtmlComments())
    .pipe(prettify({ indent_size: 2 }))
    .pipe(named(function(file) {

      gutil.log(file.history[0]);
      file.contents = new Buffer(html2pug(String(file.contents), {
        tabs: false
      }));

      this.queue(file);
    }))
    .pipe(dest(cfg.distDir, { ext: '.pug' }))
    .pipe(gulp.dest('.'));
};