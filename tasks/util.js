/**
 * 通用工具函数
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-13 11:01:13
 * @version 1.0
 */

'use strict';

const
  path = require('path');

module.exports = {
  
  /**
   * 转换为项目绝对路径地址
   * @param  {String} str 相对路径（相对于项目更目录）
   * @return {[type]}     绝对路径
   */
  dir: function(str) {
    return path.win32.join(__dirname, '../' + str);
  }

};
