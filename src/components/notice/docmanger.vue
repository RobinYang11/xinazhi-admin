<template>
   <div class="docmanger">
        <el-row :gutter="20" style="margin-bottom:10px;">
          <el-col :span="8">
             <!--搜索开始-->
                <div class="search-attention">
                    <el-input placeholder="请输入文档名称" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <!--搜索结束-->
          </el-col>
          <el-col :span="8">&nbsp</el-col>
          <el-col :span="8">
              <el-button type="primary" class="fr">
                   <router-link to="/main/docmanclass" style="color:#fff"> 增加文档</router-link>
              </el-button>
          </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="24"> 
                 <table class="table">
                  <thead>
                     <tr>
                        <th width="80">文档ID</th>
                        <th>内容支持</th>
                        <th>文档标题</th>
                        <th>文档类型</th>
                        <th>更新时间</th>
                        <th>内容</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in docdatas.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                      <td>{{i.id}}</td>
                      <td>{{i.content_type}}</td>
                      <td>{{i.title}}</td>
                      <td>{{i.class_name}}</td>
                      <td>{{i.last_edit_time}}</td>
                      <td>{{i.content}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="6">
                        <div class="block">
                          <el-pagination
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :current-page="currentPage"
                              :page-sizes="[10, 15, 25, 50]"
                              :page-size="pagesize"
                              layout="total, sizes, prev, pager, next, jumper"
                              :total="docdatas.length">
                          </el-pagination>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
               </table>
            </el-col>
        </el-row>  
   </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
       currentPage:1,
       pagesize:10
    }
  },
   created() {
    if (this.docdatas.length == 0) {
      this.$store.dispatch("docs");
    }
  },
  computed: {
    ...mapGetters(["docdatas"])
  },
  methods: {
      handleSizeChange: function (size) {
          this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
      }
  }
};
</script>

<style lang="less" scoped>
.fr{float: right;}
.docmanger {
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

