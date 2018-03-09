import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //用户数据信息
    userList:[],
    scroll: true
}

const actions={
     /**
     * 请求用户信息
     */
    user({ commit,state }) {
        if(state.scroll) {
            api.userList()
                .then(res => {
                    console.log(res)
                    commit(types.USER_LIST, res)
                })
        }
    }
}

const mutations={
    [types.USER_LIST](state,res){
        state.userList=res
    }
}

const getters={
    userList:state=>state.userList,
}

export default{
    state,
    actions,
    getters,
    mutations
}