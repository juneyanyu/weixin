// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Details from './details'
import 'lib-flexible'
import '../../common/base.css';

Vue.use(Router)

const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,

    },
    {
      path: '/details',
      name: 'Details',
      component: Details,

    }
  ]
})

// var flexible=require('lib-flexible')
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
console.log(router)