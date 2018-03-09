<template>
    <div class="messpush">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>消息推送</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <el-tabs tab-position='left' style="height:auto;">
                    <el-tab-pane label="站内信"> 
                        <station></station>
                    </el-tab-pane>
                    <el-tab-pane label="短信">
                        2
                    </el-tab-pane>
                    <el-tab-pane label="消息">
                        3
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-card>
    </div>
</template>

<script>
import station from '../../components/messagepush/station'
export default {
    name:"messpush",
    data:function(){
        return{

        }
    },
  components:{
      station
  }
}
</script>

