/**
 * 页面入口函数
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-28 14:06:28
 * @version 1.0.0
 */

'use strict';

import Vue from 'vue';
import Router from 'vue-router';
// import { mapState } from 'vuex';

import routers from './routers';

console.log(routers);

Vue.use(Router);

const
  router = new Router({
    // mode: 'history',
    linkActiveClass: 'active',
    base: window.baseUrl,
    routes: routers
  });

new Vue({
  el: '#HKA-content',
  router: router
});

function casca() {
  return {
    data() {
      return {};
    },
    keys: 'vsdv'
  };
};
