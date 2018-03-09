<template>
    <div class="system">
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
export default {
    name:"system",
    data:function(){
        return{

        }
    },
  components:{
      shopeval,orderval
  }
}
</script>

