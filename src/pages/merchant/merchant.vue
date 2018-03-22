<template>
   <div class="entry">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商户管理</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
              <el-form :inline="true"  class="demo-form-inline">
                        <el-form-item>
                          <el-input placeholder="输入商户名称或商户区域"></el-input>
                        </el-form-item>
                        <el-form-item>
                          <el-button type="primary" @click="onSubmit">查询</el-button>
                        </el-form-item>
                      </el-form>
               <table class="table">
                  <thead>
                     <tr>
                        <th>序号</th>
                        <th>商户id</th>
                        <th>商户名称</th>
                        <th>商户区域</th>                      
                        <th>商户拥有者</th>
                        <th>商户类型</th>
                        <th>商铺状态描述</th>
                        <th>商户注册时间</th>
                        <th>上线时间</th>
                        <th>租用时间</th>
                        <th>商户状态</th>
                        <th>描述</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i,index) in shopList">
                      <td>{{index+1}}</td>
                      <td>{{i.shopId}}</td>
                      <td>{{i.shopName}}</td>
                      <td>
                          shopArea
                      </td>
                      <td>
                          <router-link to="/main/shopinfo" class="accunt" >shopOwner</router-link>
                       </td>
                      <td>
                         <a href="#" style="color:#409EFF">{{i.shopType}}</a> 
                     </td>
                     <td>{{i.shopDesc}}</td>
                     <td>{{i.shopRegisterTime}}</td>
                     <td>{{i.shopOnlineTime}}</td>
                     <td>{{i.shopRentTime}}</td>
                     <td>{{i.shopStatus}}</td>
                     <td>{{i.shopStatusDesc}}</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="12">
                        <div class="block">
                          <el-pagination
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :current-page="param.page"
                              :page-sizes="[10, 15, 25, 50]"
                              :page-size="param.offset"
                              layout="total, sizes, prev, pager, next, jumper"
                              :total="shopTotal">
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
    import { mapGetters } from 'vuex'
    export default {
        name:"entry",
        data(){
            return {
               param:{
                    "page": 1,
                    "offset": 10
                } 
            }
        },
        created() {
                if (this.shopList.length == 0) {
                    this.$store.dispatch('getShopByPage',{"page":(this.param.page-1)*this.param.offset,"offset":this.param.offset})
                }
                if(this.shopTotal==null){
                  this.$store.dispatch('getTotalShopSize')
                }
                this.change()
            },
        computed:mapGetters([
                'shopList','shopTotal'
            ]),
        methods:{
            filterTag(value, row) {
                return row.shop_status === value;
            },
            filterHandler(value, row, column)
            {
                const property = column['property'];
                return row[property] === value;
            },
             handleSizeChange: function(size) {
            this.param.offset = size;
            this.change()
            },
            handleCurrentChange: function(currentPage) {
            this.param.page = currentPage;
            this.change()
            },
            change: function(){
               this.$store.dispatch('getShopByPage',{"page":(this.param.page-1)*this.param.offset,"offset":this.param.offset})
            }
        }
    }
</script>

<style lang="less" scoped>
    .entry{
        .box-card{
            .el-table{
                a{
                    font-size: 14px;
                    color:black;
                }
            }
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
           background-color: rgb(246, 246, 246);
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
        }
    }
</style>
