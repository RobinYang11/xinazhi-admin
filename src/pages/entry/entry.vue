<template>
   <div class="entry">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商家入驻</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
               <table class="table">
                  <thead>
                     <tr>
                        <th>序号</th>
                        <th>商户id</th>
                        <th>商户编号</th>
                        <th>商户名称</th>                      
                        <th>区域</th>
                        <th>状态</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i,index) in shopList.slice((currentPage-1)*pagesize,currentPage*pagesize) ">
                      <td>{{index+1}}</td>
                      <td>{{i.id}}</td>
                      <td> <i class="el-icon-time"></i>{{i.seller_id}}</td>
                      <td>
                          <router-link to="/main/shopinfo" class="accunt" >{{i.company_name}}</router-link>
                      </td>
                      <td>{{i.company_registry_address}}</td>
                      <td>
                         <a href="#" style="color:#409EFF">{{i.shop_status}}</a> 
                     </td>
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
                              :total="shopList.length">
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
                currentPage: 1,
                pagesize: 15,
            }
        },
        created() {
                
                if (this.shopList.length == 0) {
                    this.$store.dispatch('shop')
                }
            },
        computed:mapGetters([
                'shopList'
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
            this.pagesize = size;
            },
            handleCurrentChange: function(currentPage) {
            this.currentPage = currentPage;
            },
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
