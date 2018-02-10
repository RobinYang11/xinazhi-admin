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
                    <baseinfo :baseinfo="basicShopInfoList"></baseinfo>
                </el-tab-pane>
                <el-tab-pane label="商户发票信息">
                    <Commercial :shop="basicShopInfoList"></Commercial>
                </el-tab-pane>
                <el-tab-pane label="联系人信息">
                    <contactinformation :contact="basicShopInfoList"></contactinformation>
                </el-tab-pane>
                <el-tab-pane label="企业信息">
                    <Enterprise :enterprice="basicShopInfoList"></Enterprise>
                </el-tab-pane>
                <el-tab-pane label="商户审核状态">
                     
                    <el-alert v-if="shop_status=='未审核'"
                        :title="'审核未通过,'+basicShopInfoList.status_des"
                        type="error">
                    </el-alert>
                    <el-alert
                        title="审核通过"
                        type="success">
                    </el-alert>
                  
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-card>

   </div>
</template>
<script>
import baseinfo from  '../../components/baseinfo'
import Commercial from '../../components/Commercial'
import contactinformation from '../../components/contactinformation'
import Enterprise from '../../components/Enterprise'
    export default {
        name:'shopinfo',
        data(){
            return {
                basicShopInfoList:{},
                isPassed:"",
                shop_status:"未审核"
                
            }
        },
        mounted(){
           this.getShopById();

        },
        components:{
         
        },

        methods:{
            getShopById()
            {   
                let _this=this
             
                this.$http.get('/api/shop')
                        .then(function (response) {
                            _this.basicShopInfoList=response.data[2]
                            console.log( _this.basicShopInfoList);
                            // debugger
                            console.log("helo")
                        })
                        .catch(function (error) {
                            console.log(error);
                });
            }
        },
        components:{
            baseinfo,Commercial,contactinformation,Enterprise
        }
    }
</script>
<style lang="less" scoped>
    .shopinfo{
        .box-card{
            div:nth-child(2){
                .el-tabs>{
                    .basic_info{
                        font-size: 14px;
                        color:gray;
                       .el-row{
                            padding: 12px 0px;
                            border-bottom: 1px solid #e8e8e8;
                            .el-col-4{
                                text-align: right;
                                
                            }
                           
                       }
                    }
                }
            }
        }
    }
</style>

