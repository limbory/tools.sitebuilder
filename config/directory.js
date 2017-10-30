/**
 * 项目结构路径
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-13 10:58:27
 * @version 1.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),

  util = require('../tasks/util');

const
  SRC_DIR = 'lib/',
  DIST_DIR = 'public/';

/**
 * 动态导出项目路径
 * @param  {string} pathName 项目根目录名称
 * @return {object}          包含绝对路径字符串的对象
 */
module.exports = function(pathName) {
  return {
    src: util.dir(SRC_DIR + pathName + '/'),
    dist: util.dir(DIST_DIR + pathName + '/'),
    exclude: ['assets', 'components', 'common', 'layout'],
    html: {
      src: util.dir(SRC_DIR + pathName + '/views/'),
      dist: util.dir(DIST_DIR + pathName + '/')
    },
    css: {
      src: util.dir(SRC_DIR + pathName + '/style/'),
      dist: util.dir(DIST_DIR + pathName + '/dist/css/')
    },
    js: {
      src: util.dir(SRC_DIR + pathName + '/javascript/'),
      dist: util.dir(DIST_DIR + pathName + '/dist/js/')
    }
  };
};

