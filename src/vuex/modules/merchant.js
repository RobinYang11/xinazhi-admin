import api from '../../fetch/api'
import * as types from '../types.js'

const state={
    //商户商品信息
    Commodity:[],
    GoodTypeList:[],
    addGoodType:[],
    getALLGoodUnit:[],
    updateGoodType:[],
    getALLGoodBrand:[],
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
    /*请求所有商品分类*/
    getAllGoodType({commit,state}){
  
        if(state.scroll){
            api.getAllGoodType()
            .then(res=>{
                console.log(res.data)
                commit(types.ADDGOOD_TYPE,res)
            })
        }
    },
    /*添加商品分类*/
    addGoodType({commit,state},param){
       
        if(state.scroll){
            api.addGoodType(param)
            .then(res=>{
                commit(types.GOOD_TYPE_LIST,res)
            })
        }
    },
    /*修改商品分类*/
    updateGoodType({commit,state},param){
        if(state.scroll){
            api.updateGoodType(param)
            .then(res=>{
                commit(types.UNDATE_GOOD_TYPE,res)
            })
        }
    },
    /*删除商品分类*/
    deleteGoodTypeById({commit,state},param){
        if(state.scroll){
            api.deleteGoodTypeById(param)
            .then(res=>{
                
            })
        }
    },
    /*获取商品所有单位*/
    getAllGoodUnit({commit,state}){
        if(state.scroll){
            api.getAllGoodUnit()
            .then(res=>{
                console.log(res.data)
                commit(types.GETALLGOOD_UNITL,res)
            })
        }
    },
    /*增加商品单位*/
    addGoodUtil({commit,state},param){
        if(state.scroll){
            api.addGoodUtil(param)
            .then(res=>{
                commit(types.GETALLGOOD_UNITL,res)
            })
        }
    },
      /*修改商品单位*/
      updateGoodUnitById({commit,state},param){
        if(state.scroll){
            api.updateGoodUnitById(param)
            .then(res=>{
                console.log(res.data)
                commit(types.GETALLGOOD_UNITL,res)
            })
        }
    },
    //增加商品品牌
    addGoodBrand({commit,state},param){
        if(state.scroll){
            api.addGoodBrand(param)
           .then(res=>{
            console.log(param)
            // commit(types.GETALLGOOD_UNITL,res)
           })
        }
    },
    //获取商品品牌
    getAllGoodBrand({commit,state}){
        if(state.scroll){
            api.getAllGoodBrand()
            .then(res=>{
                commit(types.Get_ALLGOOD_BRAND,res)
            })
        }
    },
    updateGoodBrandById({commit,state}){
        if(state.scroll){
            api.updateGoodBrandById()
            .then(res=>{

            })
        }
    },
    //商品信息分页总数
    getTotalGoodSize({commit,state}){
        if(state.scroll) {
            api.getTotalGoodSize()
                .then(res => {
                    commit(types.COMMODITY_TOTAL_LIST, res)
                })
        } 
    }
}

const mutations={
    [types.COMMODITY_LIST](state,res){
        state.Commodity=res.data
    },
    [types.COMMODITY_TOTAL_LIST](state,res){
        state.goodsTotal=res.data
    },
    [types.ADDGOOD_TYPE](state,res){
        state.GoodTypeList=res.data
    },
    [types.GOOD_TYPE_LIST](state,res){
        state.addGoodType=res.data
    },
    [types.GETALLGOOD_UNITL](state,res){
        state.getALLGoodUnit=res.data
    },
    [types.UNDATE_GOOD_TYPE](state,res){
        state.updateGoodType=res.data
    },
    [types.Get_ALLGOOD_BRAND](state,res){
        state.getALLGoodBrand=res.data
    }
}

const getters={
    Commodity:state=>state.Commodity,
    goodsTotal:state=>state.goodsTotal,
    GoodTypeList:state=>state.GoodTypeList,
    addGoodType:state=>state.addGoodType,
    getALLGoodUnit:state=>state.getALLGoodUnit,
    updateGoodType:state=>state.updateGoodType,
    getALLGoodBrand:state=>state.getALLGoodBrand
}

export default{
    state,
    actions,
    getters,
    mutations
}