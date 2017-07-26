'use strict';

var
  pathApi = require( 'path' ),
  webpack = require( 'webpack' ),
  stylus = require( 'stylus' )
;

module.exports = {
  progress: true,
  context: pathApi.join(__dirname, '../client'),
  output: {
    path: pathApi.join(__dirname, '../public/dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    modulesDirectories: [ 'node_modules'],
    alias: {
      tpls: pathApi.join(__dirname, '../client/tpls'),
      vues: pathApi.join(__dirname, '../client/tpls/vues'),
      css: pathApi.join(__dirname, '../client/styl'),
      js: pathApi.join(__dirname, '../client/js'),
      vue$: 'vue/dist/vue.js',
      components: pathApi.join(__dirname, '../client/components'),
    }
  },
  module: {
    loaders: [ {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      loader: 'file'
    }, {
      test: /\.styl$/,
      loader: 'style!css!stylus'
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'file?name=[name].[ext]?[hash]'
    }, {
      test: /\.pug$/,
      loader: 'pug'
    } ],
    noParse: []
  },
  vue: {
    loaders: {
      css: 'vue-style-loader!css-loader'
    }
  },
  stylus: {
    use: [ require( 'nib' )() ],
    import: [ '~nib/lib/nib/index.styl' ],
    define: {
      'inline-url': stylus.url( {
        paths: [ pathApi.join(__dirname, '../public/assets') ]
      } )
    }
  },
  babel: {
    presets: [ 'es2015', 'flow-vue' ],
    // 'presets': [ 'es2015', 'stage-2' ],
    plugins: [ 'transform-runtime' ]
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.DedupePlugin(), 
    new webpack.optimize.OccurrenceOrderPlugin(), 
    new webpack.optimize.UglifyJsPlugin( {
      output: { comments: false },
      compress: {warnings: false }
    } ),
    new webpack.ResolverPlugin( [
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin( 'bower.json', [ 'main' ] )
    ], [ 'normal', 'loader' ] ),
    new webpack.ContextReplacementPlugin( /moment[\/\\]locale$/, /zh-cn/ )
  ]
};
