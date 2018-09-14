// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import store from './store'
import Mint from 'mint-ui';
import VueLazyload from 'vue-lazyload'
import loading from './assets/images/loading.gif'

import './mock/mockServer'
import Split from './components/Split/Split.vue'

// or with options
Vue.use(VueLazyload, {
  /*preLoad : 1.3,*/
  loading
})



Vue.use(Mint)

Vue.config.productionTip = false
Vue.component('Split',Split)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
