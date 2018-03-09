import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //用户数据信息
    Promotion:[],
    basicactvity:[],
    Coupon:[],
    scroll: true
}

const actions={
     /**
     * 活动广告
     */
    Promotion({ commit,state }) {
        if(state.scroll) {
            api.Promotion()
                .then(res => {
                    commit(types.PROMOTION_LIST, res)
                })
        }
    },
    basicactvity({ commit,state }) {
        if(state.scroll) {
            api.basicactvity()
                .then(res => {
                    commit(types.BASIC_ACT_LIST, res)
                })
        }
    },
    Coupon({ commit,state }) {
        if(state.scroll) {
            api.Coupon()
                .then(res => {
                    commit(types.COUPON_LIST, res)
                })
        }
    }
}

const mutations={
    [types.PROMOTION_LIST](state,res){
        state.Promotion=res
    },
    [types.BASIC_ACT_LIST](state,res){
        state.basicactvity=res
    },
    [types.COUPON_LIST](state,res){
        state.Coupon=res
    }
}

const getters={
    Promotion:state=>state.Promotion,
    basicactvity:state=>state.basicactvity,
    Coupon:state=>state.Coupon,
}

export default{
    state,
    actions,
    getters,
    mutations
}