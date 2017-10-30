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
  pug2html = require('./tasks/common/pug2html');

/* 测试用 */
gulp.task('default', function() {
  pug2html({
    rootDir: util.createSrcDir(dir.html.src, '.pug', dir.exclude),
    baseDir: util.dir(dir.html.src),
    distDir: util.dir(dir.html.dist)
  });
});
