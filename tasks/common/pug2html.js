/**
 * pug 模板转 html 文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-26 10:09:05
 * @version 1.0
 */

'use strict';

const
  gulp = require('gulp'),
  gutil = require('gulp-util'),
  pug = require('gulp-pug'),
  named = require('vinyl-named'),
  prettify = require('gulp-html-prettify');
  
module.exports = function(config) {
  var cfg = Object.assign({
    rootDir: '', // 源文件路径
    baseDir: '', // 带转换文件根路径
    distDir: '', // 构建路径
    isCompress: false, // 转换后是否压缩（默认不压缩）
    server: {
      baseUrl: '', assetsUrl: '', version: ''
    },
  }, config);

  var stream = gulp.src(cfg.rootDir, {
    base: cfg.baseDir
  }).pipe(pug({
    pretty: !cfg.isCompress,
    locals: {
      baseUrl: cfg.server.baseUrl,
      assetsUrl: cfg.server.assetsUrl,
      version: cfg.server.version
    }
  }));

  if (!cfg.isCompress) {
    stream = stream.pipe(prettify({
      indent_size: 2
    })).pipe(named(function(file) {
      var fileStr = String(file.contents);
      var cutStr = fileStr.match(/^\-{3}[^\n]+\-{3}/);
      if (cutStr) {
        fileStr = fileStr.replace(/^\-{3}[^\n]+\-{3}/, cutStr[0].replace(/([^\:])\s+/g, '$1\n'));
        file.contents = new Buffer(fileStr);
      }
      this.queue(file);
    }));
  }

  return stream.pipe(gulp.dest(cfg.distDir))
    .on('end', function() {
      gutil.log('Finished task--------------------pug2html!');
    });
};