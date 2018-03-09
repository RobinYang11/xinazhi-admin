<template>
   <div class="flmanger">
        <el-row :gutter="20">
            <el-col :span="24">
                 <table class="table">
                  <thead>
                     <tr>
                        <th width="140">分类ID</th>
                        <th>分类名称</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in datas">
                      <td>{{i.id}}</td>
                      <td>{{i.classify}}</td>
                    </tr>
                  </tbody>
               </table>
               <el-button type="primary" class="fr"  @click="DialogVisible = true"><i class="el-icon-plus" style="margin-right:5px;"></i>增加分类</el-button>
               <!--查看弹框S-->
               <el-dialog
                    title=""
                    :visible.sync="DialogVisible"
                    width="30%"
                    >
                    <div>
                        <el-row>
                            <el-col :span="4">
                                分类名称
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="datas[0]&&datas[0].classify" ></el-input>
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
    if (this.datas.length == 0) {
      this.$store.dispatch("docclass");
    }
  },
  computed: {
    ...mapGetters(["datas"])
  },
};
</script>

<style lang="less" scoped>
.flmanger {
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

