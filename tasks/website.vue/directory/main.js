/**
 * 项目目录
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-27 15:39:52
 * @version 1.0.0
 */

'use strict';

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
    src: SRC_DIR + pathName,
    dist: DIST_DIR + pathName,
    exclude: ['assets/', 'components/', 'layouts/', 'common/'],
    tpl: {
      src: SRC_DIR + pathName + 'views/',
      dist: DIST_DIR + pathName
    },
    styl: {
      src: SRC_DIR + pathName + 'style/',
      dist: DIST_DIR + pathName + 'dist/css/'
    },
    js: {
      src: SRC_DIR + pathName + 'javascript/',
      dist: DIST_DIR + pathName + 'dist/js/'
    },
    server: {
      dev: {
        baseUrl: '/',
        assetsUrl: '/assets/',
        version: '?v1.0.0'
      },
      production: {
        baseUrl: '/home/',
        assetsUrl: '/home/assets/',
        version: '?v1.0.2'
      }
    }
  };
};

