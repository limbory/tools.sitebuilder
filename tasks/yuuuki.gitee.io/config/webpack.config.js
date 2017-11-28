/**
 * webpack 配置文件（兼容ie8）
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-06 10:53:00
 * @version 1.0
 */

'use strict';

const
  ES3IFYWEBPACKPLUGIN = require('es3ify-webpack-plugin');

module.exports = {

  /* 输入输出 */
  // entry: __dirname + '/client/main.js',
  // output: {
  //   path: __dirname + '/public',
  //   filename: 'bundle.js'
  // },

  /* 开发配置 */
  // watch: true,
  // devtool: 'eval-source-map',
  // devServer: {
  //   contentBase: './public', //本地服务器所加载的页面所在的目录
  //   historyApiFallback: true, //不跳转
  //   inline: true //实时刷新
  // },

  /* loaders */
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['env', {
              'targets': { 'browsers': ['>= 1%', 'ie >= 8'] }
            }]
          ],
          plugins: [
            ['transform-runtime']
          ]
        }
      }]

    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'post',
      use: [{
        loader: 'es3ify-loader'
      }]

    }]
  },

  /* plugins */
  plugins: [
    new ES3IFYWEBPACKPLUGIN(),
  ]
};