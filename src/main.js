// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'
import store from './store'
import Mint from 'mint-ui';


import './mock/mockServer'
import Split from './components/Split/Split.vue'

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
