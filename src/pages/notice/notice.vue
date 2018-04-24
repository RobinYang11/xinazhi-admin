<template>
    <div class="system">
        <div style="margin-bottom:10px;">
            <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通知公告</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>通知公告</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <el-tabs tab-position='left' style="height:auto;">
                    <el-tab-pane label="促销/公告"> 
                        <gong></gong>
                    </el-tab-pane>
                    <el-tab-pane label="帮助中心">
                        <help></help>
                    </el-tab-pane>
                    <el-tab-pane label="新闻资讯">
                        <news></news>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-card>
    </div>
</template>

<script>
import news from '../../components/notice/news'
import help from '../../components/notice/help'
import gong from '../../components/notice/gong'
export default {
    name:"system",
    data:function(){
        return{

        }
    },
  components:{
      news,help,gong
  }
}
</script>

