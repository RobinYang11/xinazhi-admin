import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //商户商品信息
    merchantlist:[],
    Commodity:[],
    orderval:[],
    shopeval:[],
    goodsTotal:null,
    scroll: true
}

const actions={
     /**
     * 请求商户户信息
     */
    merchant({ commit,state }) {
        if(state.scroll) {
            api.merchantlist()
                .then(res => {
                    console.log(res.data)
                    commit(types.MERCHANT_LIST, res)
                })
        }
    },
    /*请求商品信息*/
    getGoodSByPage({ commit,state },param) {
        if(state.scroll) {
            api.getGoodSByPage(param)
                .then(res => {
                    console.log(res.data)
                    commit(types.COMMODITY_LIST, res)
                })
        }
    },
    //商品信息分页总数
    getTotalGoodSize({commit,state}){
        if(state.scroll) {
            api.getTotalGoodSize()
                .then(res => {
                    
                    console.log(res)
                    commit(types.COMMODITY_TOTAL_LIST, res)
                })
        } 
    },
    /*订单评价*/
    orderval({ commit,state }) {
        if(state.scroll) {
            api.orderval()
                .then(res => {
                    commit(types.ORDERVAL_LIST, res)
                })
        }
    },
    /*商品评价*/
    shopeval({ commit,state }) {
        if(state.scroll) {
            api.shopeval()
                .then(res => {
                    commit(types.SHOPEVAL_LIST, res)
                })
        }
    }
}

const mutations={
    [types.MERCHANT_LIST](state,res){
        state.merchantlist=res
    },
    [types.COMMODITY_LIST](state,res){
        state.Commodity=res.data
    },
    [types.ORDERVAL_LIST](state,res){
        state.orderval=res
    },
    [types.SHOPEVAL_LIST](state,res){
        state.shopeval=res
    },
    [types.COMMODITY_TOTAL_LIST](state,res){
        state.goodsTotal=res.data
    }
}

const getters={
    merchantlist:state=>state.merchantlist,
    Commodity:state=>state.Commodity,
    orderval:state=>state.orderval,
    shopeval:state=>state.shopeval,
    goodsTotal:state=>state.goodsTotal
}

export default{
    state,
    actions,
    getters,
    mutations
}