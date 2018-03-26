<template>
  <div> 
      <el-card class="box-card">
             <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="总开发计划图" name="first">
                 <devPlanMap/>
              </el-tab-pane>
              <el-tab-pane label="开发资料" name="second">开发资料</el-tab-pane>
              <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
            </el-tabs>
      </el-card>
  </div>
</template>
<script>

import devPlanMap from "@/components/devPlan/devPlanMap";

export default {
  name :"devPlan",
  components:{
    devPlanMap
  },
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
