<template>
    <div class="system">
        <div style="margin-bottom:10px;">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>系统管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>系统管理</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <el-tabs tab-position='left' style="height:auto;">
                    <el-tab-pane label="角色管理">
                        <jiaose></jiaose>
                    </el-tab-pane>
                    <el-tab-pane label="权限管理">
                        <quanx></quanx>
                    </el-tab-pane>
                    <el-tab-pane label="字典管理">
                        <zidian></zidian>
                    </el-tab-pane>
                    <el-tab-pane label="日志管理">
                        <rizhi></rizhi>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-card>
    </div>
</template>

<script>
import jiaose from '../../components/systemanger/jiaose'
import quanx from '../../components/systemanger/quanx'
export default {
    name:"system",
    data:function(){
        return{

        }
    },
  components:{
      jiaose,quanx
  }
}
</script>

