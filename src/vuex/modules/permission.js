import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //用户数据信息
    permission:[],
    scroll: true
}

const actions={
     /**
     * 请求用户信息
     */
    permission({ commit,state }) {
        if(state.scroll) {
            api.permission()
                .then(res => {
                    commit(types.PERMISION_LIST, res)
                })
        }
    }
}

const mutations={
    [types.PERMISION_LIST](state,res){
        state.permission=res
    }
}

const getters={
    permission:state=>state.permission,
}

export default{
    state,
    actions,
    getters,
    mutations
}