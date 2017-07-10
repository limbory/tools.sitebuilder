'use strict';

var
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  stylus = require('gulp-stylus'),
  minifycss = require('gulp-clean-css'),
  nib = require( 'nib' ),
  config = require('../cfg/gulpfile.config');

module.exports = function(path) {
  return gulp.src(typeof(path) === 'string' ? path : config.css.src)
    .pipe(stylus({
      'use': nib(), // 前缀补齐
      'include css': true, // 允许引入css样式
      'compress': true, // 样式表压缩
      'functions': {
        'inline-url': stylus.stylus.url({
          paths: ['./public/assets']
        })
      },
    }))
    .pipe(minifycss())
    .pipe(gulp.dest(function() {
      if (typeof(path) === 'string') {
        return (config.css.dist + path.replace(/(^[\s\S]+client[\\\/]+styl[\\\/]+)([\s\S]+)/, '$2').replace(/[\\\/]*[^\\\/]+$/, ''))
          .replace(/[\\\/]/g, '/');
      } else {
        return config.css.dist;
      }
    } ()))
    .on('end', function() {
      gutil.log('...task done!');
    });
    // .pipe(reload({ stream: true }))
  ;
};