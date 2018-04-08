<template>
   <div class="addGoodBrand">
       <el-button type="primary" size="medium" class="fr mb15" @click="zjperson">添加品牌</el-button>
       <table class="table">
           <thead>
               <tr>
                   <th width="32">序号</th>
                   <th width="100">品牌id</th>
                   <th>品牌名称</th>
                   <th width="70">品牌LOGO</th>
                   <th width="100">操&nbsp作</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="(until,index) in getALLGoodUnit">
                   <td>{{index+1}}</td>
                   <td>{{until.goodUnitId}}</td>
                   <td>{{until.goodUnitName}}</td>
                   <td>
                       <img src="" alt="" width="60" height="60">
                   </td>
                   <td>
                       <el-button type="success" size="mini" @click="xgperson(until.goodUnitId,until.goodUnitName)">修改</el-button>
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
                            <el-form-item label="增加商品单位">
                                <el-input v-model="goodUnit"></el-input>
                            </el-form-item>
                            <el-form-item label="上传LOGO图片">
                                <el-input type="file"></el-input>
                            </el-form-item>
                        </el-form>
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
                               {{message}}
                            </el-col>
                            <el-col :span="10">
                                 <el-input v-model="unitName"></el-input>
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
      unitId:"",
      unitName:"",
      goodUnit:"",
      imageUrl: '',
      form:{

      }
    };
  },
  methods: {
    xgperson: function(id,name) {
      this.unitId=id
      this.unitName=name
      this.xgDialogVisible = true;
      this.message = "修改商品单位";
    },
    zjperson: function() {
      this.centerDialogVisible = true;
      this.message = "增加商品单位";
    },
    xgSubmit:function(){
        let param={
           id: this.unitId,
           goodUnitName:this.unitName
        };
        this.$store.dispatch("updateGoodUnitById",param);
        setTimeout(()=>{
            this.$store.dispatch("getAllGoodUnit")
        },1000);
        this.xgDialogVisible=false;
    },
    zjSubmit:function(){
        let param={
            goodUnitName:this.goodUnit
        };
        this.$store.dispatch("addGoodUtil",param);
        setTimeout(()=>{
            this.$store.dispatch("getAllGoodUnit",param)
        },1000);
         this.centerDialogVisible = false;
    },
    //上传图片logo
   handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
  created() {
    if (this.getALLGoodUnit.length == 0) {
      this.$store.dispatch("getAllGoodUnit");
    }
  },
  computed: {
    ...mapGetters(["getALLGoodUnit"]),
  }
};
</script>
<style lang="less">
.addGoodBrand {
  .mb15 {
    margin-bottom: 15px;
  }
  .mt15{
      margin-top:15px;
  }
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
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


