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

var
  babelrc = {
    presets: [
      ['env', {
        'targets': { 'browsers': ['>= 1%', 'ie >= 9'] }
      }]
    ],
    plugins: [
      ['transform-runtime']
    ]
  },
  config = {
    output: {
      path: util.dir(dir.js.dist),
      filename: '[name].js'
    },
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.js'
      }
    },

    /* loaders */
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader'
        }]

      }, {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [{
          loader: 'vue-loader'
        }]

      }, {
        test: /\.pug$/,
        use: [{
          loader: 'pug-loader'
        }]

      }, {
        test: /\.styl$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'stylus-loader'
        }]

      }, {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]

      }, {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: [{
          loader: 'file-loader'
        }]

      }, {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'file-loader'
        }]

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