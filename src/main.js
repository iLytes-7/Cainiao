// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import './assets/common.css'
import 'vant/lib/index.css';
import VueClipboard from 'vue-clipboard2'
import { Toast } from 'vant';

Vue.filter('account', function(input) {
  let x = '**** **** **** **** ' + input.substr('-4')
  return x
})

Vue.use(Vant);

Vue.use(Toast);

Vue.use(VueClipboard);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
