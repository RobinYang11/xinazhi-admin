import axios from 'axios'
import qs from 'qs'

import * as _ from '../until/tool'


axios.interceptors.request.use(function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  })

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
     _.toast("错误的传参", 'fail');
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        // _.toast(res.data.msg);
        return Promise.resolve(res.data);
    }
    return res.data;
}, (error) => {
    _.toast("网络异常", 'fail');
    return Promise.reject(error);
});


export async function fetch(url, params) {
   let res= await axios.get(url, params)   
   console.log(res)  
   return res;
}

export default {  
    // 用户登录
    login(){
        return fetch('/api/login')
    },

    /*商品信息*/
    shopList() {
        return fetch('/api/shop')
    },
    /*会员信息*/
    userList() {
        return fetch('/api/users')
    },
    /*商户信息*/
    merchantlist() {
        return fetch('/api/merchant')
    },
    adminrole() {
        return fetch('/api/admin_role')
    },
    permission(){
        return fetch('/api/permission')
    },
    /*商品信息*/
    Commodity(){
        return fetch('/api/Commodity')
    },
    /*促销/公告*/
    docclass(){
        return fetch('/api/doc_class')
    },
    docs(){
        return fetch('/api/docs')
    },
    news(){
        return fetch('/api/news')
    },
    /*活动广告*/
    Promotion(){
        return fetch('/api/Promotion')
    },
    basicactvity(){
        return fetch('/api/basic_activity')
    },
    Coupon(){
        return fetch('/api/Coupon')
    },
    /*订单评价*/
    orderval(){
        return fetch('/api/Commodity_evaluation')
    },
    /*商品评价*/
    shopeval(){
        return fetch('/api/Commodity_shope_evaluation')
    },
    /*消息推送*/
    station(){
        return fetch('/api/station_push')
    }
}