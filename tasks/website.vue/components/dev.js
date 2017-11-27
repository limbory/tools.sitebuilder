/**
 * webpack 打包
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-27 15:14:39
 * @version 1.0.0
 */

'use strict';

const
  browserSync = require('browser-sync').create(),
  gulpWatch = require('gulp-watch'),
  gulpSequence = require('gulp-sequence'),

  env = process.env,
  util = require('../../util'),
  dir = require('../directory/main')(env.PROJECT + '/');

module.exports = function(gulp) {

  gulp.task('dev', function() {

    return gulpSequence('clean', 'pug2html', 'packjs', function() {

      var flag = null;

      // 启动服务端
      browserSync.init({
        server: { baseDir: util.dir(dir.dist) },
        port: 3356,
        // notify: false,
        // logLevel: "silent",
      });

      // 启动构建目录监听
      gulpWatch(dir.tpl.src, function() { return gulpSequence('pug2html', util.noop); });
      
      gulpWatch([
        dir.js.src, dir.tpl.src, dir.styl.src
      ], function() { return gulpSequence('packjs', util.noop); });

      gulpWatch(dir.dist, function() {
        clearTimeout(flag);
        flag = setTimeout(function() {
          browserSync.reload();
        }, 500);
      });

    });

  });

};