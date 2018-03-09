import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //用户数据信息
    station:[],
    scroll: true
}

const actions={
     /**
     * 请求用户信息
     */
    station({ commit,state }) {
        if(state.scroll) {
            api.station()
                .then(res => {
                    console.log(res)
                    commit(types.STATION_LIST, res)
                })
        }
    }
}

const mutations={
    [types.STATION_LIST](state,res){
        state.station=res
    }
}

const getters={
    station:state=>state.station,
}

export default{
    state,
    actions,
    getters,
    mutations
}