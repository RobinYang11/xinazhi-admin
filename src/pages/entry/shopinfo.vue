<template>
   <div class="shopinfo">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>商户信息</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div >
            <el-tabs tab-position='left' style="height:auto;">
                <el-tab-pane class="basic_info" label="基本信息">
                    <baseinfo :baseinfo="shopList[2]"></baseinfo>
                </el-tab-pane>
                <el-tab-pane label="商户发票信息">
                    <Commercial :shop="shopList[2]"></Commercial>
                </el-tab-pane>
                <el-tab-pane label="联系人信息">
                    <contactinformation :contact="shopList[2]"></contactinformation>
                </el-tab-pane>
                <el-tab-pane label="企业信息">
                    <Enterprise :enterprice="shopList[2]"></Enterprise>
                </el-tab-pane>
                <el-tab-pane label="商户审核状态">
                    
                    <div style="height:150px;line-height:150px;">
                        <div v-if="shopStatus" style="color:green">
                          <h4>恭喜你审核通过，欢迎你入驻鲜致！</h4>
                        </div>
                        <div v-else style="color:red">
                            <h4>对不起,审核未通过！{{shopList[2]&&shopList[2].status_des }}</h4>
                        </div>
                    </div>
                  
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-card>

   </div>
</template>
<script>
import baseinfo from "../../components/baseinfo";
import Commercial from "../../components/Commercial";
import contactinformation from "../../components/contactinformation";
import Enterprise from "../../components/Enterprise";
import { mapGetters } from "vuex";
export default {
  name: "shopinfo",
  data() {
    return {
      basicShopInfoList: {},
      isPassed: ""
    };
  },
  /*axios+vuex*/
  created() {
    if (this.shopList.length == 0) {
      this.$store.dispatch("shop");
    }
  },
  computed: {
    ...mapGetters(["shopList"]),
    shopStatus() {
      // console.log(this.shopList[2].shop_status)
      // debugger
      return false;
    }
  },
  /*axios+vuex*/
  methods: {},
  components: {
    baseinfo,
    Commercial,
    contactinformation,
    Enterprise
  }
};
</script>
<style lang="less" scoped>
.shopinfo {
  .box-card {
    div:nth-child(2) {
      .el-tabs >  {
        .basic_info {
          font-size: 14px;
          color: gray;
          .el-row {
            padding: 12px 0px;
            border-bottom: 1px solid #e8e8e8;
            .el-col-4 {
              text-align: right;
            }
          }
        }
      }
    }
  }
}
</style>

