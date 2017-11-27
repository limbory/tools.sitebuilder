/**
 * 生产环境构建
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-27 16:38:36
 * @version 1.0.0
 */

'use strict';

const
  gulpSequence = require('gulp-sequence');

module.exports = function(gulp) {
  gulp.task('production', gulpSequence('clean', 'pug2html', 'packjs'));
};