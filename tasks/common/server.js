/**
 * 启动本地服务
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-20 09:40:46
 * @version 1.0.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  browserSync  = require('browser-sync').create(),
  env = process.env,


  util = require('../util');

const
  defaultDir = [// 缺省路径
    '../../hka-oj-dev(20171120090730)',
  ];

module.exports = function(gulp) {
  gulp.task('s', function() {
    var dir, argv = process.argv || env.npm_config_argv;

    if (argv) {
      dir = argv.slice(-1)[0];
      if (/^\-\-[^\-\s]/.test(dir)) {
        dir = dir.slice(2);
      } else {
        dir = null;
      }
    }

    if (dir) {
      dir = /^\d+$/.test(dir) ? defaultDir[parseInt(dir)] : dir;
      
      browserSync.init({
        server: {
          baseDir: /^[a-zA-Z]\:/.test(dir) ? dir : util.dir(dir),
          directory: true
        },
        // notify: false,
        port: 3355,
        // logLevel: "silent"
      });
    }

  });
};