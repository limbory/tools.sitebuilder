/**
 * 构建文件清除
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-31 11:22:35
 * @version 1.0
 */

'use strict';

const
  env = process.env,
  util = require('../../util'),
  dir = require('../directory/main')(env.PROJECT + '/'),
  clean = require('../../common/clean');

module.exports = function(gulp) {

  gulp.task('clean', function() {
    return clean({ fileDir: util.deleteSrcDir(dir.dist, ['assets/', '*.md', '*.yml', '.git*']) });
  });

};