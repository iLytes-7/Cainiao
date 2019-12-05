import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home'),
      meta:{
        title: '菜鸟竞技'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login/login'),
      meta:{
        title: '登陆'
      }
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('@/components/login/forgetPassword'),
      meta:{
        title: '忘记密码'
      }
    },
    {
      path: '/forget1',
      name: 'forget1',
      component: () => import('@/components/login/forgetPassword2'),
      meta:{
        title: '忘记密码'
      }
    }
  ]
})
