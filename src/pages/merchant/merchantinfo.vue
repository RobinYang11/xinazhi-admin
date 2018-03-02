<template>
    <div class="addressmade">
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <h4>商户信息</h4>
                </div>
            </div>
            <div class="panel-body">
                    <el-form ref="form"  label-width="180px">
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-form-item label="名称">
                                    <el-input :value="merchantlist[0].Merchant_name"  :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="店铺ID">
                                    <el-input :value="merchantlist[0].Merchant_id" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                    </el-row>   
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-form-item label="商家ID">
                                    <el-input :value="merchantlist[0].Shop_id" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="合同时间">
                                    <el-input :value="merchantlist[0].Contract_time" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-form-item label="登录信息">
                                    <el-input :value="merchantlist[0].Login_information" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="登录IP地址">
                                    <el-input :value="merchantlist[0].Login_IP_address" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-form-item label="客服热线">
                                    <el-input :value="merchantlist[0].Customer_service" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item>
                            <el-button type="primary" @click="edit">编辑信息</el-button>
                            <el-button @click="ok">确定</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  data:function(){
        return{
            isEdit:true,
            merchantlist:[]
        }
    },
    mounted(){
      this.getlist();
  },
    methods:{
        edit:function(){
            this.isEdit=false;
        },
        ok:function(){
            this.isEdit=true;
        },
        getlist()
        {   
            let _this=this
            this.$http.get('/api/merchant')
                    .then(function (response) {
                        _this.merchantlist=response.data;
                        console.log(response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
            });
        }
    }
}
</script>
<style lang="less" scoped>
    .addressmade{
        .panel{
            .panel-title{
                font-size:17px;
                color: black;
                font-weight: normal;
            }
            .panel-body{  
            }
        }
    }
</style>


