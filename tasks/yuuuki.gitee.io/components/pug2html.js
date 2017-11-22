/**
 * pug 模板转 html 文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-26 10:09:05
 * @version 1.0
 */

'use strict';

const
  env = process.env,
  util = require('../../util'),
  dir = require('../directory/main')(env.PROJECT + '/'),
  pug2html = require('../../common/pug2html');

module.exports = function(gulp) {

  gulp.task('pug2html', function() {
    return pug2html({
      rootDir: util.createSrcDir(dir.html.src, '.pug', dir.exclude),
      baseDir: util.dir(dir.html.src),
      distDir: util.dir(dir.html.dist),
      server: dir.server[env.NODE_ENV]
    });
  });

};