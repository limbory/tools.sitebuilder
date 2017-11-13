/**
 * github-pages 构建工具入口文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-08 14:13:17
 * @version 1.0.0
 */
'use strict';

const
  gutil = require('gulp-util'),
  gulpSequence = require('gulp-sequence'),
  gulpWatch = require('gulp-watch'),
  browserSync = require('browser-sync').create(),
  fs = require('fs'),
  exec = require('child_process').exec,

  env = process.env,
  util = require('../util'),
  dir = require(util.dir('config/directory'))(env.PROJECT + '/'),
  pug2html = require(util.dir('tasks/common/pug2html')),
  stylus2css = require(util.dir('tasks/common/stylus2css')),
  packjs = require(util.dir('tasks/common/packjs')),
  clean = require(util.dir('tasks/common/clean'));

module.exports = function(gulp) {

  const
    fullDirMsgHTML = {
      rootDir: util.createSrcDir(dir.html.src, '.pug', dir.exclude),
      baseDir: util.dir(dir.html.src),
      distDir: util.dir(dir.html.dist)
    },
    fullDirMsgCSS = {
      rootDir: util.createSrcDir(dir.css.src, '.styl', dir.exclude),
      baseDir: util.dir(dir.css.src),
      distDir: util.dir(dir.css.dist),
      assetsDir: util.dir(dir.dist),
      isCompress: env.NODE_ENV === 'production' ? true : false
    },
    fullDirMsgJS = {
      rootDir: util.createSrcDir(dir.js.src, '.js', dir.exclude),
      baseDir: util.dir(dir.js.src),
      distDir: util.dir(dir.js.dist),
      devMode: env.NODE_ENV === 'production' ? '' : 'eval-source-map',
      isCompress: env.NODE_ENV === 'production' ? true : false
    };

  /* 清除构建文件 */
  gulp.task('clean', function() {
    return clean({ fileDir: util.deleteSrcDir(dir.dist, ['assets/', '*.md', '*.yml', '.git*']) });
  });


  /* 开发模块 */
  gulp.task('dev', function() {
    return gulpSequence('clean', 'pug2html', 'stylus2css', 'packjs', function() {

      var flag, serviceFolder = dir.dist + '_site/';

      // 创建服务端目录
      fs.mkdirSync(util.dir(serviceFolder));
      // 启动服务端
      browserSync.init({
        server: { baseDir: util.dir(serviceFolder) },
        notify: false,
        port: 3355,
        logLevel: "silent"
      });
      // 启动jekyll构建任务
      exec('cd ' + dir.dist + ' && jekyll b --watch');

      // 启动构建目录监听
      gulpWatch(dir.html.src, function() { return gulpSequence('pug2html', util.noop); });
      gulpWatch(dir.css.src, function() { return gulpSequence('stylus2css', util.noop); });
      gulpWatch(dir.js.src, function() { return gulpSequence('packjs', util.noop); });

      gulpWatch(serviceFolder, function() {
        clearTimeout(flag)
        flag = setTimeout(function() {
          gutil.log('browserSync.reload');
          browserSync.reload();
        }, 500);
      });

    });
  });
  gulp.task('pug2html', function() { return pug2html(fullDirMsgHTML); });
  gulp.task('stylus2css', function() { return stylus2css(fullDirMsgCSS); });
  gulp.task('packjs', function() { return packjs(fullDirMsgJS); });


  /* 静态文件构建模块 */
  gulp.task('production', gulpSequence('clean', 'pug2html', 'stylus2css', 'packjs'));

};