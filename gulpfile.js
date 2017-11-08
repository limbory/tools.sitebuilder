/**
 * gulp 入口文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-26 13:45:04
 * @version 1.0
 */

'use strict';

const
  gulp = require('gulp'),
  path = require('path'),
  gutil = require('gulp-util'),
  gulpSequence = require('gulp-sequence'),

  util = require('./tasks/util'),
  dir = require('./config/directory')(process.env.PROJECT + '/'),
  pug2html = require('./tasks/common/pug2html'),
  stylus2css = require('./tasks/common/stylus2css'),
  packjs = require('./tasks/common/packjs'),
  clean = require('./tasks/common/clean');

/* 测试用 */
gulp.task('default', function() {
  // clean({ fileDir: util.deleteSrcDir(dir.dist, ['assets/', '*.md', '*.yml', '.git*']) });

  // pug2html({
  //   rootDir: util.createSrcDir(dir.html.src, '.pug', dir.exclude),
  //   baseDir: util.dir(dir.html.src),
  //   distDir: util.dir(dir.html.dist),
  //   isCompress: true
  // });
  // stylus2css({
  //   rootDir: util.createSrcDir(dir.css.src, '.styl', dir.exclude),
  //   baseDir: util.dir(dir.css.src),
  //   distDir: util.dir(dir.css.dist),
  //   assetsDir: util.dir(dir.dist),
  // });
  // packjs({
  //   rootDir: util.createSrcDir(dir.js.src, '.js', dir.exclude),
  //   baseDir: util.dir(dir.js.src),
  //   distDir: util.dir(dir.js.dist),
  // });
});