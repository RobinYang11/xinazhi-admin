import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //用户数据信息
    shopList:[],
    scroll: true,
    count:0
}

const actions={
     /**
     * 请求用户信息
     */
    shop({ commit,state }) {
        if(state.scroll) {
            api.shopList()
                .then(res => {
                    console.log(res)
                    commit(types.GET_SHOP_LIST, res)
                })
        }
    }
}

const mutations={
    [types.GET_SHOP_LIST](state,res){
        state.shopList=res
    }
}

const getters={
    shopList:state=>state.shopList,
}

export default{
    state,
    actions,
    getters,
    mutations
}