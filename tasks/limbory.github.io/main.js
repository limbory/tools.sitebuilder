/**
 * github-pages 构建工具入口文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-08 14:13:17
 * @version 1.0.0
 */
'use strict';

const
  path         = require('path'),
  gutil        = require('gulp-util'),
  gulpSequence = require('gulp-sequence'),

  util       = require('../util'),
  dir        = require(util.dir('config/directory'))(process.env.PROJECT + '/'),
  pug2html   = require(util.dir('tasks/common/pug2html')),
  stylus2css = require(util.dir('tasks/common/stylus2css')),
  packjs     = require(util.dir('tasks/common/packjs')),
  clean      = require(util.dir('tasks/common/clean'));

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
  gulp.task('gh:clean', function() {
    clean({ fileDir: util.deleteSrcDir(dir.dist, ['assets/', '*.md', '*.yml', '.git*']) });
  });


};