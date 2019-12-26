// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import './assets/css/common.css'
import 'vant/lib/index.css';
import VueClipboard from 'vue-clipboard2'
import { Toast, Notify } from 'vant';
import store from './store'
import './permission'
import axios from 'axios'

Vue.prototype.axios = axios

import * as filters from './filters' // global filters

import Loading from './components/components/Loading'
Vue.component('Loading',Loading)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(Vant);

Vue.use(Toast);

Vue.use(VueClipboard);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
