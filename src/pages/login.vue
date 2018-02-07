<template>
   <div class="login">
          <div  class="header"> 
            <div class="wrapper">
               <el-row>
                  <el-clo :span="4"> LOGO</el-clo>
                  <el-clo :span="20"></el-clo>
               </el-row>
            </div>
          </div>
          <main class="main">
              <div class="wrapper">
                <el-row>
                   <el-col :span="16">  
                        <div class="banner">
                          <h1>
                             好新鲜 每一天
                          </h1>
                          <p>认真对待每个人的生活</p>
                      </div>
                   </el-col>
                   <el-col :span="8">
                       <div class="login-form">
                           <form action="/main">
                             <el-row>
                                <el-col :span="4">
                                   <label for="">账户</label>
                                </el-col>
                                <el-col :span="20">
                                    <el-input
                                    size="small"
                                    placeholder="请输入内容"
                                    suffix-icon="el-icon-date"
                                    v-model="input6">
                                  </el-input>
                                </el-col>
                             </el-row>
                            
                             <el-row>
                                <el-col :span="4">
                                   <label for="">密码</label>
                                </el-col>
                                <el-col :span="20">
                                    <el-input
                                    size="small"
                                    placeholder="请输入内容"
                                    suffix-icon="el-icon-date"
                                    v-model="input6">
                                  </el-input>
                                </el-col>
                             </el-row>
                              <el-row>
                                 <input type="submit">
                              </el-row>

                              
                           </form>


                           <div class="other">
                               <ul>
                                 <li><a href="#"><i class="el-icon-news"></i>QQ</a></li>
                                 <li><a href="#"><i class="el-icon-news"></i>微信登录</a></li>
                                 <li><a href="#"><i class="el-icon-news"></i>QQ</a></li>
                               </ul>
                           </div>
                       </div>
                   </el-col>
                </el-row>
              </div>
          </main>
          <footer >
            <div class="wrapper">
               <ul>
                 <li><a href="#">关于我们 |</a></li>
                 <li><a href="#">联系我们 |</a></li>
                 <li><a href="#">人才招聘 |</a></li>
                 <li><a href="#">商家入驻 |</a></li>
               </ul>
            </div>
          </footer>
   </div>

</template>
<script>
export default {
  name:"login",
}
</script>
<style lang="less" scoped>
    .login{
      .header{
        background-color: white;
        padding: 20px 0;
      }
      .main{
         background-color: #209242;
         position: relative;
        .banner{
            position: relative;
            top: 63px;
            left: 100px;
            color: #ffffff;
          }
        .login-form{
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 20px;
            width: 300px;
            background-color: #ffffff;
            .el-row{
                  .el-col-4{
                    line-height: 32px;
                    label{
                      font-size: 14px;
                      color: #484848;
                      font-weight: 700;
                    }
                  }
           
                  
                  margin-bottom: 20px;
                  input[type="submit"]{
                        width: 100%;
                        border: none;
                        padding: 10px;
                        background: #33ca39;
                        color: white;
                        font-size: 13px;
                  }
            }
            .other{
               line-height: 40px;
               height: 40px;
               display: inline-block;
               width: 100%;
               border-top: 1px solid gainsboro;
               ul>li{
                 list-style: none;
                 float: left;
                 margin-right: 10px;
                 a{
                   color:black;
                   display: inline-block;
                    position: relative;
                 }

               }
            }
        }
      }
      footer{
         padding: 20px;
        .wrapper{
          ul>li{
            float: left;
            list-style: none;
            height: 100px;
            margin-right: 20px;
            a{
              color:black;
            }
          }
        }
      }
    }
</style>
