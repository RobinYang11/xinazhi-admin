<template>
   <div class="userzsgc">
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
                    <th>操作</th>
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
                <td>
                    <el-button type="text" size="small" @click="ckperson">查看</el-button>
                    <el-button type="text" size="small" @click="bjperson">编辑</el-button>
                    <el-button type="text" size="small" @click="deDialogVisible = true">删除</el-button>
                </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colspan="5">
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
                                ID
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="managementList.user_id" :disabled="isedit"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                会员状态
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="managementList.order" :disabled="isedit"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                注册时间
                            </el-col>
                            <el-col :span="10">
                                 <el-date-picker type="date" :placeholder="managementList.register_time" v-model="form.date1" :disabled="isedit"></el-date-picker>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4">
                                手机号
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="managementList.phone" :disabled="isedit"></el-input>
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
                       是否确定删除此会员？
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="deDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="deDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
        <!--删除E-->
        <el-button @click="addperson">增加会员</el-button> 
   </div>
</template>
<script>
export default {
  name: "userManagement",
  data() {
    return {
      form: {
        date1: ""
      },
      managementList: [],
      centerDialogVisible: false,
      deDialogVisible: false,
      message:"编辑信息",
      isedit:true
    };
  },
  mounted() {
    this.getinfo();
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
     click:function()
        {
          this.isShowLogin=!this.isShowLogin;
          if(this.isShowLogin)
           {
               this.clickName="取消"
           }
           else
           {
               this.clickName="添加更多"
           }  
        },
        addperson:function()
        {
            this.centerDialogVisible=true;
            this.message="增加会员";
            this.isedit=false
        },
        ckperson:function()
        {
            this.centerDialogVisible=true;
            this.message="查看会员信息";
            this.isedit=true
        },
         bjperson:function()
        {
            this.centerDialogVisible=true;
            this.message="编辑会员信息";
            this.isedit=false
        },
    getinfo() {
      let _this = this;
      this.$http
        .get("/api/users")
        .then(function(response) {
          _this.managementList = response.data[0].basicInfo;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less">
.userzsgc {
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

