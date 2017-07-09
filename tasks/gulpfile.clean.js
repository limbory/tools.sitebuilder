'use strict';

var
  gulp = require('gulp'),
  clean = require('gulp-clean'),
  config = require('../cfg/gulpfile.config');

module.exports = function() {
  var cleanDir = config.html.folder.map(function (d) {
    return config.html.dist + d;
  });

  cleanDir.push(config.dist);
  cleanDir.push(config.html.dist + '*.html');
  cleanDir.push(config.watch.dir.replace(/\/[^\/]+\/[^\/]+$/, ''));

  return gulp.src(cleanDir, {
    read: false
  }).pipe(clean({
    force: true
  }));
};
