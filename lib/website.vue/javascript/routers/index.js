/**
 * Vue-router 目录
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-29 14:06:21
 * @version 1.0.0
 */

'use strict';

import Router from 'vue-router';
import home from 'tpl/vue/home/index.vue';

const
  routers = [{
    name: 'home',
    path: '/',
    component: home
  }];

export default (Vue) => {

  Vue.use(Router);
  return new Router({
    linkActiveClass: 'active',
    base: window.baseUrl,
    routes: routers
    // mode: 'history',
  })
};