/**
 * stylus 编译 css 文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-31 09:58:29
 * @version 1.0
 */

'use strict';

const
  env = process.env,
  util = require('../../util'),
  dir = require('../directory/main')(env.PROJECT + '/'),
  stylus2css = require('../../common/stylus2css');

module.exports = function(gulp) {

  gulp.task('stylus2css', function() {
    return stylus2css({
      rootDir: util.createSrcDir(dir.css.src, '.styl', dir.exclude),
      baseDir: util.dir(dir.css.src),
      distDir: util.dir(dir.css.dist),
      assetsDir: util.dir(dir.dist + 'assets/'),
      server: dir.server[env.NODE_ENV],
      isCompress: env.NODE_ENV === 'production' ? true : false
    });
  });

};