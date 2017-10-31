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

  util = require('./tasks/util'),
  dir = require('./config/directory')(process.env.PROJECT + '/'),
  pug2html = require('./tasks/common/pug2html'),
  stylus2css = require('./tasks/common/stylus2css');

/* 测试用 */
gulp.task('default', function() {
  // pug2html({
  //   rootDir: util.createSrcDir(dir.html.src, '.pug', dir.exclude),
  //   baseDir: util.dir(dir.html.src),
  //   distDir: util.dir(dir.html.dist)
  // });
  // stylus2css({
  //   rootDir: util.createSrcDir(dir.css.src, '.styl', dir.exclude),
  //   baseDir: util.dir(dir.css.src),
  //   distDir: util.dir(dir.css.dist),
  //   assetsDir: util.dir(dir.dist),
  //   isCompress: true,
  // });
});
