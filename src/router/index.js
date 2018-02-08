import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
import total from '@/pages/total'
import mainContainer from '@/pages/mainContainer'
import t1 from '@/components/t1'
import test from '@/pages/test'
import entry from '@/pages/entry/entry'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main',
    
    },
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
        {path: 'entry', name:'entry',component:entry}
      ]
    
    },
  ]
 
})
