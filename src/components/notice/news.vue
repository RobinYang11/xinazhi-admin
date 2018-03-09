<template>
   <div class="news">
        <el-row :gutter="20">
            <el-col :span="24">
                 <table class="table">
                  <thead>
                     <tr>
                         <th>序号</th>
                        <th width="80">新闻资讯ID</th>
                        <th>新闻标题</th>
                        <th>新闻内容</th>
                        <th>更新时间</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i,index) in newdatas.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                      <td>{{index+1}}</td>
                      <td>{{i.id}}</td>
                      <td>{{i.title}}</td>
                      <td>{{i.content}}</td>
                      <td>{{i.create_time}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="5">
                        <div class="block">
                          <el-pagination
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :current-page="currentPage"
                              :page-sizes="[2, 5, 10, 15]"
                              :page-size="pagesize"
                              layout="total, sizes, prev, pager, next, jumper"
                              :total="newdatas.length">
                          </el-pagination>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
               </table>
               <el-button type="primary" class="fr">
                   <router-link to="/main/newsnotice" style="color:#fff"> 增加新闻</router-link>
                </el-button> 
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
       pagesize:2
    }
  },
   created() {
    if (this.newdatas.length == 0) {
      this.$store.dispatch("news");
    }
  },
  computed: {
    ...mapGetters(["newdatas"])
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
.news {
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

