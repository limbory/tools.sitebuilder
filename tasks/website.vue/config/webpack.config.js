/**
 * webpack 配置文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-06 10:53:00
 * @version 1.0
 */

'use strict';

const
  webpack = require('webpack'),
  stylus = require('stylus'),
  stylusLoader = require('stylus-loader'),
  babelLoader = require('babel-loader'),

  env = process.env,
  util = require('../../util'),
  dir = require('../directory/main')(env.PROJECT + '/');

var config = {
  output: {
    path: util.dir(dir.js.dist),
    filename: '[name].js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'css': util.dir(dir.styl.src),
      'js': util.dir(dir.js.src),
      'tpl': util.dir(dir.tpl.src)
    }
  },

  /* loaders */
  module: {
    rules: [{
      test: /\.pug$/,
      use: [{
        loader: 'pug-loader'
      }]

    }, {
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
      test: /\.styl$/,
      use: [{
        loader: 'vue-style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'stylus-loader'
      }]

    }, {
      test: /\.less$/,
      use: [{
        loader: 'vue-style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader',
        options: {
          globalVars: {
              /* glyphicons图标字体配置 */
             'icon-font-path': '"' + dir.server[env.NODE_ENV].assetsUrl + 'fonts/glyphicons/"',
             'icon-font-name': '"glyphicons-halflings-regular"',
             'icon-font-svg-id': '"glyphicons_halflingsregular"'
          }
        }
      }]

    }, {
      test: /\.css$/,
      use: [{
        loader: 'vue-style-loader'
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
  plugins: [
    new stylusLoader.OptionsPlugin({
      default: {
        'use': [require('nib')()],
        'import': [
          '~nib/lib/nib/index.styl',
          util.dir(dir.styl.src + 'common/constant.styl'),
          util.dir(dir.styl.src + 'common/mixin.styl'),
        ],
        // 'include css': true,
        'define': {
          'inline-url': stylus.url({
            paths: [util.dir(dir.dist + 'assets/')]
          }),
          'server-url': function (url) {
            return new stylus.nodes
              .Literal('url(' + dir.server[env.NODE_ENV].assetsUrl + 
                url.val + dir.server[env.NODE_ENV].version + ')');
          }
        }
      },
    }),
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     context: util.dir(''),
    //     vue: {
    //       loaders: {
    //         pug: '?locals[vsd]=123'
    //       }
    //     }
    //   }
    // })
  ]
  
};
if (env.NODE_ENV === 'production') {

  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }));

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