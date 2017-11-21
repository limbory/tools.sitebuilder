/**
 * stylus 编译 css 文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-31 09:58:29
 * @version 1.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  stylus = require('gulp-stylus'),
  cleanCSS = require('gulp-clean-css'),
  nib = require('nib');

module.exports = function(config) {
  var cfg = Object.assign({
    rootDir: '', // 源文件路径
    baseDir: '', // 带转换文件根路径
    distDir: '', // 构建路径
    assetsDir: '', // 静态资源根目录
    isCompress: false, // 转换后是否压缩（默认不压缩）
    server: {
      baseUrl: '', assetsUrl: '', version: ''
    },
  }, config);

  var stream = gulp.src(cfg.rootDir, {
    base: cfg.baseDir
  }).pipe(stylus({
    'use': nib(), // 前缀补齐
    'include css': true, // 允许引入css样式
    'compress': cfg.isCompress, // 样式表压缩
    'functions': {
      // 静态资源转base64编码
      'inline-url': stylus.stylus.url({ paths: [cfg.assetsDir] }),
      'server-url': function (url) {
        return new stylus.stylus.nodes
          .Literal('url(' + cfg.server.assetsUrl + url.val + cfg.server.version + ')');
      },
    },
  }));

  if (cfg.isCompress) {
    stream = stream.pipe(cleanCSS());
  }

  return stream.pipe(gulp.dest(cfg.distDir))
    .on('end', function() {
      gutil.log('Finished task--------------------stylus2css!');
    });
};