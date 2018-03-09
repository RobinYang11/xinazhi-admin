<template>
     <div class="shopeval">
          <el-row :gutter="20" style="margin-bottom:10px;">
          <el-col :span="8">
             <!--搜索开始-->
                <div class="search-attention">
                    <el-input placeholder="请输入商品名称" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <!--搜索结束-->
          </el-col>
          <el-col :span="8">&nbsp</el-col>
          <el-col :span="8">
              <el-button type="primary" size="medium" class="fr" @click="addperson">
                   添加商品
              </el-button>
          </el-col>
        </el-row>
         <table class="table">
                  <thead>
                     <tr>
                        <th>序号</th>
                        <th>评价编号</th>                      
                        <th>评价信息</th>
                        <th>追加评价</th>
                        <th>商品货号</th>
                        <th>图片</th>
                        <th>用户名称</th>
                        <th>用户头像</th>
                        <th>评价等级</th>
                        <th>评价时间</th>
                        <th width="180">操作</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i,index) in shopeval.slice((currentPage-1)*pagesize,currentPage*pagesize) ">
                      <td>{{index+1}}</td>
                      <td>{{i.id}}</td>
                      <td>{{i.shopeval_recovery}}</td>
                      <td>{{i.shopeval_Booking_review}}</td>
                      <td>{{i.shopeval_huohao}}</td>
                      <td>{{i.shopeval_photo}}</td>
                      <td>{{i.shopeval_yh_name}}</td>
                      <td>{{i.shopeval_avater}}</td>
                      <td>{{i.shopeval_dj}}</td>
                      <td>{{i.shopeval_time}}</td>
                      <td>
                          <el-button type="default" size="mini" @click="bjperson">评价修改</el-button>
                          <el-button type="danger" size="mini" @click="deDialogVisible = true">删除评价</el-button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="11">
                        <div class="block">
                          <el-pagination
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :current-page="currentPage"
                              :page-sizes="[10, 15, 25, 50]"
                              :page-size="pagesize"
                              layout="total, sizes, prev, pager, next, jumper"
                              :total="shopeval.length">
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
                                评价信息
                            </el-col>
                            <el-col :span="10">
                                 <el-input  :placeholder="shopeval[0]&&shopeval[0].shopeval_recovery"  ></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                等级
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="shopeval[0]&&shopeval[0].shopeval_dj" ></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="5">
                                评价时间
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="shopeval[0]&&shopeval[0].shopeval_time" ></el-input>
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
      pagesize: 10,
      centerDialogVisible: false,
      deDialogVisible: false,
      message: "编辑活动信息"
    };
  },
  created() {
    if (this.shopeval.length == 0) {
      this.$store.dispatch("shopeval");
    }
  },
  computed: {
    ...mapGetters(["shopeval"])
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
      this.message = "编辑信息";
      this.isedit = false;
    },
    addperson: function() {
      this.centerDialogVisible = true;
      this.message = "增加商品";
      this.isedit = false;
    }
  }
};
</script>
<style lang="less" scoped>
.shopeval {
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
          border: 1px solid #ddd;
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



