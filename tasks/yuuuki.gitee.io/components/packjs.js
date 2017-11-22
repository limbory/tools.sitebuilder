/**
 * webpack 打包 js
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-06 10:41:30
 * @version 1.0
 */

'use strict';

const
  env = process.env,
  util = require('../../util'),
  dir = require('../directory/main')(env.PROJECT + '/'),
  packjs = require('../../common/packjs');

module.exports = function(gulp) {

  gulp.task('packjs', function() {
    return packjs({
      rootDir: util.createSrcDir(dir.js.src, '.js', dir.exclude),
      baseDir: util.dir(dir.js.src),
      distDir: util.dir(dir.js.dist),
      devMode: env.NODE_ENV === 'production' ? '' : ''/*'eval-source-map'*/,
      isCompress: env.NODE_ENV === 'production' ? true : false,
      jshintCfg: util.dir('tasks/yuuuki.gitee.io/config/jshint.config'),
      webpackCfg: util.dir('tasks/yuuuki.gitee.io/config/webpack.config')
    });
  });

};