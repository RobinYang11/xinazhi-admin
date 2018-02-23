<template>
   <div class="ecmshow">
       <el-row :gutter="20">
           <el-col :span="12">
               <h5>商铺名称：银川华信智信息技术有限公司</h5>
               <div class="photo">
                   <a href="#">
                       <img src="../../../static/img/yyzz.jpg" alt="协议展示图片">
                   </a>
               </div>
               <div class="btn">
                    <el-button type="success">
                        <a href="/#/main/ecmadd">续约</a>
                    </el-button>
               </div>
           </el-col>
           <el-col :span="12">
               <h5>商铺ID'：13464779136135</h5>
               <div class="photo">
                   <a href="#">
                       <img src="../../../static/img/yyzz.jpg" alt="协议展示图片">
                   </a>
               </div>
               <div class="btn">
                   <el-button type="default">
                        <a href="/#/main/ecmsearch">返回</a>
                    </el-button>
               </div>    
           </el-col>
       </el-row>
   </div>
</template>

<style lang="less" scoped>
    .ecmshow{
        .el-row{
             margin: 50px; 
            .el-col{
                h5{
                    text-align: center;
                }
                .photo{
                    height:200px;
                    width: 100%;
                    margin: 30px auto;
                    a{
                        width:100%;
                        height: 100%; 
                        float: left;
                        display: inline-block;
                        position: relative;
                        img{
                        width: 200px;
                        height: 100%;
                        margin: 0 auto;
                        }
                    }
                }
                .btn{
                    text-align: center;
                    width: 100%;
                    .el-button--success{
                        a{
                         color: #fff;
                        }
                    }
                }
            }
        }
    }
</style>

