import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import request from './utils/request'

import './utils/flexible' // flexible  rem 设配
import './utils/vant-import'
// 将二次封装的axios实例挂载到原型上，这样每个组件中的
// 可以使用 this.$http获取到该实例
Vue.prototype.$http = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
