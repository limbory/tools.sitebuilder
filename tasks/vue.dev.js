'use strict';

var
  config = require('../cfg/gulpfile.config'),
  compileVue = require('./vue.compile-vue');

compileVue(config.js.src, config.js.dist).then(function() {
  console.log('+++++++++++++Vue模板编译完成++++++++++++');
});