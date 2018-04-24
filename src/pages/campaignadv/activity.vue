<template>
    <div class="activity">
        <div style="margin-bottom:10px;">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动广告</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>活动广告</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <el-tabs tab-position='left' style="height:auto;">
                    <el-tab-pane label="促销活动"> 
                        <Promotion></Promotion>
                    </el-tab-pane>
                    <el-tab-pane label="基础活动">
                        <basic></basic>
                    </el-tab-pane>
                    <el-tab-pane label="专题活动">
                        <Thematic></Thematic>
                    </el-tab-pane>
                    <el-tab-pane label="优惠券">
                        <Coupon></Coupon>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-card>
    </div>
</template>

<script>
import Promotion from '../../components/activity/Promotion'
import basic from '../../components/activity/basic'
import Thematic from '../../components/activity/Thematic'
import Coupon from '../../components/activity/Coupon'
export default {
    name:"system",
    data:function(){
        return{

        }
    },
  components:{
      Promotion,basic,Thematic,Coupon
  }
}
</script>

