import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import registered from  '@/components/login/registered'

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
      path: '/cuxiao',
      name: 'cuxiao',
      component: () => import('@/components/cuxiao'),
      meta:{
        title: '促销优惠'
      }
    },
    {
      path: '/transform',
      name: 'transform',
      component: () => import('@/components/transform'),
      meta:{
        title: '转账'
      }
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: () => import('@/components/withdraw'),
      meta:{
        title: '提现'
      }
    },
    {
      path:'/login',
      name: '',
      component: () => import('@/components/login'),
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('@/components/login/login'),
          meta: {
            title: '登陆'
          }
        },
        {
          path: '/login/registered',
          name: 'registered',
          component: () => import('@/components/login/registered'),
          meta:{
            title: '账户注册'
          }
        },
        {
          path: '/login/forget',
          name: 'forget',
          component: () => import('@/components/login/forgetPassword'),
          meta:{
            title: '忘记密码'
          }
        },
        {
          path: '/login/forget1',
          name: 'forget1',
          component: () => import('@/components/login/forgetPassword2'),
          meta:{
            title: '忘记密码'
          }
        }
      ]
    },
    {
      path:'/bankAccount',
      name: '',
      component: () => import('@/components/bankAccounts'),
      children: [
        {
          path: '/bankAccount/bankAccount',
          name: 'bankAccount',
          component: () => import('@/components/bankAccounts/accounts'),
          meta: {
            title: '银行账户'
          }
        },
        {
          path: '/bankAccount/addAccount',
          name: 'addAccount',
          component: () => import('@/components/bankAccounts/addAccount'),
          meta: {
            title: '添加银行账户'
          }
        },
        {
          path: '/bankAccount/detail',
          name: 'detail',
          component: () => import('@/components/bankAccounts/detail'),
          meta: {
            title: '查看详情'
          }
        }
      ]
    }
  ]
})
