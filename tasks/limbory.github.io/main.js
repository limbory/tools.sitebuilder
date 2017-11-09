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
  fs           = require('fs'),
  exec         = require('child_process').exec,

  env        = process.env,
  util       = require('../util'),
  dir        = require(util.dir('config/directory'))(env.PROJECT + '/'),
  pug2html   = require(util.dir('tasks/common/pug2html')),
  stylus2css = require(util.dir('tasks/common/stylus2css')),
  packjs     = require(util.dir('tasks/common/packjs')),
  clean      = require(util.dir('tasks/common/clean'));

function watch() {

};

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
    },
    fullDirMsgJS = {
      rootDir: util.createSrcDir(dir.js.src, '.js', dir.exclude),
      baseDir: util.dir(dir.js.src),
      distDir: util.dir(dir.js.dist)
    };

  // 清除构建文件
  gulp.task('clean', function() {
    return clean({ fileDir: util.deleteSrcDir(dir.dist, ['assets/', '*.md', '*.yml', '.git*']) });
  });


  // 开发模块
  gulp.task('dev', function() {
    return gulpSequence('clean', 'dev:pug2html', 'dev:stylus2css', 'dev:packjs', function() {
      
      var serviceFolder = util.dir(dir.dist + '_site/');

      // 创建服务端目录
      fs.mkdirSync(serviceFolder);
      // 启动jekyll构建任务
      exec('cd ' + dir.dist + ' && jekyll b --watch');
      // 启动服务端
      browserSync.init({
        server: { baseDir: serviceFolder },
        notify: false,
        port: 3355,
        logLevel: "silent"
      });

      // 启动构建目录监听


    });
  });
  gulp.task('dev:pug2html', function() { return pug2html(fullDirMsgHTML); });
  gulp.task('dev:stylus2css', function() { return stylus2css(fullDirMsgCSS); });
  gulp.task('dev:packjs', function() {
    return packjs(Object.assign(fullDirMsgJS, {
      devMode: 'eval-source-map'
    }));
  });


  // 静态文件构建模块
  gulp.task('production', function() {});

};