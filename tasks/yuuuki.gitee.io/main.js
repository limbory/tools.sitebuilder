/**
 * github-pages 构建工具入口文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-08 14:13:17
 * @version 1.0.0
 */
'use strict';

const
  gutil        = require('gulp-util'),
  gulpSequence = require('gulp-sequence'),
  gulpWatch    = require('gulp-watch'),
  browserSync  = require('browser-sync').create(),
  exec         = require('child_process').exec,
  fs           = require('fs'),
  
  env  = process.env,
  util = require('../util'),
  dir  = require('./directory/main')(env.PROJECT + '/');

module.exports = function(gulp) {

  require('./components/clean')(gulp);
  require('./components/pug2html')(gulp);
  require('./components/stylus2css')(gulp);
  require('./components/packjs')(gulp);
  require('./components/css2stylus')(gulp);
  require('./components/less2stylus')(gulp);
  require('./components/html2pug')(gulp);

  /* 开发模块 */
  gulp.task('dev', function() {
    return gulpSequence('clean', 'pug2html', 'stylus2css', 'packjs', function() {

      var flag, serviceFolder = dir.dist + '_site/';

      // 创建服务端目录
      fs.mkdirSync(util.dir(serviceFolder));
      // 启动服务端
      browserSync.init({
        server: { baseDir: util.dir(serviceFolder) },
        port: 3356,
        // notify: false,
        // logLevel: "silent",
      });
      // 启动jekyll构建任务
      exec('cd ' + dir.dist + ' && jekyll b --watch');

      // 启动构建目录监听
      gulpWatch(dir.html.src, function() { return gulpSequence('pug2html', util.noop); });
      gulpWatch(dir.css.src, function() { return gulpSequence('stylus2css', util.noop); });
      gulpWatch(dir.js.src, function() { return gulpSequence('packjs', util.noop); });

      gulpWatch(serviceFolder, function() {
        clearTimeout(flag);
        flag = setTimeout(function() {
          gutil.log('browserSync.reload');
          browserSync.reload();
        }, 500);
      });

    });
  });


  /* 静态文件构建模块 */
  gulp.task('production', gulpSequence('clean', 'pug2html', 'stylus2css', 'packjs'));

};