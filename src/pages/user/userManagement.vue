<template>
   <div class="usermanagerment">
      <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>会员管理</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
               <table class="table">
                  <caption>
                     <el-form :inline="true"  class="demo-form-inline">
                        <el-form-item label="时间">
                           <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" ></el-date-picker>
                        </el-form-item>
                        <el-form-item label="ID">
                          <el-input placeholder="注册ID"></el-input>
                        </el-form-item>
                        <el-form-item label="状态">
                          <el-input placeholder="会员状态"></el-input>
                        </el-form-item>
                        <el-form-item label="手机号码">
                          <el-input placeholder="输入号码"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                      </el-form>
                  </caption>
                  <thead>
                     <tr>
                        <th>序号</th>
                        <th>会员账号</th>
                        <th>会员状态</th>
                        <th>会员名</th>
                        <th width="140">手机号码</th>
                        <th>会员邮箱</th>
                        <th>会员等级</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr  v-for="(i ,index) in userList&&userList.slice((currentPage-1)*pagesize,currentPage*pagesize)">
                      <td>{{index+1}}</td>
                      <td>
                         <router-link to="/main/infomanagement" class="accunt">{{i.basicInfo.accunt}}</router-link>
                      </td>
                      <td>
                            {{i.basicInfo.order}}
                      </td>
                      <td>{{i.basicInfo.name}}</td>
                      <td>{{i.basicInfo.phone}}</td>
                      <td>{{i.basicInfo.email}}</td>
                      <td>{{i.basicInfo.rank}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="7">
                        <div class="block">
                          <el-pagination
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :current-page="currentPage"
                              :page-sizes="[2, 5, 10, 15]"
                              :page-size="pagesize"
                              layout="total, sizes, prev, pager, next, jumper"
                              :total="userList.length">
                          </el-pagination>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
               </table>
            </div>
      </el-card>
   </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "userManagement",
  data() {
    return {
      form: {
        date1: ""
      },
      currentPage:1,
       pagesize:2
    };
  },
  created() {
    if (this.userList.length == 0) {
      this.$store.dispatch("user");
      console.log(userList)
    }
  },
  computed: {
    ...mapGetters(["userList"])
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleSizeChange: function (size) {
          this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
      }
  }
};
</script>
<style lang="less">
.usermanagerment {
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
  }
}
</style>

