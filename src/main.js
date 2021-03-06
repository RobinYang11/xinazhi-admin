// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import VueQuillEditor from 'vue-quill-editor'
 
import 'element-ui/lib/theme-chalk/display.css';
//全局引入echarts图标 ，不建议使用。应按需映入
import 'element-ui/lib/theme-chalk/index.css'
//富文本编辑器
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
//  let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
// require('echarts/lib/chart/bar')
//  引入提示框和title组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
Vue.use(ElementUI)
Vue.use(VueQuillEditor)
//引入axios 
import axios from 'axios'
Vue.prototype.$http = axios

//引入mockjs
// require('./mock/mock.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
