import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //用户数据信息
    adminrole:[],
    scroll: true
}

const actions={
     /**
     * 请求用户信息
     */
    adminrole({ commit,state }) {
        if(state.scroll) {
            api.adminrole()
                .then(res => {
                    console.log(res)
                    commit(types.ADMIN_ROLE_LIST, res)
                })
        }
    }
}

const mutations={
    [types.ADMIN_ROLE_LIST](state,res){
        state.adminrole=res
    }
}

const getters={
    adminrole:state=>state.adminrole,
}

export default{
    state,
    actions,
    getters,
    mutations
}