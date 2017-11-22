/**
 * html 文件转 pug
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-17 15:09:58
 * @version 1.0.0
 */

'use strict';

const
  html2pug = require('../../common/html2pug');

module.exports = function(gulp) {

  gulp.task('html2pug', function() {
    return html2pug(null);
  });

};