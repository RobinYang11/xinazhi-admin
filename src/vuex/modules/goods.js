import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //用户数据信息
    goods:null,
}

const actions={
     /**
     * 请求用户信息,增加商品
     */
    addGood({ commit,state },params) {
        
        api.addGood(params)
            .then(res => {
                window.localStorage.setItem("newGood",res.data) 
                console.log(res.data)//返回id值
                // commit(types.GET_SHOP_LIST, res)
            })
    }
}

const mutations={
    // [types.GET_SHOP_LIST](state,res){
    //     state.shopList=res
    // }
}

const getters={
    goods:state=>state.goods,
}

export default{
    state,
    actions,
    getters,
    mutations
}