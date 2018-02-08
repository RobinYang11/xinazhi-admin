<template>
   <div class="login">
          <div  class="header"> 
            <div class="wrapper">
               <el-row>
                  <el-col :span="10"> 
                     <img src="../../static/img/logo1.png" alt="">
                  </el-col>
                  <el-col :span="10"></el-col>
               </el-row>
            </div>
          </div>
          <main class="main">
              <div class="wrapper">
                <el-row>
                   <el-col :span="14">  
                        <div class="banner">
                          <h1>
                             好新鲜 每一天
                          </h1>
                          <p>认真对待每个人的生活</p>
                      </div>
                   </el-col>
                   <el-col :span="10">
                       <div class="login-form">
                           <div class="login-title">
                             会员登录
                           </div>
                           <form action="/main">
                             <el-row>
                                <el-col :span="4">
                                   <label for="">账户</label>
                                </el-col>
                                <el-col :span="20">
                                    <el-input
                                    size="small"
                                    placeholder="请输入内容"
                                    suffix-icon="iconfont icon-people"
                                    >
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
                                    suffix-icon="iconfont icon-lock"
                                    >
                                  </el-input>
                                </el-col>
                             </el-row>
                              <el-row>
                                 <el-col :span="24" class="password">
                                   <a href="#">忘记密码</a>
                                 </el-col>
                              </el-row>
                              <el-row>
                                 <input type="submit" value="登录">
                              </el-row>    
                           </form>
                           <div class="other">
                               <ul>
                                  <li>
                                    <a href="#"> <b class="qq-icon"></b> <span>QQ</span> </a>
                                    <span class="line">|</span>
                                  </li>
                                  <li>
                                    <a href="#"><b class="wx-icon"></b><span>微信</span></a>
                                  </li>
                                  <li class="extra-fr">
                                    <a href="#">立即注册</a>
                                  </li>
                               </ul>
                           </div>
                       </div>
                   </el-col>
                </el-row>
              </div>
          </main>
          <footer >
            <div class="wrapper">
               <div class="links">
                 <a href="#">联系我们</a>|
                 <a href="#">人才招聘</a>|
                 <a href="#">商家入驻</a>|
                 <a href="#">广告服务</a>|
                 <a href="#">鲜致社区</a>|
                 <a href="#">友情链接</a>
               </div>
               <div class="copyright">
                  Copyright&nbsp;&copy;&nbsp;2004-2018&nbsp;&nbsp;xianzhi365.com&nbsp;版权所有
               </div>
            </div>
          </footer>
   </div>

</template>
<script>
export default {
  name:"login",
}
</script>
<style lang="less">
    .login{
      .wrapper{
        width: 1000px;
      }
      .header{
        background-color: white;
        padding: 20px 0;
      }
      .main{
         background-color: #c91a21;
         position: relative;
         .wrapper{
            background: url(../../static/img/bg-login.jpg) no-repeat;
         }
        
         
        .banner{
            position: relative;
            top: 63px;
            left: 100px;
            color: #ffffff;
          }
        .login-form{
            margin-top: 20px;
            margin-bottom: 50px;
            padding: 50px 30px 10px;
            width: 300px;
            background-color: #fff;//rgb(238, 233, 194);
            border-radius: 4px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,.1); 
            .login-title{
              height: 54px;
              line-height: 37px;
              font-size: 18px;
              font-family: "microsoft yahei";
              text-align: center;
              display: block;
              font-weight: 600;
              color: #AAA173;
            }
            .el-row{
                  .el-col-4{
                    line-height: 40px;
                    label{
                      font-size: 14px;
                      color: #AAA173;
                      font-weight: 700;
                      line-height: 40px;
                    }
                  }
                  .el-col-20{
                    .el-input--small {
                        .el-input__inner{
                          height: 40px;
                          border: 2px solid #E0D68F;
                          color: #10CE88
                      }
                    }
                  }
                  .password{
                    float: right;
                    a{
                      float: right;
                      color: #9D8E79;
                      font-size: 13px;
                    }
                  }
                  margin-bottom: 20px;
                  input[type="submit"]{
                        width: 100%;
                        border: none;
                        padding: 10px;
                        background: #0AC986;
                        color: white;
                        font-size: 13px;
                        border-radius: 3px;

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
                    color:#666;
                    display: inline-block;
                    position: relative;
                    padding-left: 24px;
                    line-height: 47px;
                    b{
                      width: 19px;
                      height: 18px;
                      display: block;
                      background: url(../../static/img/QQ-weixin.png) no-repeat;
                      margin: 0 auto;
                      position: absolute;
                      float: left;
                      left: 0;
                      top: 16px;
                    }
                    .qq-icon{
                      background-position: 0 0;
                    }
                    .wx-icon{
                      background-position: -20px 0;
                    }
                 }
                 .line{
                    color: #ccc;
                    padding: 0 10px;
                 }
               }
               .extra-fr{
                 float: right;
                 a{
                    color:#666;
                    display: inline-block;
                    position: relative;
                    font-size: 14px;
                    color: #9D8E79;
                    i{
                      color: #9D8E79;
                    }
                 }
               }
            }
        }
      }
      footer{
         padding: 20px;
         text-align: center;
        .wrapper{
          .links{
            font-size: 12px;
            a{
              margin: 0 10px;
              color: #666;
              text-decoration:none;
              &:hover{
              color: #33ca39;
              text-decoration: underline;
            }
            }
          }
          .copyright{
            margin: 10px 0;
            font-size: 12px;
            color: #666;  
          }
        }
      }
    }
</style>
