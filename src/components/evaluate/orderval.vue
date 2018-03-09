<template>
     <div class="orderval">
          <el-row :gutter="20" style="margin-bottom:10px;">
          <el-col :span="8">
             <!--搜索开始-->
                <div class="search-attention">
                    <el-input placeholder="请输入订单名称" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <!--搜索结束-->
          </el-col>
          <el-col :span="8">&nbsp</el-col>
          <el-col :span="8" style="text-align:right">
              <el-button type="primary" size="medium" @click="addperson">
                   添加订单
              </el-button>
          </el-col>
        </el-row>
         <table class="table">
                  <thead>
                     <tr>
                        <th>序号</th>
                        <th>订单id</th>
                        <th>订单名称</th>
                        <th>订单评价</th>
                        <th>订单回复</th>
                        <th>追加评价</th>
                        <th>评价显示</th>
                        <th width="180">操作</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i,index) in orderval.slice((currentPage-1)*pagesize,currentPage*pagesize) ">
                      <td>{{index+1}}</td>
                      <td>{{i.id}}</td>
                      <td>{{i.order_name}}</td>
                      <td>{{i.Order_evaluation}}</td>
                      <td>{{i.Order_recovery}}</td>
                      <td>{{i.Order_Booking_review}}</td>
                      <td>{{i.Order_Display}}</td>
                      <td>
                          <el-button type="default" size="mini" @click="bjperson">评价修改</el-button>
                          <el-button type="danger" size="mini" @click="deDialogVisible = true">删除评价</el-button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="8">
                        <div class="block">
                          <el-pagination
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :current-page="currentPage"
                              :page-sizes="[5, 10, 25, 50]"
                              :page-size="pagesize"
                              layout="total, sizes, prev, pager, next, jumper"
                              :total="orderval.length">
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
                            <el-col :span="5">
                                订单评价
                            </el-col>
                            <el-col :span="10">
                                 <el-input  :placeholder="orderval[0]&&orderval[0].Order_evaluation"  ></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                订单回复
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="orderval[0]&&orderval[0].Order_recovery" ></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                评价显示
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="orderval[0]&&orderval[0].Order_Display" ></el-input>
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
                    title="评价取消"
                    :visible.sync="deDialogVisible"
                    width="30%"
                    >
                    <div>
                       是否确定取消此评价？
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="deDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="deDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
        <!--删除E-->
     </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      currentPage: 1,
      pagesize: 5,
      centerDialogVisible: false,
      deDialogVisible: false,
      message: "编辑评价信息"
    };
  },
  created() {
    if (this.orderval.length == 0) {
      this.$store.dispatch("orderval");
    }
  },
  computed: {
    ...mapGetters(["orderval"])
  },
  methods: {
    handleSizeChange: function(size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
    },
    bjperson: function() {
      this.centerDialogVisible = true;
      this.message = "编辑评价信息";
      this.isedit = false;
    },
    addperson: function() {
      this.centerDialogVisible = true;
      this.message = "增加评价信息";
      this.isedit = false;
    }
  }
};
</script>
<style lang="less" scoped>
.orderval {
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
</style>



