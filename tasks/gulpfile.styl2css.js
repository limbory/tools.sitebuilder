'use strict';

var
  gulp = require('gulp'),
  stylus = require('gulp-stylus'),
  minifycss = require('gulp-clean-css'),
  nib = require( 'nib' ),
  config = require('../cfg/gulpfile.config');

module.exports = function() {
  return gulp.src(config.css.src)
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
    .pipe(gulp.dest(config.css.dist))
    // .pipe(reload({ stream: true }))
  ;
};