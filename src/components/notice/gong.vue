<template>
    <div class="gong">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="分类管理" name="first">
                <flmanger></flmanger>
            </el-tab-pane>
            <el-tab-pane label="文档管理" name="second">
                <docmanger></docmanger>
            </el-tab-pane> 
        </el-tabs>  
    </div>
</template>
<script>
import flmanger from '../../components/notice/flmanger'
import docmanger from '../../components/notice/docmanger'
  export default {
    data() {
      return {
        activeName: 'second',
         input: ''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        flmanger,docmanger
    }
  };
</script>

<style lang="less" scoped>
    .gong{

    }
</style>


    
</style>
