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
import goodsatten from '@/pages/goodsmerchant/goodsatten'
import service from '@/pages/service/service'
import system from '@/pages/system/system'
import notice from '@/pages/notice/notice'
import evaluate from '@/pages/evaluate/evaluate'
import docmanclass from '@/pages/notice/docmanclass'
import newsnotice from '@/pages/notice/newsnotice'
import activity from '@/pages/campaignadv/activity'
import messpush from '@/pages/message/messpush'
Vue.use(Router)
const router = new Router({
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
        {path: 't1',name: 't1',component:t1,  meta:{ requireAuth: true}},
        {path: 'total', name:'total',component:total},
        {path: 'test', name:'test',component:test},
        //商家入驻路由
        {path: 'entry', name:'entry',component:entry,  meta:{ requireAuth: true}},
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
        {path:'merchantzt',name:'merchant',component:merchantzt},
        //商品管理模块
        {path:'goodsatten',name:'goodsatten',component:goodsatten},
        //客户服务模块
        {path:'service',name:'service',component:service},
        //系统管理模块
        {path:'system',name:'system',component:system},
        //通知公告模块
        {path:'notice',name:'notice',component:notice},
        {path:'docmanclass',name:'docmanclass',component:docmanclass},
        {path:'newsnotice',name:'newsnotice',component:newsnotice},
        //评价管理模块
        {path:'evaluate',name:'evaluate',component:evaluate},
        //活动广告模块
        {path:'activity',name:'activity',component:activity},
        //消息推送
        {path:'messpush',name:'messpush',component:messpush},
      ]
    },
  ]
 
})


router.beforeEach(function(to,from,next){
   
   if(to.matched.some(r=> r.meta.requireAuth))
   {
    console.log("需要校验")
    if(store.state.token){
      next();
    }
    else
    {
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
   }
        
   }
   else{
     console.log("不需要校验")
    next();
   }
})

export default router