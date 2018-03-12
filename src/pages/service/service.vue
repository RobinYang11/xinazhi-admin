<template>
    <div class="service">
        <!--常见问题-->
        <div class="panel">
            <div class="panel-body">
               <h1>常见问题</h1>
               <div class="clear-float">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="img">
                                <i class="el-icon-time"></i>
                            </div>
                            <h2>催单问题</h2>
                            <ul>
                                <li>
                                    <a href="#">怎么催单？</a>
                                </li>
                                <li>
                                    <a href="#">我的订单超时了怎么办？</a>
                                </li>
                                <li>
                                    <a href="#">怎么联系商家？</a>
                                </li>
                                <li>
                                    <a href="#">怎么联系骑手？</a>
                                </li>
                            </ul>
                        </el-col>
                        <el-col :span="6">
                            <div class="img">
                                <i class="el-icon-document"></i>
                            </div>
                            <h2>退单问题</h2>
                            <ul>
                                <li>
                                    <a href="#">怎么申请第二次取消订单？</a>
                                </li>
                                <li>
                                    <a href="#">商家拒绝退单怎么办？</a>
                                </li>
                                <li>
                                    <a href="#">怎么退单？</a>
                                </li>       
                            </ul>
                        </el-col>
                        <el-col :span="6">
                            <div class="img">
                                <i class="el-icon-date"></i>
                            </div>
                            <h2>活动问题</h2>
                            <ul>
                                <li>
                                    <a href="#">新用户优惠使用要求是什么？</a>
                                </li>
                                <li>
                                    <a href="#">我的优惠券为什么用不了？</a>
                                </li>
                                <li>
                                    <a href="#">我的优惠券不能用怎么办？</a>
                                </li>       
                            </ul>
                        </el-col>
                        <el-col :span="6">
                            <div class="img">
                                <i class="el-icon-edit-outline"></i>
                            </div>
                            <h2>我要投诉</h2>
                            <ul>
                                <li>
                                    <a href="#">我收到的生鲜不卫生怎么办？</a>
                                </li>
                                <li>
                                    <a href="#">错送漏送菜品怎么办？</a>
                                </li>
                                <li>
                                    <a href="#">我要投诉卖家/配送方</a>
                                </li>       
                            </ul>
                        </el-col>
                    </el-row>
               </div>
            </div>
        </div>
        <!--常见问题-->
        <!--联系客服-->
        <div class="panel">
            <div class="panel-body">
                <h1>联系客服</h1>
                <div class="clear-float">
                    <el-row :gutter="20">
                        <el-col :span="8">
                            <el-row :gutter="15">
                                <el-col :span="5">
                                    <div class="img">
                                        <i class="el-icon-service"></i>
                                    </div>
                                </el-col>
                                <el-col :span="12" class="fl">
                                    <h3>7x24 专业在线咨询</h3>
                                    <p>小e期待为您解决遇到的问题</p>
                                </el-col>
                                <el-col :span="7">
                                     <el-button type="primary">立即咨询</el-button>
                                </el-col>
                            </el-row>
                        </el-col>

                        <el-col :span="4">&nbsp</el-col>
                        <el-col :span="12" class="line">
                            <el-row :gutter="15">
                                <el-col :span="3">
                                    <div class="img">
                                        <i class="el-icon-phone" style="color:rgb(0,217,98)"></i>
                                    </div>
                                </el-col>
                                <el-col :span="21" class="fl">
                                    <h3>服务热线0957-2356</h3>
                                    <p>24小时服务</p>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <!--联系客服-->
    </div>
</template>


<style lang="less" scoped>
.service {
  .panel {
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .panel > .panel-header {
    padding: 10px 15px;
    border-bottom: 1px solid transparent;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .panel > .panel-header > .panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
    border-bottom: 2px solid #e4e7ed;
    padding: 0 10px 10px 15px;
  }
  .panel > .panel-body {
    padding: 15px;
  }
  .panel {
    .panel-body {
      h1 {
        padding: 0 35px;
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-bottom: 40px;
      }
      .clear-float {
        padding: 0 0 0 65px;
        margin-bottom: 20px;
        font-size: 14px;
        color: #666;
        .el-col {
          .img {
            width: 54px;
            height: 54px;
            background-size: contain;
            display: inline-block;
            text-align: left;
            i {
              font-size: 55px;
              color: #409eff;
            }
          }
          h3 {
            font-size: 16px;
            margin-bottom: 15px;
            color: #666;
          }
          p {
            color: #999;
            font-size: 14px;
            font-weight: lighter;
          }
          h2 {
            margin: 20px 0 30px;
            color: #666;
            font-weight: 500;
            font-size: 16px;
            width: 100%;
          }
          ul {
            display: inline-block;
            li {
              margin-bottom: 15px;
              line-height: 1;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              a {
                color: #666;
                &:hover {
                  color: #409eff;
                }
              }
            }
          }
        }
        .line {
          border-left: 1px solid #ddd;
          margin-left: -1px !important;
        }
      }
    }
  }
}
</style>
