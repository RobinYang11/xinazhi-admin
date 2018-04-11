<template>
   <div class="goodImage">
      <el-form ref="form" label-width="80px">
           <el-form-item label="商品图片" style="width:100%">
                            <el-row :gutter="10">
                                <el-col :span="4" style="display:flex">
                                    <a href="javascript:;" class="upload">上传文件
                                        <input type="file" ref="upload" @change="onChangeo($event)" multiple="multiple">
                                    </a>
                                    <span class="span">{{fileNameo}}</span>
                                </el-col>
                                <el-col :span="4" style="display:flex">
                                    <a href="javascript:;" class="upload">上传文件
                                        <input type="file" ref="upload" @change="onChanget($event)" multiple="multiple">
                                    </a>
                                    <span class="span">{{fileNamet}}</span>
                                </el-col>
                                <el-col :span="4" style="display:flex">
                                    <a href="javascript:;" class="upload">上传文件
                                        <input type="file" ref="upload" @change="onChangetr($event)" multiple="multiple">
                                    </a>
                                    <span class="span">{{fileNametr}}</span>
                                </el-col>
                                <el-col :span="4" style="display:flex">
                                    <a href="javascript:;" class="upload">上传文件
                                        <input type="file" ref="upload" @change="onChangef($event)" multiple="multiple">
                                    </a>
                                    <span class="span">{{fileNamef}}</span>
                                </el-col>
                                <el-col :span="4" style="display:flex">
                                    <a href="javascript:;" class="upload">上传文件
                                        <input type="file" ref="upload" @change="onChangefiv($event)" multiple="multiple">
                                    </a>
                                    <span class="span">{{fileNamefiv}}</span>
                                </el-col>
                            </el-row>  
                        </el-form-item>
                        <el-form-item label="简介" style="width:90%">
                            <quillEditor></quillEditor>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary">立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
      </el-form>
   </div>
</template>
<script>
import quillEditor from "../quillEditor"
export default {
    data:function(){
        return{
            fileNameo:"未选择文件",
            fileNamet:"未选择文件",
            fileNametr:"未选择文件",
            fileNamef:"未选择文件",
            fileNamefiv:"未选择文件",
        }
    },
  methods:{
    onChangeo:function(e){
        this.fileNameo=e.target.files[0].name;
    },
    onChanget:function(e){
        this.fileNamet=e.target.files[0].name;
    },
    onChangetr:function(e){
        this.fileNametr=e.target.files[0].name;
    },
    onChangef:function(e){
        this.fileNamef=e.target.files[0].name;
    },
    onChangefiv:function(e){
        this.fileNamefiv=e.target.files[0].name;
    },
  },
   components:{
      quillEditor
  }
}
</script>
<style lang="less" scoped>
    .goodImage{
         .el-form{ 
                     .el-form-item {
                        margin-bottom: 22px;
                        width: 40%;
                        float: left;
                        margin: 10px 5%;  
                        .upload{
                            padding: 6px 12px;
                            height: 24px;
                            line-height: 24px;
                            position: relative;
                            border: 1px solid rgb(153, 153, 153);
                            text-decoration: none;
                            color: #666;

                            input{
                                position: absolute;
                                overflow: hidden;
                                right: 0;
                                top: 0;
                                opacity: 0;
                                width:100%;
                            }
                        } 
                        .span{
                            font-size: 14px;
                            color:#2ec748;
                            overflow: hidden;
                            text-overflow: ellipsis; 
                        } 
                    }
                }   
                .el-form::after{
                        content: "";
                        display:block;
                        height:0;
                        clear:both;
                    } 
    }
</style>


