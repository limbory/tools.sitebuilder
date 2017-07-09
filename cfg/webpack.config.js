'use strict';

var
  webpack = require('webpack')
;

module.exports = {
  // watch: true,
  output: {
    filename: '[name].js'
  },
  resolve: {
    extensions:['','.js']
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
      compress: { warnings: false }
    }),
  ]
};
