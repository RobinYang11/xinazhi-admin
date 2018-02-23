<template>
    <div class="ecmadd">
        <el-row :gutter="20">
           <el-col :span="12">
               <el-form :inline="true"  >
                    <el-form-item label="商铺名称:">
                        <el-input placeholder="可输入"></el-input>
                    </el-form-item>
                </el-form>
           </el-col>
           <el-col :span="12">
                <el-form :inline="true"  >
                    <el-form-item label="商铺ID:">
                        <el-input placeholder="查询"></el-input>
                    </el-form-item>
               </el-form>
           </el-col>
        </el-row>
        
        <el-row>
            <el-col :span="24">
                <ul class="el-upload-list el-upload-list--picture-card" style="float:left">
                    <li tabindex="0" class="el-upload-list__item is-success" style="">
                        <img src="../../../static/img/sfzo.jpg" alt="" class="el-upload-list__item-thumbnail">
                        <a class="el-upload-list__item-name">
                            <i class="el-icon-document"></i>logo.png
                        </a>
                            <label class="el-upload-list__item-status-label">
                                <i class="el-icon-upload-success el-icon-check"></i>
                            </label>
                            <i class="el-icon-close"></i>
                            <i class="el-icon-close-tip">按 delete 键可删除</i>
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview">
                                    <i class="el-icon-zoom-in"></i></span>
                                <span class="el-upload-list__item-delete">
                                    <i class="el-icon-delete"></i>
                                </span>
                            </span>
                    </li>
                    <li tabindex="0" class="el-upload-list__item is-success" style="">
                        <img src="../../../static/img/yyzz.jpg" alt="" class="el-upload-list__item-thumbnail">
                        <a class="el-upload-list__item-name">
                            <i class="el-icon-document"></i>logo.png
                        </a>
                            <label class="el-upload-list__item-status-label">
                                <i class="el-icon-upload-success el-icon-check"></i>
                            </label>
                            <i class="el-icon-close"></i>
                            <i class="el-icon-close-tip">按 delete 键可删除</i>
                            <span class="el-upload-list__item-actions">
                                <span class="el-upload-list__item-preview">
                                    <i class="el-icon-zoom-in"></i></span>
                                <span class="el-upload-list__item-delete">
                                    <i class="el-icon-delete"></i>
                                </span>
                            </span>
                    </li>
                </ul>
                
                 <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove" style="float:left">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
            </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
            <el-col :span="24" class="center">
                <el-button>
                    <a href="/#/main/ecmsearch">保存</a>
                </el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
<style lang="less" scoped>
    .ecmadd{
        margin: 50px;
        .el-row{
            .action{
               
                height: 240px;
            }
            .el-col-24{
                text-align: center;
            }
        }
    }
</style>
