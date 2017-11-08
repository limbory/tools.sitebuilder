/**
 * 通用工具函数
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-10-13 11:01:13
 * @version 1.0
 */

'use strict';

const
  path = require('path'),
  util = {
    /**
     * 转换为项目绝对路径地址
     * @param  {String} str 相对路径（相对于项目根目录）
     * @return {String}     绝对路径
     */
    dir: function(str) {
      return path.win32.join(__dirname, '../' + str);
    },

    /**
     * 补齐源文件构建路径（添加exclude与后缀）
     * @param  {String} dir        相对路径字符串（相对于项目根路径）
     * @param  {String} postfix    文件后缀
     * @param  {Array} excludeArr 不包含的文件路径
     * @return {Array}            完整构建路径
     */
    createSrcDir: function(dir, postfix, excludeArr) {
      postfix = postfix || '';

      var fullDir = [util.dir(dir + '**/*' + postfix)];

      if (excludeArr) {
        excludeArr.forEach(function(dirPath) {
          fullDir.push.apply(fullDir, [
            '!' + util.dir(dir + dirPath + '**/*' + postfix),
            '!' + util.dir(dir + '**/' + dirPath + '**/*' + postfix),
          ]);
        });
      }

      return fullDir;
    },

    /**
     * 创建删除文件路径
     * @param  {String} dir        相对路径字符串（相对于项目根路径）
     * @param  {Array} excludeArr 不删除的路径
     * @return {Array}            完整构建路径
     */
    deleteSrcDir: function(dir, excludeArr) {
      var fullDir = [util.dir(dir + '*'), util.dir(dir + '.*')];

      if (excludeArr) {
        excludeArr.forEach(function(dirPath) {
          fullDir.push.apply(fullDir, [
            '!' + util.dir(dir + dirPath),
          ]);
        });
      }

      return fullDir;
    },

    /**
     * 处理路径字符串为数组
     * @param  {String} str 绝对路径
     * @return {Array}     结构数组
     */
    handleDirString: function(str) {
      if (typeof str !== 'string') {
        str = str[0];
      }
      return str.replace(/[\\\/]+$/, '').split(/[\\\/]+/);
    },

  };

module.exports = util;