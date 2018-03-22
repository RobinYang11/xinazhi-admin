import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //用户数据信息
    shopList:[],
    shopTotal:null,
    scroll: true,
    count:0
}

const actions={
     /**
     * 店铺信息
     */
    getShopByPage({ commit,state},param) {
        if(state.scroll) {
            api.getShopByPage(param)
                .then(res => {
                    console.log(res.data)
                    console.log(res.data.length)
                    commit(types.GET_SHOP_LIST, res)
                })
        }
    },
    getTotalShopSize({ commit,state}) {
        if(state.scroll) {
            api.getTotalShopSize()
                .then(res => {
                    console.log(res)
                    commit(types.GET_SHOP_TOTAL_LIST, res)
                })
        }
    },
}

const mutations={
    [types.GET_SHOP_LIST](state,res){
        state.shopList=res.data
    },
    [types.GET_SHOP_TOTAL_LIST](state,res){
        state.shopTotal=res.data
    }
}

const getters={
    shopList:state=>state.shopList,
    shopTotal:state=>state.shopTotal
}

export default{
    state,
    actions,
    getters,
    mutations
}