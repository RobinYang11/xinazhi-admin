<template>
    <div class="system">
        <div style="margin-bottom:10px;">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>评价管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>评价管理</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <el-tabs tab-position='left' style="height:auto;">
                    <el-tab-pane label="商品评价">
                        <shopeval></shopeval>
                    </el-tab-pane>
                    <el-tab-pane label="订单评价">
                        <orderval></orderval>
                    </el-tab-pane> 
                </el-tabs>
            </div>
        </el-card>
    </div>
</template>

<script>
import shopeval from '../../components/evaluate/shopeval'
import orderval from '../../components/evaluate/orderval'
import qs from 'qs'
export default {
    name:"system",
    data:function(){
        return{

        }
    },
    created(){
        
        
             
                let goods={
                    goodName:"apple",
                    goodOtherName:"苹果",
                    goodPrice:33
                }
        
                let param={}
                // param['goodStr']=qs.stringify(goods)
                // console.log(param)
                this.$store.dispatch('addGood', goods)  
                
    },

    components:{  
      shopeval,orderval
  }
}
</script>

