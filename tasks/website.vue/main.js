/**
 * vue项目练手
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-27 14:29:43
 * @version 1.0.0
 */
'use strict';

module.exports = function(gulp) {

  require('./components/packjs')(gulp);
  require('./components/pug2html')(gulp);
  require('./components/clean')(gulp);
  require('./components/dev')(gulp);
  require('./components/production')(gulp);

};