import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //用户数据信息
    datas:[],
    docdatas:[],
    newsdatas:[],
    scroll: true
}

const actions={
     /**
     * 请求用户信息
     */
    docclass({ commit,state }) {
        if(state.scroll) {
            api.docclass()
                .then(res => {
                    commit(types.DOCCLASS_LIST, res)
                })
        }
    },
    docs({ commit,state }) {
        if(state.scroll) {
            api.docs()
                .then(res => {
                    commit(types.DOCS_LIST, res)
                })
        }
    },
    news({ commit,state }) {               
        if(state.scroll) {
            api.news()
                .then(res => {
                    commit(types.NEWS_LIST, res)
                })
        }
    }
}

const mutations={
    [types.DOCCLASS_LIST](state,res){
        state.datas=res
    },
    [types.DOCS_LIST](state,res){
        state.docdatas=res
    },
    [types.NEWS_LIST](state,res){
        state.newsdatas=res
    }
}

const getters={
    datas:state=>state.datas,
    docdatas:state=>state.docdatas,
    newdatas:state=>state.newsdatas,
}

export default{
    state,
    actions,
    getters,
    mutations
}