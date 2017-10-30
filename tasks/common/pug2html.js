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

module.exports = function(rootDir, baseDir, distDir) {
  return gulp.src(rootDir, { base: baseDir })

    .pipe(pug())
    .pipe(gulp.dest(distDir))

    .on('end', function() {
      gutil.log('Finished task--------------------pug2html!');
    });
};