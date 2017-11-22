/**
 * css 文件转 stylus
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-14 10:22:22
 * @version 1.0.0
 */

'use strict';

const
  css2stylus = require('../../common/css2stylus');

module.exports = function(gulp) {

  gulp.task('css2stylus', function() {
    return css2stylus(null);
  });

};