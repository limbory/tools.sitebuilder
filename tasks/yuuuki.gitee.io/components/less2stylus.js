/**
 * less 文件转 stylus
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-14 10:22:22
 * @version 1.0.0
 */

'use strict';

const
  less2stylus = require('../../common/less2stylus');

module.exports = function(gulp) {

  gulp.task('less2stylus', function() {
    return less2stylus(null);
  });

};