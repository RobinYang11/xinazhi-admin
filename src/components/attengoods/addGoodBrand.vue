<template>
<div class="addGoodBrand">
<el-button type="primary" size="medium" class="fr mb15" @click="zjperson">添加品牌</el-button>
<table class="table">
<thead>
<tr>
<th width="32">序号</th>
<th width="180">品牌名称</th>
<th width="70">品牌LOGO</th>
<th>品牌描述</th>
<th width="100">操&nbsp作</th>
</tr>
</thead>
<tbody>
<tr v-for="(brand,index) in getALLGoodBrand">
<td>{{index+1}}</td>
<td>{{brand.goodBrandName}}</td>
<td>
    <img :src="brand.goodBrandLogo" alt="" width="60" height="60">
</td>
<td>{{brand.goodBrandDesc}}</td>
<td>
<el-button type="success" size="mini" @click="xgperson(brand.goodBrandId,brand.goodBrandName)">修改</el-button>
<!-- <el-button type="danger" size="mini" @click="dleperson">删除</el-button> -->
</td>
</tr>
</tbody>
</table>
<!--添加弹框S-->
<el-dialog
:title="message"
:visible.sync="centerDialogVisible"
width="30%"
>
<div>
<el-form ref="form" label-width="120px">
    <el-form-item label="增加品牌名称">
        <el-input v-model="goodBrandName"></el-input>
    </el-form-item>
    <el-form-item label="增加品牌描述">
        <el-input type="textarea" v-model="goodBrandDesc"></el-input>
    </el-form-item>
    <el-form-item label="上传LOGO图片">
        <input ref="logo" type="file"/>
    </el-form-item>
</el-form>
<el-alert
    :title="tips"
    type="warning"
    :closable="false">
</el-alert>
</div>
<span slot="footer" class="dialog-footer">
<el-button @click="centerDialogVisible = false">取 消</el-button>
<el-button type="primary" @click="zjSubmit()">确 定</el-button>
</span>
</el-dialog>
<!--添加弹框E-->
<!--修改弹框S-->
<el-dialog
:title="message"
:visible.sync="xgDialogVisible"
width="30%"
>
<div>
    <el-row style="margin-top:20px;">
        <el-col :span="5" style="line-height:40px;">
            品牌名称
        </el-col>       
        <el-col :span="10">
            <el-input v-model="goodBrandName"></el-input>
        </el-col>
    </el-row>
    <el-row style="margin-top:20px;">
        <el-col :span="5" style="line-height:40px;">
            品牌描述
        </el-col>       
        <el-col :span="10">
            <el-input v-model="goodBrandDesc"></el-input>
        </el-col>
    </el-row>
</div>
<span slot="footer" class="dialog-footer">
<el-button @click="xgDialogVisible = false">取 消</el-button>
<el-button type="primary" @click="xgSubmit()">确 定</el-button>
</span>
</el-dialog>
<!--修改弹框E-->
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      message: "",
      xgDialogVisible: false,
      centerDialogVisible: false,
      deDialogVisible: false,
      goodBrandId: "",
      goodBrandName: "",
      goodUnit: "",
      imageUrl: "",
      goodBrandName: "",
      goodBrandDesc:"",
      tips:"图片只能上传png格式",
      goodBrandLogo: null

    };
  },
  methods: {
    xgperson: function(id, name) {
      this.goodBrandId = id;
      this.goodBrandName = name;
      this.xgDialogVisible = true;
      this.message = "修改品牌名称";
    },
    zjperson: function() {
      this.centerDialogVisible = true;
      this.message = "增加品牌名称";
      this.tips="图片只能上传png格式"
    },
    xgSubmit: function() {
      let param={
        id: this.goodBrandId,
        goodBrandName:this.goodBrandName
      };
      this.$store.dispatch("updateGoodBrandById",param);
      setTimeout(()=>{
      this.$store.dispatch("getAllGoodBrand")
      },1000);
      this.xgDialogVisible = false;
    },
    zjSubmit: function() {
      let fd = new FormData();
      let file = this.$refs.logo.files[0];
      if(file.type!='image/png'){
        this.tips="您的上传图片格式有误"
        return false;
      }else{
        this.tips="图片格式正确"
      }
      fd.append("file", file);
      fd.append("goodBrandDesc",this.goodBrandDesc);
      fd.append("goodBrandName", this.goodBrandName);
      this.$store.dispatch("addGoodBrand", fd);
       setTimeout(()=>{
            this.$store.dispatch("getAllGoodBrand")
        },1000);

      this.centerDialogVisible = false;
    },
    //上传图片logo
    // handleAvatarSuccess(res, file) {
    //   this.imageUrl = URL.createObjectURL(file.raw);
    // },
    // beforeAvatarUpload(file) {
    //   const isJPG = file.type === "image/png";
    //   const isLt2M = file.size / 1024 / 1024 < 2;

    //   if (!isJPG) {
    //     this.$message.error("上传头像图片只能是 PNG 格式!");
    //   }
    //   if (!isLt2M) {
    //     this.$message.error("上传头像图片大小不能超过 2MB!");
    //   }
    //   return isJPG && isLt2M;
    // }
  },
  created() {
    if (this.getALLGoodBrand.length == 0) {
      this.$store.dispatch("getAllGoodBrand");
    }
  },
  computed: {
    ...mapGetters(["getALLGoodBrand"])
  }
};
</script>
<style lang="less">
.addGoodBrand {
  .mb15 {
    margin-bottom: 15px;
  }
  .mt15 {
    margin-top: 15px;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
}
</style>


