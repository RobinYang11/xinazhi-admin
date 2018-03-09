<template>
    <div class="docmanclass">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>增加文档</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <el-select v-model="valueo" placeholder="请选择用户类型">
                    <el-option
                    v-for="i in docdatas"
                    :key="i.valueo"
                    :label="i.labelo"
                    :value="i.content_type">
                    </el-option>
                </el-select>
                <el-select v-model="value" placeholder="请选择分类名称">
                    <el-option
                    v-for="item in datas"
                    :key="item.value"
                    :label="item.label"
                    :value="item.classify">
                    </el-option>
                </el-select>
                <h3 style="text-align:center;margin-bottom:10px;">我的大刀奥义饥渴难耐了</h3>
                <section class="editor" style="height: 550px;">
                    <quill-editor class="quill-editor" ref="myTextEditor" v-model="content" :config="editorOption"></quill-editor>
                </section>
                <el-button type="primary" class="fr" style="margin-bottom:10px;">提交</el-button>
            </div>
        </el-card>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      content: "",
      editorOption: {},
        value: '',
        valueo: ''
    };
  },
  created() {
    if (this.datas.length == 0) {
      this.$store.dispatch("docclass");
    }
    if (this.docdatas.length == 0) {
      this.$store.dispatch("docs");
    }
  },
  computed: {
    ...mapGetters(["datas"]),
    ...mapGetters(["docdatas"])
  },
};
</script>
<style lang="less" scoped>
.quill-editor {
  height: 500px;
}
</style>
