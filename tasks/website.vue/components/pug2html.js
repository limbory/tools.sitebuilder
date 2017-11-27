/**
 * pug 模板转 html 文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-27 16:14:11
 * @version 1.0.0
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
      rootDir: util.dir(dir.tpl.src + 'index.pug'),
      baseDir: util.dir(dir.tpl.src),
      distDir: util.dir(dir.tpl.dist),
      server: dir.server[env.NODE_ENV]
    });
    
  });

};