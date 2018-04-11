<template>
    <div class="addGood">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>增加商品</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
             <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本信息" name="first">
                    <goodBasic></goodBasic>
                </el-tab-pane>
                <el-tab-pane label="商品图片" name="second">
                    <goodImage></goodImage>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>
<script>
import goodBasic from "../../components/attengoods/goodBasic"
import goodImage from "../../components/attengoods/goodImage"
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
  components:{
      goodBasic,goodImage
  }
};
</script>
<style lang="less">
    .addGood{
        .el-card__body{
            padding:0 10px;
        }
    }
</style>


