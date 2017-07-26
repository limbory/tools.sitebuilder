'use strict';

var
  co = require('co'),
  gutil = require('gulp-util'),
  named = require('vinyl-named'),
  vinylFs = require('vinyl-fs'),
  through = require( 'through' ),
  webpack = require('webpack'),
  clone = require( 'lodash.clone'),

  config = require('../cfg/webpack.v-config');

function packed(cfg) {
  cfg = clone(cfg) || {};

  return through(function(data) {
    // webpack(cfg).
    this.queue(data);
  });
};



module.exports = co.wrap(function*(src, dest) {
  return yield new Promise((res, err) => {

    vinylFs.src(src)
      .pipe(named())
      .pipe(packed(config))

      .on('error', function(msg) {
        gutil.log('Running "compile-vue" task but throw a Error', msg);
        err(msg);
      })
      .on('end', function() {
        gutil.log('Finished "compile-vue" task');
        setTimeout(function() {
          res();
        }, 100);
      })

      .pipe(vinylFs.dest(dest));
  });
});
