<template>
    <div class="Enterprise">
        <p>企业营业执照</p>
        <div class="photo">
            <a href="#">
                <img :src="enterprice.company_business_license" alt="营业执照">
                <div class="position">
                    <a @click="dialogFormVisibleo = true">
                        查看详情
                    </a>
                </div>
            </a>  
             <!--弹框内容S-->
            <el-dialog title="" :visible.sync="dialogFormVisibleo">
                <img :src="enterprice.company_business_license" alt="营业执照">
            </el-dialog>
            <!--弹框内容E-->   
        </div>
        <p>法人身份证</p>
        <div class="photo">
            <a href="#">
                <img :src="enterprice.Legal_identity_card_front" alt="身份证">
                <div class="position">
                    <a @click="dialogFormVisible = true">
                        查看详情
                    </a>
                </div>
            </a> 
            <!--弹框内容S-->
            <el-dialog title="" :visible.sync="dialogFormVisible">
                <img :src="enterprice.Legal_identity_card_front" alt="身份证">
            </el-dialog>
            <!--弹框内容E-->
            <a href="#" style="margin-left:20px;">
                <img :src="enterprice.Legal_identity_card_back" alt="营业执照">
                 <div class="position">
                    <a @click="dialogFormVisiblet = true">
                        查看详情
                    </a>
                </div>
            </a> 
            <!--弹框内容S-->
            <el-dialog title="" :visible.sync="dialogFormVisiblet">
                <img :src="enterprice.Legal_identity_card_back" alt="身份证">
            </el-dialog>
            <!--弹框内容E-->   
        </div>
        <div class="btn">
            <el-button type="primary">审核通过</el-button>
            <el-button >驳回</el-button>
        </div>
    </div>
</template>
<script>
export default {
  name: "Enterprise",
  props:['enterprice'],
  data:function(){
      return{
           dialogFormVisible: false,
           dialogFormVisibleo: false,
           dialogFormVisiblet: false,
      }
  }
};
</script>
<style lang="less">
.Enterprise {
  p{
      margin: 10px 0;
  }  
  .photo{
      height:200px;
      width: 100%;
        a{
            width:200px;
            height: 100%; 
            float: left;
            border: 1px dashed #ddd;
            display: inline-block;
            position: relative;
            .position{
                position:absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: rgba(0, 0, 0, 0.5);
                a{
                    text-align: center;
                    width: 100px;
                    height: 28px;
                    line-height: 28px;
                    margin: 86px 50px;
                    color: #fff;
                }
            }
            img{
            width: 200px;
            height: 100%;
            opacity: 0.5;
        }
       
      } 
      .el-dialog__wrapper{
          .el-dialog{
              width: 60%;
              height: 70%;
              margin: 15% auto;
              .el-dialog__body{

              }
              .el-dialog__footer{
                    position: absolute;
                    bottom: 10px;
                    right: 20px;
                    width: 100%;
              }
          }
      }
  }
  .btn{
      margin-top: 20px;
      width: 100%;
      text-align: center;
  }
}
</style>

