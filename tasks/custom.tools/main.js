/**
 * 自定义功能
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-21 09:10:14
 * @version 1.0.0
 */

'use strict';

module.exports = function(gulp) {

  require('./components/server')(gulp);
  require('./components/jshint')(gulp);

};