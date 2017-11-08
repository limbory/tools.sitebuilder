/**
 * webpack 配置文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-06 10:53:00
 * @version 1.0
 */

'use strict';

var
  webpack = require('webpack');

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
  //   contentBase: "./public", //本地服务器所加载的页面所在的目录
  //   historyApiFallback: true, //不跳转
  //   inline: true //实时刷新
  // },

  /* loaders */
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ["es2015", "stage-0", "flow-vue", "react"],
          plugins: [
            ["transform-runtime", {
              "helpers": false, // 该选项有问题，必须设置为false
              "polyfill": false, // 该选项有问题，必须设置为false
              "regenerator": true,
              "moduleName": "babel-runtime"
            }]
          ]
        }
      }
    }, {
      test: /\.pug$/,
      use: { loader: 'pug-loader' }
    }, {
      test: /\.css$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' }
      ]
    }]
  },

  /* plugins */
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   output: { comments: false },
    //   compress: { warnings: false }
    // }),
  ]
};