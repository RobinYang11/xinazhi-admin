<template>
    <div class="addGood">
        <div style="margin-bottom:10px;">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>商品管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>增加商品</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
             <!-- <el-tabs v-model="activeName" >
                <el-tab-pane label="基本信息" name="first">
                    <goodBasic :message="activeName" v-on:propName="showName"></goodBasic>
                </el-tab-pane>
                <el-tab-pane label="商品图片" name="second">
                    <goodImage :message="activeName" v-on:propName="showName"></goodImage>
                </el-tab-pane>
                <el-tab-pane label="商品规格" name="three">
                    <goodspecification></goodspecification>
                </el-tab-pane>
            </el-tabs> -->
            <el-row :gutter="20" style="padding:20px;">
                <el-steps :active="active" finish-status="success">
                    <el-step title="基本信息"></el-step>
                    <el-step title="上传图片"></el-step>
                    <el-step title="添加规格"></el-step>
                </el-steps>
                <router-view></router-view>
                <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
            </el-row>
        </el-card>
        
    </div>
</template>
<script>
import goodBasic from "../../components/attengoods/goodBasic"
import goodImage from "../../components/attengoods/goodImage"
import goodspecification from "../../components/attengoods/goodspecification"
export default {
    data() {
      return {
        activeName:"first",
        active: 1
      }
    },
    methods: {
        showName:function(data){
            this.activeName=data
        },
        next() {
        let router=this.$route.path
        alert(router)
        if(router=="/main/addGood/stepO"){
          this.$router.push({path:"/main/addGood/stepT"})
          this.active=2
        }else if(router=="/main/addGood/stepT"){
          this.$router.push({path:"/main/addGood/stepTr"})
          this.active=3
        }else{
          alert("步骤完成请求数据")
          
        }
      }
    },
  components:{
      goodBasic,goodImage,goodspecification
  }
};
</script>
<style lang="less">
    .addGood{
        .el-card__body{
            padding:0 10px;
        }
        .el-step__head.is-success{
            color: #66b1ff;
            border-color:#66b1ff;
        }
        .el-step__title.is-success{
            color: #66b1ff;
        }
    }
</style>


