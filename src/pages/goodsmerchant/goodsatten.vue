<template>
    <div>
        <div class="panel">
            <div class="panel-body" style=" background:#fff; padding: 15px;"> 
                 <div class="attengooodsContent">
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="全部商品" name="first">
                               <allShop></allShop>
                            </el-tab-pane>
                            <el-tab-pane label="分类管理" name="second">
                                <addGoodType></addGoodType>
                            </el-tab-pane>
                            <el-tab-pane label="单位管理" name="third">
                                <addGoodUtil></addGoodUtil>
                            </el-tab-pane>
                        </el-tabs>
                </div> 
            </div> 
        </div>
    </div>
</template>

<script>
import allShop from "../../components/attengoods/allShop.vue"
import addGoodType from "../../components/attengoods/addGoodType.vue"
import addGoodUtil from "../../components/attengoods/addGoodUtil.vue"
export default {
    name:"goodsatten",
    data:function(){
        return{
            activeName: "first",
        }
    },
     methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
    components:{
        allShop,addGoodType,addGoodUtil
    }
}
</script>
<style lang="less" >
.attengooodsContent {
  .el-tabs {
    .el-tabs__nav-scroll {
      .el-tabs__nav {
        .el-tabs__active-bar {
          background-color: #2ec748;
        }
        .el-tabs__item.is-active {
          background-color: #2ec748;
          color: #fff;
          &:hover {
            color: #fff;
          }
        }
        .el-tabs__item {
          height: 32px;
          line-height: 32px;
          padding: 0 15px;
          &:hover {
            color: #2ec748;
          }
        }
      }
    }
  }
}
</style>



