import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
import total from '@/pages/total'
import mainContainer from '@/pages/mainContainer'
import t1 from '@/components/t1'
import test from '@/pages/test'
import entry from '@/pages/entry/entry'
import shopinfo from '@/pages/entry/shopinfo'
import user from '@/pages/user/user'
import userManagement from '@/pages/user/userManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main',
    
    },
    //登录路由
    {
      path: '/login',
      name: 'login',
      component: login
    }
    ,
    {
      path: '/main',
      name: 'main',
      component: mainContainer,
      children:[
        {path: 't1',name: 't1',component:t1},
        {path: 'total', name:'total',component:total},
        {path: 'test', name:'test',component:test},
        //商家入驻路由
        {path: 'entry', name:'entry',component:entry},
        {path: 'shopinfo', name:'shopinfo',component:shopinfo},
        //会员管理模块
        {path:'user',name:'user',component:user},
        {path:'userManagement',name:'userManagement',component:userManagement},
        {path:'rankManagement',name:'rankManagement',component:rankManagement}
      ]
    },
  ]
 
})
