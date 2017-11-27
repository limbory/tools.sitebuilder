/**
 * webpack 配置文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-06 10:53:00
 * @version 1.0
 */

'use strict';

const
  webpack = require('webpack'),

  env = process.env,
  util = require('../../util'),
  dir = require('../directory/main')(env.PROJECT + '/');

var config = {
  output: {
    path: util.dir(dir.js.dist),
    filename: '[name].js'
  },
  /* loaders */
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['env', {
              'targets': { 'browsers': ['>= 5%', 'ie >= 10'] }
            }]
          ],
          plugins: [
            ['transform-runtime']
          ]
        }
      }]

    // }, {
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   enforce: 'post',
    //   use: [{
    //     loader: 'es3ify-loader'
    //   }]

    }]
  },

  /* plugins */
  plugins: []
  
};
if (env.NODE_ENV === 'production') {

  config.plugins.push(new webpack.optimize.UglifyJsPlugin({

    compress: { warnings: false },
    output: { comments: false }
    
  }));

} else if (env.NODE_ENV === 'dev') {

  config = Object.assign(config, {

    // watch: true,
    // devtool: 'eval-source-map',
    // devServer: {
    //   contentBase: util.dir(dir.dist), //本地服务器所加载的页面所在的目录
    //   historyApiFallback: true, //不跳转
    //   inline: true //实时刷新
    // }

  });

}

module.exports = config;