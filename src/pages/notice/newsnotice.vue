<template>
    <div class="docmanclass">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>新闻资讯</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div> 
                <h3 style="text-align:center">双12活动大放送</h3>
                <p style="text-align:right; font-size:14px; color:#666;">2018/12/01</p>
                <p>vue quil-editor编辑器</p>
                <section class="editor" style="height: 550px;">
                    <quill-editor class="quill-editor" ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
                </section>
                <el-button type="primary" class="fr" style="margin-bottom:10px;">提交</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      content: "",
      editorOption: {}
    };
  },

  methods: {},
  components: {}
};
</script>
<style lang="less" scoped>
.quill-editor {
  height: 500px;
}
</style>

