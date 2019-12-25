import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import registered from  '@/components/login/registered'

Vue.use(Router)
const router = new Router({
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
        title: '优惠任务'
      }
    },
    {
      path: '/invitied',
      name: 'invitied',
      component: () => import('@/components/invitied'),
      meta:{
        title: '我的邀请码'
      }
    },
    {
      path: '/personal-info',
      name: 'personal-info',
      component: () => import('@/components/personal-info'),
      meta:{
        title: '个人信息'
      }
    },
    {
      path: '/charge',
      name: 'charge',
      component: () => import('@/components/charge'),
      meta:{
        title: '充值'
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
      path: '/letter',
      name: 'letter',
      component: () => import('@/components/letter'),
      meta:{
        title: '站内信'
      }
    },
    {
      path: '/editletter',
      name: 'editletter',
      component: () => import('@/components/editletter'),
      meta:{
        title: '站内信'
      }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/components/user'),
      meta:{
        title: ''
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
          path: '/login/updatePassword',
          name: 'updatePassword',
          component: () => import('@/components/login/updatePassword'),
          meta:{
            title: '修改密码'
          }
        },
        {
          path: '/login/updateWithdrawPassword',
          name: 'updateWithdrawPassword',
          component: () => import('@/components/login/updateWithdrawPassword'),
          meta:{
            title: '修改取款密码'
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
          path: '/bankAccount/addType',
          name: 'addType',
          component: () => import('@/components/bankAccounts/addType'),
          meta: {
            title: '查看银行卡'
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
          path: '/bankAccount/withdrawAccount',
          name: 'withdrawAccount',
          component: () => import('@/components/bankAccounts/withdrawAccount'),
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
    },
    {
      path:'/safety-setting',
      name: '',
      component: () => import('@/components/verification'),
      children: [
        {
          path: '/safety-setting/safety-setting',
          name: 'safety-setting',
          component: () => import('@/components/verification/safetySetting'),
          meta:{
            title: '安全设置'
          }
        },
        {
          path: '/safety-setting/test-phone',
          name: 'test-phone',
          component: () => import('@/components/verification/testPhoneNum'),
          meta:{
            title: '手机号码验证'
          }
        },
        {
          path: '/safety-setting/real-name',
          name: 'real-name',
          component: () => import('@/components/verification/realName'),
          meta:{
            title: '真实姓名验证'
          }
        }
      ]
    },
    {
      path:'/recharge',
      name: '',
      component: () => import('@/components/recharge'),
      children: [
        {
          path: '/recharge/recharge',
          name: 'recharge',
          component: () => import('@/components/recharge/recharge'),
          meta:{
            title: '充值'
          }
        }
      ]
    },
    {
      path: '/bill',
      name: 'bill',
      component: () => import('@/components/billingRecord'),
      meta:{
        title: '账户记录'
      }
    }
  ]
})

export default router
