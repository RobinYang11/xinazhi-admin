import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
import total from '@/pages/total'
import mainContainer from '@/pages/mainContainer'
import devPlan from '@/components/devPlan'
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
import goodsatten from '@/pages/goodsmerchant/goodsatten'
import addGood from '@/pages/goodsmerchant/addGood'
import service from '@/pages/service/service'
import system from '@/pages/system/system'
import notice from '@/pages/notice/notice'
import evaluate from '@/pages/evaluate/evaluate'
import docmanclass from '@/pages/notice/docmanclass'
import newsnotice from '@/pages/notice/newsnotice'
import activity from '@/pages/campaignadv/activity'
import messpush from '@/pages/message/messpush'

import store from '../vuex/store'

Vue.use(Router)
const router = new Router({
  routes: [
 
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
      component: mainContainer,meta:{ requireAuth: true},
      children:[
        {path: 'devPlan',name: 'devPlan',component:devPlan,  meta:{ requireAuth: true}},
        {path: 'total', name:'total',meta:{ requireAuth: true},component:total},
        {path: 'test', name:'test',meta:{ requireAuth: true},component:test},
        //商家入驻路由
        {path: 'entry', name:'entry',component:entry,  meta:{ requireAuth: true}},
        {path: 'shopinfo', name:'shopinfo',meta:{ requireAuth: true},component:shopinfo},
        {path: 'busineslit',name:'busineslit',meta:{ requireAuth: true},component:busineslit},
        {path: 'ecmsearch',name:'ecmsearch',component:ecmsearch,meta:{ requireAuth: true}},
        {path: 'ecmshow',name:'ecmshow',component:ecmshow,meta:{ requireAuth: true}},
        {path: 'ecmadd',name:'ecmadd',component:ecmadd,meta:{ requireAuth: true}},
        //会员管理模块
        {path:'user',name:'user',component:user,meta:{ requireAuth: true}},
        {path:'userManagement',name:'userManagement',component:userManagement,meta:{ requireAuth: true}},
        {path:'rankManagement',name:'rankManagement',component:rankManagement,meta:{ requireAuth: true}},
        {path:'infomanagement',name:'infomanagement',component:infomanagement,meta:{ requireAuth: true}},
        //订单管理模块
        {path:'orderlist',name:'iorderlist',component:orderlist,meta:{ requireAuth: true}},
        //商户管理模块
        {path:'merchant',name:'merchant',component:merchant,meta:{ requireAuth: true}},
        {path:'merchantinfo',name:'merchantinfo',component:merchantinfo,meta:{ requireAuth: true}},
        {path:'merchantzt',name:'merchant',component:merchantzt,meta:{ requireAuth: true}},
        //商品管理模块
        {path:'goodsatten',name:'goodsatten',component:goodsatten,meta:{ requireAuth: true}},
        {path:'addGood',name:'addGood',component:addGood,meta:{ requireAuth: true}},
        //客户服务模块
        {path:'service',name:'service',component:service,meta:{ requireAuth: true}},
        //系统管理模块
        {path:'system',name:'system',component:system,meta:{ requireAuth: true}},
        //通知公告模块
        {path:'notice',name:'notice',component:notice,meta:{ requireAuth: true}},
        {path:'docmanclass',name:'docmanclass',component:docmanclass,meta:{ requireAuth: true}},
        {path:'newsnotice',name:'newsnotice',component:newsnotice,meta:{ requireAuth: true}},
        //评价管理模块
        {path:'evaluate',name:'evaluate',component:evaluate,meta:{ requireAuth: true}},
        //活动广告模块
        {path:'activity',name:'activity',component:activity,meta:{ requireAuth: true}},
        //消息推送
        {path:'messpush',name:'messpush',component:messpush,meta:{ requireAuth: true}},
      ]
    },
  ],

 
})


router.beforeEach(function(to,from,next){
   

   //判断目标需不需要拦截
   if(to.matched.some(r=> r.meta.requireAuth))
   {
    console.log("需要校验")
    //判断有没有令牌token
    let token=window.localStorage.getItem("token")
    if(token && undefined !=token){
      next();
    }
    //如果没有令牌,强制跳转到登录页面
    else
    {
      next({
        path:'/login',
        query:{redirect:to.path}
      })
   }
   //如果需要拦截，直接跳转   
   }
   else{
     console.log("不需要校验")
    next();
   }
})

export default router