// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import iView from 'iview'
import vuex from 'vuex'
// import axios from 'axios'
import api from './api'
// import com from './assets/js/common'
import $config from './config'
import 'iview/dist/styles/iview.css'
// Vue.prototype.$api = axios
Vue.prototype.api = api
Vue.prototype.$config = $config
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(iView, {
  transfer: true,
  size: 'large'
})

Vue.use(vuex)
// 指令
/*const has = (t) => {
  debugger
  console.log(com.redData.indexOf(t.expression) > -1)
  console.log(com.redData)
  return com.redData.indexOf(t.expression) > -1
}
Vue.directive("has", {
  // 钩子函数，被绑定元素插入父节点时调用 (父节点存在即可调用，不必存在于 document 中)。
  inserted(el,a,b,c,d){
    console.log(el);
    debugger
    if(has(a,b,c,d)) {
      el.remove()
      // el.parentElement.removeChild(el)
    }
  },
  bind(el,a,b,c,d){
   /!* if(has(a,b,c,d)) {
      el.remove()
    }*!/
    console.log( 'bind' );
  },
})*/
// Vue.use(axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
