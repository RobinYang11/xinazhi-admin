import axios from 'axios'
import qs from 'qs'

import request from './request'

import * as _ from '../until/tool'



// export async function fetch(url, params) {
//     let res= await axios.get(url, params)   
//    console.log(res)  
//    return res;
// }

export default {

    
    // 用户登录
    async login(params){
        console.log("this is api params")
        console.log(params)
        return await request.post('/user/login',params)
    },

    async  logout(params){
        return  await  request.get('/user/logout',params)
    },


    async addGood(params){
        return  await request.post('/good/addGood',params)
    },
    /*按页获取店铺信息*/
    async getShopByPage(params) {
        return  await request.get('/shop/getShopByPage',params)
    },
     /*按页获取店铺总数*/
     async getTotalShopSize() {
        return  await request.get('/shop/getTotalShopSize')
    },
    /*商品信息*/
    async getGoodSByPage(params){
        return  await request.get('/good/getGoodSByPage',params)
    },
    /*获取所有商品分类*/
    async getAllGoodType(){
        return await request.get('/good/getAllGoodType')
    },
    /*添加商品分类*/
    async addGoodType(params){
        return await request.post('/good/addGoodType',params)
    },
    /*获取所有商品单位*/
    async getAllGoodUnit(){
        return await request.get('/good/getAllGoodUnit')
    },
    /*添加商品单位*/
    async addGoodUtil(params){
        return await request.post('/good/addGoodUtil',params)
    },
    /*修改商品单位*/
    async updateGoodUnitById(params){
        return await request.post('/good/updateGoodUnitById',params)
    },
    /*修改商品分类*/
    async updateGoodType(params){
        return await request.post('/good/updateGoodType',params)
    },
    /*删除商品分类*/
    async deleteGoodTypeById(params){
        return await request.post('/good/deleteGoodTypeById',params)
    },
    /*增加商品品牌*/
    async addGoodBrand(params){
        return await request.post('/good/addGoodBrand',params)
    },
    /*获取所有商品品牌*/
    async getAllGoodBrand(){
        return await request.get('/good/getAllGoodBrand')
    },
    /*修改商品品牌*/
    async updateGoodBrandById(params){
        return await request.post('/good/updateGoodBrandById',params)
    },
    /*商品总数*/
    async getTotalGoodSize(){
        return await request.get('/good/getTotalGoodSize')
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
    // axios.defaults.baseURL="http://api.robinblog.cn/"
    // axios.defaults.timeout = 5000;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
    
    // axios.interceptors.request.use(function(config) {
    //     console.log("haah")
    //     return config;
    //   }, function(error) {
    //     return Promise.reject(error);
    //   })
    
    //POST传参序列化
    // axios.interceptors.request.use((config) => {
    //     console.log("ddd")
    //     if(config.method  === 'post'){
    //         config.data = qs.stringify(config.data);
    //     }
    //     return config;
    // },(error) =>{
    //      _.toast("错误的传参", 'fail');
    //     return Promise.reject(error);
    // });
    
    //返回状态判断
    // axios.interceptors.response.use((res) =>{
    //     if(!res.data.success){
    //         // _.toast(res.data.msg);
    //         return Promise.resolve(res.data);
    //     }
    //     return res.data;
    // }, (error) => {
    //     _.toast("网络异常", 'fail');
    //     return Promise.reject(error);
    // });
}