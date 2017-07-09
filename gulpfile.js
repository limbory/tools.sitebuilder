'use strict';

var
  CFG_DIR = './cfg/',
  TASK_DIR = './tasks/',

  gulp = require('gulp'),
  gutil = require('gulp-util'),
  gulpSequence = require('gulp-sequence'),
  browserSync = require('browser-sync').create(),

  config = require(CFG_DIR + 'gulpfile.config'),
  clean = require(TASK_DIR + 'gulpfile.clean'),
  refresh = require(TASK_DIR + 'gulpfile.refresh'),
  jade2html = require(TASK_DIR + 'gulpfile.jade2html'),
  styl2css = require(TASK_DIR + 'gulpfile.styl2css'),
  packjs = require(TASK_DIR + 'gulpfile.packjs');


gulp.task('j:clean', clean);
gulp.task('j:html', jade2html);
gulp.task('j:css', styl2css);
gulp.task('j:js', packjs);

gulp.task('j:init', gulpSequence('j:clean', ['j:html', 'j:css', 'j:js']));
gulp.task('j:watch', function() {
  // 初始化页面服务器
  browserSync.init({
    server: {
      baseDir: config.watch.dir.replace(/\/[^\/]+\/[^\/]+$/, '')
    },
    notify: false,
    port: 3355,
    logLevel: "silent",
  });
  gulp.watch(config.watch.dir, function() {
    return refresh(browserSync.reload);
  });

  gulp.watch(config.html.src, ['j:html']);
  gulp.watch(config.css.src, ['j:css']);
  gulp.watch(config.js.src, ['j:js']);

});
