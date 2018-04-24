<template>
    <div>
        <div style="margin-bottom:10px;">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>订单管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <h4>我的订单</h4>
                </div>
            </div>
            <div class="panel-body">
                <div>
                    <orderManager></orderManager>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import orderManager from "../../components/order/orderManager"
export default {
    components:{
        orderManager
    }
}
</script>

<style lang="less" scoped>
.panel{
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .panel>.panel-header{
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .panel>.panel-header>.panel-title{
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
    border-bottom: 2px solid #e4e7ed;
    padding: 0 10px 10px 15px;
  }
  .panel>.panel-body{
    padding: 15px
  }
</style>
