import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/reset.css'
import './assets/css/common.css'

import Dialog from './components/dialog'
import Loading from './components/loading/index.js'
import toast from './components/toast'

import './js/plugin'
import './js/FastClick'
import utils from './js/utils'
import VueScroller from 'vue-scroller'
import { get, post } from './js/ajax'

Vue.use(VueScroller)
Vue.use(utils)

Vue.prototype.$dialog = Dialog
Vue.prototype.$loading = Loading
Vue.prototype.$toast = toast
Vue.prototype.$http = { get, post }

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  const userInfo = sessionStorage.getItem('userInfo') || null
  if (!userInfo && to.meta.auth) {
    next('/login')
  } else {
    next()
  }
})

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
