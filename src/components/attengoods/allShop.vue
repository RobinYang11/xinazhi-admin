<template>
     <div class="Commodity">
          <el-row :gutter="20" style="margin-bottom:10px;">
          <el-col :span="8">
             <!--搜索开始-->
                <div class="search-attention">
                    <el-input placeholder="请输入商品名称或别名" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
                <!--搜索结束-->
          </el-col>
          <el-col :span="8">&nbsp</el-col>
          <el-col :span="8">
              <el-button type="primary" size="medium" class="fr" @click="addperson">
                   增加商品
              </el-button>
          </el-col>
        </el-row>
         <table class="table">
                  <thead>
                     <tr>
                        <th>序号</th>
                        <th>id</th>
                        <th>类型</th>
                        <th>店铺</th>
                        <th>名称</th>
                        <th>别名</th>
                        <th>单位</th>
                        <th>价格</th>
                        <th>折扣</th>
                        <th>状态</th>
                        <th>品牌</th>
                        <th>评论</th>
                        <th>有效期限</th>
                        <th>生产地</th>
                        <th>制造</th>
                        <th width="180">操作</th>
                     </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(i,index) in Commodity">
                      <td>{{index+1}}</td>
                      <td>{{i.goodId}}</td>
                      <td>{{i.goodType}}</td>
                      <td>{{i.goodShop}}</td>
                      <td>{{i.goodName}}</td>
                      <td>{{i.goodOtherName}}</td>
                      <td>{{i.goodUnit}}</td>
                      <td>{{i.goodPrice}}</td>
                      <td>{{i.goodDiscount}}</td>
                      <td>{{i.goodStatus}}</td>
                      <td>{{i.goodBrand}}</td>
                      <td>{{i.goodRemark}}</td>
                      <td>{{i.goodValidityPeriod}}</td>
                      <td>{{i.goodGrowPlace}}</td>
                      <td>{{i.goodManufacture}}</td>
                      <td>
                          <el-button type="default" size="mini" @click="bjperson">编辑</el-button>
                    <el-button type="danger" size="mini" @click="deDialogVisible = true">强制下架</el-button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="16">
                        <div class="block">
                          <el-pagination
                              @size-change="handleSizeChange"
                              @current-change="handleCurrentChange"
                              :current-page="page"
                              :page-sizes="[10, 15, 25, 50]"
                              :page-size="offset"
                              layout="total, sizes, prev, pager, next, jumper"
                              :total="goodsTotal">
                          </el-pagination>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
               </table>
               <!--编辑信息S-->
        <el-dialog
                    :title="message"
                    :visible.sync="centerDialogVisible"
                    width="30%"
                    >
                    <div>
                        <el-row>
                            <el-col :span="4">
                                商品店铺
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="Commodity[0]&&Commodity[0].goodType" ></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                商品店铺
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="Commodity[0]&&Commodity[0].goodShop" ></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                商品名称
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="Commodity[0]&&Commodity[0].goodName" ></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                商品别名
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="Commodity[0]&&Commodity[0].goodOtherName" ></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                商品单位
                            </el-col>
                            <el-col :span="10">
                                 <el-input :placeholder="Commodity[0]&&Commodity[0].goodUnit" ></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                商品价格
                            </el-col>
                            <el-col :span="10">
                                 <el-input  :placeholder="Commodity[0]&&Commodity[0].goodPrice"  ></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4">
                                商品折扣
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="Commodity[0]&&Commodity[0].goodDiscount" ></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4">
                                商品状态
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="Commodity[0]&&Commodity[0].goodStatus" ></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4">
                                商品评论
                            </el-col>
                            <el-col :span="10">
                                <el-input :placeholder="Commodity[0]&&Commodity[0].goodRemark" ></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
        <!--编辑信息E-->
        <!--删除S-->
            <el-dialog
                    title="下架商品"
                    :visible.sync="deDialogVisible"
                    width="30%"
                    >
                    <div>
                       是否确定下架此类商品？
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="deDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="deDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
        <!--删除E-->
     </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      page: 1,
      offset: 10,
      centerDialogVisible: false,
      deDialogVisible: false,
      message: "编辑信息"
    };
  },
  created() {
    if (this.Commodity.length == 0) {
      this.$store.dispatch("getGoodSByPage",{"page":(this.page-1)*this.offset,"offset":this.offset});
    }
    if(this.goodsTotal==null){
      this.$store.dispatch("getTotalGoodSize")
    }
    this.change()
  },
  computed: {
    ...mapGetters(["Commodity","goodsTotal"])
  },
  methods: {
    handleSizeChange: function(size) {
      this.offset = size;
      this.change()
    },
    handleCurrentChange: function(currentPage) {
      this.page = currentPage;
      this.change()
    },
    change:function(){
       this.$store.dispatch("getGoodSByPage",{"page":(this.page-1)*this.offset,"offset":this.offset});
    },
    bjperson: function() {
      this.centerDialogVisible = true;
      this.message = "编辑商品信息";
    },
    addperson: function() {
      this.$router.push({path:'/main/addGood'})
    }
  }
};
</script>
<style lang="less" scoped>
.fr{ float:right;}
.Commodity {
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



