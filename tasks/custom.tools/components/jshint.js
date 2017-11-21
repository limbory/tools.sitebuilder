/**
 * js文件查错
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-21 09:50:43
 * @version 1.0.0
 */

'use strict';

const
  gutil = require('gulp-util'),
  path = require('path'),
  named = require('vinyl-named'),
  jshint = require('gulp-jshint'),

  util = require('../../util'),
  defaultDir = require('../directory/jshint'),
  jshintCfg = require('../config/jshint');

module.exports = function(gulp) {
  gulp.task('jshint', function() {
    util.validToolConfig(process, defaultDir, function(sourceDir) {
      gulp.src(path.win32.join(sourceDir, '**/*.js'))
        .pipe(jshint(jshintCfg))
        .pipe(jshint.reporter('default'))
        .pipe(named(function(file) {
          
          gulp.watch(file.history[0], function() {
            gulp.src(file.history[0])
              .pipe(jshint(jshintCfg))
              .pipe(jshint.reporter('default'));
            gutil.log('Finished task--------------------jshint!');
          });
          this.queue(file);
        }));

    });
  });
};
