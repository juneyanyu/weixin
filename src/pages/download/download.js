import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import 'lib-flexible'
import '../../common/base.css'

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/download',
      name: 'App',
      component: App,
    }
  ]
})

// var flexible=require('lib-flexible')
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
console.log(router)