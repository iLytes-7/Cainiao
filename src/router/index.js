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
      component: () => import('@/components/login'),
      meta:{
        title: '登陆'
      }
    }
  ]
})
