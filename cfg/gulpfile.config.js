'use strict';

var ROOT_DIR = './';
var SRC_DIR = ROOT_DIR + 'client/';     // 源码区
var DIST_DIR = ROOT_DIR + 'public/dist/';   // 打包文件区  


module.exports = {
  root: ROOT_DIR,
  src: SRC_DIR,
  dist: DIST_DIR,
  html: {
    src: SRC_DIR + 'views/**/*.jade',
    dist: DIST_DIR.replace(/\/[^\/]+\/$/, '/'),
    folder: [
      '_layouts'
    ],
  },
  css: {
    src: SRC_DIR + 'styl/**/*.styl',
    dist: DIST_DIR + 'css/'
  },
  js: {
    src: SRC_DIR + 'js/**/*.js',
    dist: DIST_DIR + 'js/',
  },
  watch: {
    dir: ROOT_DIR + 'public/_site/**/*'
  },
  tool: {
    src: ROOT_DIR + 'tools_path/src/',
    dist: ROOT_DIR + 'tools_path/dist/'
  }
};