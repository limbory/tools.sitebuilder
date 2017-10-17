/**
 * 项目结构路径
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-13 10:58:27
 * @version 1.0
 */
'use strict';

var
  pathApi = require('path');

function toAbsDir(str) {
  return pathApi.win32.join(__dirname, '../' + str);
};
/**
 * 动态导出项目路径
 * @param  {string} pathName 项目根目录名称
 * @return {object}          包含绝对路径字符串的对象
 */
module.exports = function(pathName) {
  return toAbsDir(pathName);
};

