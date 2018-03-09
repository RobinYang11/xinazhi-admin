<template>
    <div class="merchantzt">
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <h4>配送信息</h4>
                </div>
            </div>
            <div class="panel-body">
                <!-- <div class="merchant">
                    <p>
                        <span>配送方式：</span>
                        <span>蜂鸟专送</span>
                    </p>
                    <p>
                        <span>送达时间：</span>
                        <span>尽快送出</span>
                    </p>
                </div>
                <div class="merchant">
                    <p>
                        <span>联系人：</span>
                        <span>张xx(先生)</span>
                    </p>
                    <p>
                        <span>联系电话：</span>
                        <span>183xxx2566</span>
                    </p>
                    <p>
                        <span>收货地址：</span>
                        <span>银川iBi育成中心宁夏回族自治区银川市金凤区宁安大街北段育成中心4007</span>
                    </p>
                </div>
                <div class="merchant">
                    <p>
                        <span>发票信息：</span>
                        <span>无发票</span>
                    </p>
                    <p>
                        <span>备注：</span>
                        <span>新鲜的蔬菜，尽可能快的送达。。。。。。。</span>
                    </p>  
                </div> -->
                <table class="table">
                  <thead>
                     <tr>
                        <th>配送方式</th>
                        <th>送达时间</th>
                        <th>联系人</th>
                        <th>联系电话</th>
                        <th>收货地址</th>
                        <th>发票信息</th>
                        <th>备注</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i,index) in merchantlist.slice((currentPage-1)*pagesize,currentPage*pagesize) ">
                      <td>{{index+1}}</td>
                      <td>{{i.Delivery_time}}</td>
                      <td>{{i.Contacts}}</td>
                      <td>{{i.Contact_number}}</td>
                      <td>{{i.Shipping_address}}}</td>
                      <td>{{i.Invoice_information}}</td>
                      <td>{{i.Distribution_mode}}</td>
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
                              :page-sizes="[2, 10, 25, 50]"
                              :page-size="pagesize"
                              layout="total, sizes, prev, pager, next, jumper"
                              :total="merchantlist.length">
                          </el-pagination>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
               </table>
            </div>
        </div>
    </div>
    
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
        currentPage:1,
        pagesize:2
    };
  },
   created() {
    if (this.merchantlist.length == 0) {
      this.$store.dispatch("merchant");
    }
  },
  computed: {
    ...mapGetters(["merchantlist"])
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
.merchantzt {
  .panel {
    .panel-title {
      font-size: 17px;
      color: black;
      font-weight: normal;
    }
    .panel-body {
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
      .merchant {
        padding: 0 0 12px;
        border-bottom: 1px dashed #eee;
        p {
          display: table;
          margin-bottom: 12px;
          span {
            display: table-cell;
            vertical-align: top;
            line-height: 18px;
            word-break: break-word;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>


