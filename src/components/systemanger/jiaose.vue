<template>
   <div class="jiaose">
        <el-row :gutter="20">
            <el-col :span="24">
                 <table class="table">
                  <caption>
                      <el-button type="primary" class="fr"  @click="DialogVisible = true">添加用户</el-button>
                  </caption>
                  <thead>
                     <tr>
                        <th>角色ID</th>
                        <th>角色名</th>
                        <th>角色权限</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in adminrole">
                      <td>{{i.id}}</td>
                      <td>{{i.role_cname}}</td>
                      <td>{{i.permission[0]}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="3">
                        <div class="block">
                          <el-pagination
                            layout="prev, pager, next"
                            :total="100">
                          </el-pagination>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
               </table>
               <!--查看弹框S-->
               <el-dialog
                    title="添加用户"
                    :visible.sync="DialogVisible"
                    width="40%"
                    >
                    <div>
                        <el-row>
                            <el-col :span="4">
                                角色名
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="adminrole[0]&&adminrole[0].role_cname"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                角色权限
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="adminrole[0]&&adminrole[0].permission[1]" ></el-input>
                            </el-col>
                        </el-row> 
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="DialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="DialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
        <!--查看弹框E-->
            </el-col>
        </el-row>  
   </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
        DialogVisible:false
    }
  },
   created() {
    if (this.adminrole.length == 0) {
      this.$store.dispatch("adminrole");
    }
  },
  computed: {
    ...mapGetters(["adminrole"])
  },
};
</script>

<style lang="less" scoped>
.jiaose {
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
          vertical-align: top;
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

