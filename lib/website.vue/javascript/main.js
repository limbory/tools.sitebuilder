/**
 * 页面入口函数
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-28 14:06:28
 * @version 1.0.0
 */

'use strict';

import 'babel-polyfill';

import Vue from 'vue';
import { mapState } from 'vuex';

/* 静态路由 */
import routers from 'js/routers';
/* 静态数据 */
import store from 'js/stores';

/* 通用header组件 */
import mainHeader from 'tpl/vue/components/header.vue';
/* 通用footer组件 */
import mainFooter from 'tpl/vue/components/footer.vue';

/* 通用样式 */
import 'css/main.styl';
/* 扩展字体图标 */
import 'bootstrap/less/glyphicons.less';

new Vue({
  el: '#HKA-content',
  router: routers(Vue),
  store: store(Vue),
  data() {
    return {}
  },
  components: {
    mainHeader,
    mainFooter
  },
  methods: {
    /* 页面url添加前后缀 */
    baseUrl: (url) => `${ window.baseUrl }${ url }${ window.version }`,
    assetsUrl: (url) => `${ window.assetsUrl }${ url }${ window.version }`
  }
});

