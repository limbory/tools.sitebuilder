/**
 * 页面入口函数
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-28 14:06:28
 * @version 1.0.0
 */

'use strict';

import 'babel-polyfill';

import Vue from 'vue';
// import { mapState } from 'vuex';

import routers from 'js/routers';
import store from 'js/stores';


import mainHeader from 'tpl/vue/components/header.vue';
import mainFooter from 'tpl/vue/components/footer.vue';
import 'css/main.styl';

new Vue({
  el: '#HKA-content',
  router: routers(Vue),
  store: store(Vue),
  components: {
    mainHeader,
    mainFooter
  }
});

