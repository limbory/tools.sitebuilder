/**
 * Vuex 入口文件
 * @authors C.H.Wang (751386356@qq.com)
 * @date    2017-11-29 14:06:21
 * @version 1.0.0
 */

'use strict';

import Vuex from 'vuex';

const
  store = {
    home: {
      state: {
        variable1: 'abcdabcd',
        variable2: '12341235',
        variable3: 'ttytttyt'
      },
      getters: {},
      mutations: {},
      actions: {},
    }
  };

export default (Vue) => {

  Vue.use(Vuex);
  return new Vuex.Store({
    modules: store
  });
};