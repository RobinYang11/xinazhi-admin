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
                    <a href="#"><i class="el-icon-sold-out"></i>商家入驻</a>
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
          <el-header style="height: 40px;"> 
            <el-row>
              <el-col :span="16" style="color:white">
              /
              </el-col>
               <el-col :span="8">
                  <ul>
                    <li>个人中心</li>
                    <li>消息提示</li>
                    <li>账户信息</li>
                  </ul>
              </el-col>
            </el-row>
            </el-header>
          <el-main>
              <el-row gutter="10">
                 <el-col :span="18">
                    <router-view></router-view>
                 </el-col>
                 <el-col :span="6">
                     <el-card class="box-card sold-count">
                      <div slot="header" class="clearfix">
                          <span>用户信息列表</span>
                          <el-button style="float: right; padding: 3px 0" type="text">关闭对话</el-button>
                      </div>
                      <div>
                          <div id="myChart" :style="{width: '400px', height: '300px'}"></div>
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
    }
  }
};
</script>
<style lang="less" scoped>
.el-container {
  .el-container {
    .el-main {
      width: 100%;
    }
    .el-header {
      width: 100%;
      box-shadow: 0 2px 20px 0 rgba(15, 12, 70, 0.1);
      background-color: white;
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
        font-weight: 600;
        color: rgba(0, 0, 0, 0.55);
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
          }
        }
      }
    }
  }
}
</style>


