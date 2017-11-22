/**
 * 局域网文件夹共享
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-21 09:25:41
 * @version 1.0.0
 */

'use strict';

const
  browserSync  = require('browser-sync').create(),

  util = require('../../util'),
  defaultDir = require('../directory/server');

module.exports = function(gulp) {
  gulp.task('server', function() {
    util.validToolConfig(process, defaultDir, function(sourceDir) {

      browserSync.init({
        server: {
          baseDir: decodeURI(sourceDir),
          directory: true
        },
        port: 3355,
        // notify: false,
        // logLevel: "silent"
      });

    });

  });
};
