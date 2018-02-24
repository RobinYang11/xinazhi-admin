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
                        <th>ID</th>
                        <th>状态</th>
                        <th>注册时间</th>
                        <th width="140">手机号码</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                         {{managementList.user_id}}
                      </td>
                      <td>
                        <router-link to="/main/infomanagement">{{managementList.order}}</router-link>
                      </td>
                      <td>{{managementList.register_time}}</td>
                      <td>{{managementList.phone}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="4">
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
            </div>
      </el-card>
   </div>
</template>
<script>
export default {
  name:"userManagement",
   data() {
      return {
        form:{
          date1:''
        },
        managementList:[]
      }
    },
    mounted(){
      this.getinfo();
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      getinfo()
            {   
                let _this=this
                this.$http.get('/api/users')
                        .then(function (response) {
                            _this.managementList=response.data[0].basicInfo
                        })
                        .catch(function (error) {
                            console.log(error);
                });
            }
    }
}
</script>
<style lang="less">
  .usermanagerment{
    .box-card{
      .table{
        border-spacing: 0;
        border-collapse: collapse;
        width: 100%;
        max-width: 100%;
        margin-bottom: 20px;
        border: 1px solid #ddd;
        font-size: 14px;
        caption{
          padding: 8px 0;
          .el-form{
            float: left;
            .el-form-item {
              margin-bottom: 10px;
            }
          }
        }
        thead{
          tr{
            th{
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
        tbody,tfoot{
          tr{
            td{
              padding: 8px;
              line-height: 1.42857143;
              vertical-align: top;
              border: 1px solid #ddd;
              text-align: center;
              a{
                font-size: 14px;
                color: black;
              }
            }
          }
        }
      }
    }
  }
</style>

