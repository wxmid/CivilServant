// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import iView from 'iview'
import vuex from 'vuex'
import axios from 'axios'
import 'iview/dist/styles/iview.css'
Vue.prototype.$api = axios
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView, {
  transfer: true,
  size: 'large'
})
Vue.use(vuex)
// Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
