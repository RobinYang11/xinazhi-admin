<template>
   <div class="goodImage">
      <div>
        <input type="file" @change="preview($event)" />
        <div ref="file">
           <img :src="imgPath" alt="">
        </div>
      </div>     
      <el-form ref="form" label-width="80px">
          <el-form-item style="width:90%">
            <table class="table">
              <thead>
                <tr>
                  <th>图片上传一</th>
                </tr>
              </thead>
              <tbody>
                <tr>  
                
                  <td>
                    <el-upload :class="{disp:isTrue}"
                      action="http://localhost:8080/api/good/addGoodImg"
                      list-type="picture-card"
                      :limit="num"
                      :data="param"
                      :before-upload="beforeAvatarUpload"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove"
                      :on-success="uploadSuc"
                      >
                      <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </td>
                </tr>  
              </tbody>  
            </table>    
          </el-form-item>
          <el-form-item label="简介" style="width:90%">
              <quillEditor></quillEditor>
          </el-form-item>
          <!-- <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
          </el-form-item> -->
      </el-form>
   </div>
</template>
<script>
import quillEditor from "../../../components/quillEditor";
export default {
   props:["message"],
  data: function() {
    return {
       dialogImageUrl: '',
       dialogVisible: false,
       num:5,
       isTrue:false,
       imgPath:"",
       param:{
         goodId:window.localStorage.getItem("newGood")
       }
    };
  },
  methods: {
     preview:function(e){
       if(e.target.files && e.target.files[0]){   
         console.log("robin")           
         var reader=new FileReader();
         let $this=this 
         reader.onload=function(){
           console.log("robin")
            console.log(this)
            $this.imgPath=this.result;
         }
         reader.readAsDataURL(e.target.files[0])
        //  console.log(e.target.result)
       }
     },
     onSubmit(){
       if(window.localStorage.getItem("newGood")){
        //   this.$store.state.activeName="three" 
        this.$emit("propName","three")
      }else{
          alert("数据请求错误")
      }
     },
      beforeAvatarUpload(file) {
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isPNG) {
          this.$message.error('上传头像图片只能是 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isPNG && isLt2M;
      },
      handleRemove(file, fileList) {
        this.isTrue=false
        alert(file.response)
        let param={
          picId:file.response
        }
        this.$store.dispatch("deleteGoodImg",param)
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      uploadSuc(response, file, fileList){
        
        console.log(file)
        if(fileList.length==5){
          this.isTrue=true;
        }
      }
  },
  components: {
    quillEditor
  }
};
</script>
<style lang="less" >
.goodImage {
  .el-form {
    .el-form-item {
      margin-bottom: 22px;
      width: 40%;
      float: left;
      margin: 10px 5%;
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
        width: 100px;
        height: 100px;
        line-height: 100px;
        text-align: center;
      }
      .avatar {
        width: 100px;
        height: 100px;
        display: block;
      }
      .disp .el-upload.el-upload--picture-card{
        display:none;
      }
      .el-upload-list--picture-card .el-upload-list__item{
        width:130px;
        height:130px;
      }
      .el-upload--picture-card{
        width:130px;
        height:130px;
      }
    }
  }
  .el-form::after {
    content: "";
    display: block;
    height: 0;
    clear: both;
  }
}
</style>


