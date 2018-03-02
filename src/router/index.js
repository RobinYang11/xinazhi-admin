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
import busineslit from '@/pages/busineslit/busineslit'
import ecmsearch from '@/pages/ecm/ecmsearch'
import ecmshow from '@/pages/ecm/ecmshow'
import ecmadd from '@/pages/ecm/ecmadd'
import user from '@/pages/user/user'
import userManagement from '@/pages/user/userManagement'
import rankManagement from '@/pages/user/rankManagement'
import infomanagement from '@/pages/user/infomanagement'
import orderlist from '@/pages/order/orderlist'
import merchant from '@/pages/merchant/merchant'
import merchantinfo from '@/pages/merchant/merchantinfo'
import merchantzt from '@/pages/merchant/merchantzt'
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
        {path: 'busineslit',name:'busineslit',component:busineslit},
        {path: 'ecmsearch',name:'ecmsearch',component:ecmsearch},
        {path: 'ecmshow',name:'ecmshow',component:ecmshow},
        {path: 'ecmadd',name:'ecmadd',component:ecmadd},
        //会员管理模块
        {path:'user',name:'user',component:user},
        {path:'userManagement',name:'userManagement',component:userManagement},
        {path:'rankManagement',name:'rankManagement',component:rankManagement},
        {path:'infomanagement',name:'infomanagement',component:infomanagement},
        //订单管理模块
        {path:'orderlist',name:'iorderlist',component:orderlist},
        //商户管理模块
        {path:'merchant',name:'merchant',component:merchant},
        {path:'merchantinfo',name:'merchantinfo',component:merchantinfo},
        {path:'merchantzt',name:'merchant',component:merchantzt}

      ]
    },
  ]
 
})
