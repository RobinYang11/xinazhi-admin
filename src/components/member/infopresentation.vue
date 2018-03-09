<template>
    <div class="infopress">
         <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="营业执照" name="first">
                <enterprise></enterprise>
            </el-tab-pane>
            <el-tab-pane label="税务信息" name="second">
                支持税收社会和谐共发展
            </el-tab-pane>
            <el-tab-pane label="法人信息" name="third">
                <person></person>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import enterprise from './enterprise'
import person from './person'
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
    components:{ enterprise,person}
  };
</script>
<style lang="less">
    .infopress{
        padding-left: 10px;
    }
</style>

