/**
 * gulp 入口文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-26 13:45:04
 * @version 1.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  env = process.env;

switch (env.PROJECT) {

  case 'yuuuki.gitee.io':
    require('./tasks/' + env.PROJECT + '/main')(gulp);
    break;

  case 'custom.tools':
    require('./tasks/' + env.PROJECT + '/main')(gulp);
    break;

  case 'website.vue':
    require('./tasks/' + env.PROJECT + '/main')(gulp);
    break;

  default:
    void 0;
}

/* 测试用 */
gulp.task('default', function() {
  gutil.log('this is gulp!!');
});