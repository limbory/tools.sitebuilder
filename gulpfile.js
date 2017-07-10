'use strict';

var
  CFG_DIR = './cfg/',
  TASK_DIR = './tasks/',

  gulp = require('gulp'),
  gutil = require('gulp-util'),
  gulpSequence = require('gulp-sequence'),
  gulp_watch = require('gulp-watch'),
  browserSync = require('browser-sync').create(),

  config = require(CFG_DIR + 'gulpfile.config'),
  clean = require(TASK_DIR + 'gulpfile.clean'),
  refresh = require(TASK_DIR + 'gulpfile.refresh'),
  jade2html = require(TASK_DIR + 'gulpfile.jade2html'),
  styl2css = require(TASK_DIR + 'gulpfile.styl2css'),
  packjs = require(TASK_DIR + 'gulpfile.packjs'),

  html2jade = require(TASK_DIR + 'gulpfile.html2jade');


gulp.task('j:clean', clean);
gulp.task('j:html', jade2html);
gulp.task('j:css', styl2css);
gulp.task('j:js', packjs);

gulp.task('j:init', gulpSequence('j:clean', ['j:html', 'j:css', 'j:js']));
gulp.task('j:watch', function() {
  var log = function(ev) {
    gutil.log('File ' + ev.path + ' was changed, running tasks...');
  };

  // 初始化页面服务器
  browserSync.init({
    server: {
      baseDir: config.watch.dir.replace(/\/[^\/]+\/[^\/]+$/, '')
    },
    notify: false,
    port: 3355,
    logLevel: "silent",
  });
  gulp_watch(config.watch.dir.replace(/\/[^\/]+\/[^\/]+$/, ''), function(ev) {
    // log(ev);
    return refresh(browserSync.reload);
  });

  // 监听jade
  gulp_watch(config.html.src.replace(/\/[^\/]+\/[^\/]+$/, ''), function (ev) {
    if (/\.jade$/.test(ev.path)) {
      log(ev);
      if (/(^[\s\S]+client[\\\/]+views[\\\/]+(\_layouts)[\\\/]+)([\s\S]+)/.test(ev.path)) {
        jade2html(null);
      } else {
        jade2html(ev.path);
      }
    };
  });

  // 监听stylus
  gulp_watch(config.css.src.replace(/\/[^\/]+\/[^\/]+$/, ''), function (ev) {
    if (/\.(css|styl)$/.test(ev.path)) {
      log(ev);
      if (/(^[\s\S]+client[\\\/]+styl[\\\/]+(commons|assets)[\\\/]+)([\s\S]+)/.test(ev.path)) {
        styl2css(null);
      } else {
        styl2css(ev.path);
      }
    };
  });

  // 监听js
  gulp_watch(config.js.src.replace(/\/[^\/]+\/[^\/]+$/, ''), function (ev) {
    if (/\.js$/.test(ev.path)) {
      log(ev);
      if (/(^[\s\S]+client[\\\/]+js[\\\/]+(commons|assets)[\\\/]+)([\s\S]+)/.test(ev.path)) {
        packjs(null);
      } else if (/(^[\s\S]+client[\\\/]+js[\\\/]+(controllers)[\\\/]+)([\s\S]+)/.test(ev.path)) {
        packjs(ev.path);
      }
    };
  });

});

gulp.task('j:html2jade', html2jade);
