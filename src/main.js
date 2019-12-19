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
import md5 from 'js-md5'

Vue.filter('account', function(input) {
  let x = '**** **** **** **** ' + input.substr('-4')
  return x
})

Vue.filter('amount', function(input) {
  let parts = input.toString().split('.')
  if(parts.length === 1) {
    parts[1] = '00'
  }
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
})


Vue.use(Vant);

Vue.use(Toast);

Vue.use(VueClipboard);

Vue.prototype.$md5 = md5;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
