<template>
    <div style="width:100%">

      <el-container>
        <el-aside width="120px">
            <div class="content">
              <div class="img">
                <img src="../assets/timg.jpg"  alt="个人头像">
              </div> 
              <div class="nav-list">
                <ul>
                  <li>
                    <router-link to="/main/total"><i class="el-icon-news"></i>销售统计</router-link>
                  </li>
                  <li>
                    <router-link to="/main/entry"><i class="el-icon-sold-out"></i>商家入驻</router-link>
                  </li>
                  <li>
                    <a href="#"><i class="el-icon-setting"></i>系统管理</a>
                  </li>
                  <li>
                    <a href="#"><i class="el-icon-location"></i>会员管理</a>
                  </li>
                   <li>
                    <a href="#"><i class="el-icon-printer"></i>商户管理</a>
                  </li>
                   <li>
                    <a href="#"><i class="el-icon-tickets"></i>订单管理</a>
                  </li>
                   <li>
                    <a href="#"><i class="el-icon-edit-outline"></i>评价管理</a>
                  </li>
                  <li>
                    <a href="#"><i class="el-icon-service"></i>客户服务</a>
                  </li>
                   <li>
                    <a href="#"><i class="el-icon-message"></i>消息推送</a>
                  </li>
                   <li>
                    <a href="#"><i class="el-icon-bell"></i>通知公告</a>
                  </li>
                   <li>
                    <a href="#"><i class="el-icon-menu"></i>商品管理</a>
                  </li>
                   <li>
                    <a href="#"><i class="el-icon-share"></i>活动广告</a>
                  </li>
                </ul>
              </div>
            </div>
        </el-aside>
        <el-container>
          <el-header  style="height: 40px;"> 
            <el-row>
              <el-col :span="16" style="color:white">
              &nbsp
              </el-col>
               <el-col :span="8">
                  <ul class="fr">
                    <li>个人中心</li>
                    <li>消息提示</li>
                    <li>账户信息</li>
                  </ul>
              </el-col>
            </el-row>
            </el-header>
          <el-main>
               <div style="margin-bottom:10px;">
                 <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                  </el-breadcrumb>
               </div>
              <el-row :gutter="10">
                 <el-col :class="styleo">
                    <router-view></router-view>&nbsp
                 </el-col>
                 <el-col :class="stylet">
                     <el-card class="box-card sold-count">
                      <div slot="header" class="clearfix">
                          <span :class="styletr">鲜致开发任务进展图</span>
                          <el-button v-on:click='dolt' style="float: right; padding: 3px 0" type="text">{{btntext}}</el-button>
                      </div>
                      <div :class="styletr">
                           <ul>
                             <li v-for="i in progress">
                                <h4>{{i.name}}</h4>
                                <button :class="i.color">{{i.inchargor}}</button>
                                <el-progress :text-inside="true"  :status="i.exception" :percentage="i.percentage"></el-progress>
                             </li>
                           </ul>
                      </div>
                  </el-card>
                 </el-col>
              </el-row>

          </el-main>
        </el-container>
      </el-container>
    </div>
</template>
<script>
import leftNav from "@/components/leftNav";
export default {
  name: "mainContainer",
  data:function(){
    return{
      ishundrend:true,
      styleo:"el-col-18",
      stylet:"el-col-6",
      styletr:"block",
      btntext:"关闭对话框",
      isclass:false,
      progress:[
        {
          name:"前端架构",
          percentage:88,
          inchargor:"杨国平",
          color:"button-success",
          exception:"success"
        },
         {
          name:"移动端前端架构",
          percentage:46,
          inchargor:"张广之",
          color:"button-orange",
          exception:"exception"
        },
          {
          name:"鲜致总后台原型",
          percentage:22,
          inchargor:"沈佳琪",
          color:"button-warning",
          exception:""
        }
      ]
    }
  },
  components: {
    leftNav
  },
  methods: {
    //收起侧边导航事件
    collapseLeftNav(e) {
      e.preventDefault();
      console.log("collapse");
    },
    //展开侧边导航事件
    showLeftNav(e) {
      e.preventDefault();
    },
    dolt:function(){    
      this.isclass=!this.isclass;
      if(this.isclass){
        this.styleo='el-col-22';
        this.stylet='el-col-2';
        this.styletr='none'
      }else{
        this.styleo='el-col-18';
        this.stylet='el-col-6';
        this.styletr='block'
      }    
      if(this.stylet=="el-col-6"){
        this.btntext="关闭对话框"
      }else{
        this.btntext="打开对话框"
      }
    }
  }
};
</script>
<style lang="less" scoped>
.el-container {
  .el-container {
    .el-main {
      width: 100%;
      .el-row{
        .el-col-18{
          width: 75%;
        }
        .el-col-6{
          width: 25%;
        }
        .el-col-22{
          width: 91.66667%;
        }
        .el-col-2{
          width: 8.33333%;
        }
        .el-col{
          .el-card{
            .block{
              display: inline-block;
              width: 80%;
            }
            .none{
              display: none;
            }
          }
          ul{
            h4{
              margin-bottom: 10px;
            }
            .el-progress{
              margin: 8px 0;
            }
            button{
              display: inline-block;
              padding: 5px 15px;
              border: none;
              color: #fff;
            }
            .button-success{
              background: #2ec748;
              border: none;
            }
            .button-orange{
              background: #993300;
            }
            .button-warning{
              background:#e6a23c;
            }
          }
        }
      }
    }
    .el-header {
      width: 100%;
      box-shadow: 0 2px 20px 0 rgba(15, 12, 70, 0.1);
      background-color:#47c1a8;
   
     
      .el-row {
        .el-col {
          line-height: 40px;
        }
      }
      ul > li {
        float: left;
        list-style: none;
        margin: 0 10px;
        font-size: 12px;
       
        color:white;
        &:hover {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  .el-aside {
    .content {
      background-color: #222430;
      position: fixed;
      width: 120px;
      height: 100%;
      .img {
        text-align: center;
        img {
          width: 33%;
          border-radius: 50%;
          border: 2px solid #2b7f7f;
          border-radius: 50%;
          padding: 2px;
          margin: 20px auto;
        }
      }
      .nav-list {
        display: inline-block;
        width: 100%;
        position: absolute;
        top: 80px;
        bottom: 80px;

        ul {
          display: inline-block;
          width: 100%;
          height: 100%;

          li {
            text-align: left;
            :hover {
              color: white;
            }
            a {
              font-weight: 600;
              display: block;
              padding: 8px 15px;
              color: #989898;
              font-size: 14px;
              i {
                margin-right: 10px;
              }
            }
            .router-link-active{
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>


