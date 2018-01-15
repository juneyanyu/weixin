// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import Detailstmp from './details'
import 'lib-flexible'
import '../../common/base.css';
import 'mint-ui/lib/style.css'
import axios from 'axios'
import Mint from'mint-ui'

Vue.use(Mint);

//给vue.$http设置一个默认baseurl
import Ajax from '../../../config/axiosConfig';
Vue.use(Ajax, {
    baseURL: 'http://192.168.1.102:8111'
})
//给axios设置一个默认baseurl
axios.defaults.baseURL = 'http://192.168.1.102:8111';

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
      component: Detailstmp,

    }
  ]
})

// var flexible=require('lib-flexible')
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')