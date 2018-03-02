<template>
    <div class="merchant">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商户管理</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
               <table class="table">
                  <thead>
                     <tr>
                        <th>序号</th>
                        <th>商户名称</th>
                        <th>商户信息</th>
                        <th>配送信息</th>
                        <th>送达时间</th>
                        <th>操作</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i,index) in merchantlist">
                      <td>{{index+1}}</td>
                      <td>
                          {{i.Merchant_name}}
                      </td>
                      <td>
                          <router-link to="/main/merchantinfo" class="accunt">{{i.Merchant_info}}</router-link>
                      </td>
                      <td>
                          <router-link to="/main/merchantzt" class="accunt">{{i.Distribution_mode}}</router-link>
                      </td>
                      <td>{{i.Delivery_time}}</td>
                      <td>
                          <el-button type="primary" size="small" @click="addperson">增加</el-button>
                          <el-button type="danger" size="small" @click="deDialogVisible = true">删除</el-button>
                          <el-button type="default" size="small" @click="bjperson">编辑</el-button>
                          <el-button type="warning" size="small" @click="ckperson">冻结</el-button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="6">
                        <div class="block">
                          <el-pagination
                            layout="prev, pager, next"
                            :total="1000">
                          </el-pagination>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
               </table>
               <!--查看弹框S-->
        <el-dialog
                    :title="message"
                    :visible.sync="centerDialogVisible"
                    width="30%"
                    >
                    <div>
                        <el-row>
                            <el-col :span="4">
                                商户名称
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="merchantlist[0].Merchant_name" :disabled="isedit"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                商户信息
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="merchantlist[0].Login_information" :disabled="isedit"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4">
                                手机号码
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="merchantlist[0].Contact_number" :disabled="isedit"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4">
                                送达时间
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="merchantlist[0].Delivery_time" :disabled="isedit"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
        <!--查看弹框E-->
        <!--删除S-->
            <el-dialog
                    title="删除信息"
                    :visible.sync="deDialogVisible"
                    width="30%"
                    >
                    <div>
                       是否确定删除此条信息？
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="deDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="deDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
        <!--删除E-->
            </div>
      </el-card>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      merchantlist: {},
      centerDialogVisible: false,
      message: "增加信息",
      deDialogVisible: false,
      isedit: true
    };
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getlist() {
      let _this = this;
      this.$http
        .get("/api/merchant")
        .then(function(response) {
          _this.merchantlist = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addperson: function() {
      this.centerDialogVisible = true;
      this.message = "增加信息";
      this.isedit = false;
    },
    ckperson: function() {
      this.centerDialogVisible = true;
      this.message = "冻结信息";
      this.isedit = true;
    },
    bjperson: function() {
      this.centerDialogVisible = true;
      this.message = "编辑信息";
      this.isedit = false;
    }
  }
};
</script>

<style lang="less" scoped>
.merchant {
  .box-card {
    .table {
      border-spacing: 0;
      border-collapse: collapse;
      width: 100%;
      max-width: 100%;
      margin-bottom: 20px;
      border: 1px solid #ddd;
      font-size: 14px;
      caption {
        padding: 8px 0;
        .el-form {
          float: left;
          .el-form-item {
            margin-bottom: 10px;
          }
        }
      }
      thead {
        tr {
          th {
            padding: 8px;
            line-height: 1.42857143;
            vertical-align: top;
            border: 1px solid #ddd;
            vertical-align: bottom;
            color: rgb(144, 147, 153);
            font-weight: 500;
          }
        }
      }
      tbody,
      tfoot {
        tr {
          td {
            padding: 8px;
            line-height: 1.42857143;
            border: 1px solid #ddd;
            text-align: center;
            a {
              font-size: 14px;
              color: black;
            }
            .accunt {
              text-decoration: underline;
              color: #aaa173;
            }
          }
        }
      }
    }
    .el-dialog__wrapper {
      .el-dialog {
        .el-dialog__header {
          .el-dialog__title {
          }
        }
        .el-dialog__body {
          .el-row {
            .el-col {
              height: 40px;
              line-height: 40px;
              margin-bottom: 20px;
              .el-button {
                padding: 12px 20px;
                color: #2ec748;
                border-color: #2ec748;
                background-color: #fff;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                &:hover {
                  background-color: #2ec748;
                  color: #fff;
                  span {
                    color: #fff;
                  }
                }
                span {
                  color: #fff;
                }
              }
              .el-button.el-button--danger {
                padding: 12px 20px;
                color: #f56c6c;
                border-color: #f56c6c;
                background-color: #fff;
                &:hover {
                  background-color: #f56c6c;
                  color: #fff;
                  span {
                    color: #fff;
                  }
                }
                span {
                  color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

