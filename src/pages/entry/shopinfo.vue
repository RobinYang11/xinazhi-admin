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
                    <el-row :gutter="50">
                        <el-col :span="4"> 商户ID</el-col>
                        <el-col :span="20"> {{basicShopInfoList.id}}</el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 商户名称:</el-col>
                        <el-col :span="20">{{basicShopInfoList.shop_name}} </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 店铺ID</el-col>
                        <el-col :span="20">{{basicShopInfoList.shop_id}} </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 商家ID</el-col>
                        <el-col :span="20">{{basicShopInfoList.seller_id}} </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 合同开始时间</el-col>
                        <el-col :span="20">{{basicShopInfoList.contract_start_time}} </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 合同结束时间</el-col>
                        <el-col :span="20">{{basicShopInfoList.contract_end_time}} </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 状态</el-col>
                        <el-col :span="20">{{basicShopInfoList.shop_status}} </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 地区</el-col>
                        <el-col :span="20">{{basicShopInfoList.shop_area}} </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 地区</el-col>
                        <el-col :span="20">{{basicShopInfoList.shop_area}} </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 登录信息</el-col>
                        <el-col :span="20">{{basicShopInfoList.login_info}} </el-col>
                    </el-row>
                        <el-row :gutter="50">
                        <el-col :span="4"> 登录ip</el-col>
                        <el-col :span="20">{{basicShopInfoList.login_ip}} </el-col>
                    </el-row>
                    <el-row :gutter="50">
                        <el-col :span="4"> 商户服务热线</el-col>
                        <el-col :span="20">{{basicShopInfoList.seller_service_number}} </el-col>
                    </el-row>

                </el-tab-pane>
                <el-tab-pane label="商户发票信息">商户发票信息</el-tab-pane>
                <el-tab-pane label="联系人信息">联系 人信息</el-tab-pane>
                <el-tab-pane label="企业信息">企业信息</el-tab-pane>
                <el-tab-pane label="商户审核状态">商户审核状态</el-tab-pane>
            </el-tabs>
        </div>
    </el-card>

   </div>
</template>
<script>
    export default {
        name:'shopinfo',
        data(){
            return {
                basicShopInfoList:{},
                
            }
        },
        created(){
           this.getShopById();

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
                            margin-bottom: 10px;
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

