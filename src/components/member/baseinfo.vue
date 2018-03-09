<template>
    <div class="addressmade">
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <h4>基本信息</h4>
                </div>
            </div>
            <div class="panel-body">
                    <el-form ref="form"  label-width="180px">
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-form-item label="账户名">
                                    <el-input :value="baseinfo&&baseinfo.name" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="会员所在地址">
                                    <el-input :value="baseinfo&&baseinfo.address" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                    </el-row>   
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-form-item label="手机号">
                                    <el-input :value="baseinfo&&baseinfo.phone" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="会员邮箱">
                                    <el-input :value="baseinfo&&baseinfo.email" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-form-item label="性别">
                                    <el-input :value="baseinfo&&baseinfo.sex" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="年龄">
                                    <el-input :value="baseinfo&&baseinfo.age" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="10">
                            <el-form-item label="密码修改">
                                    <el-input :value="baseinfo&&baseinfo.password" :disabled="isEdit"></el-input>
                                </el-form-item>
                        </el-col>
                        <el-col :span="10">
                            <el-form-item label="其他基本信息">
                                    <el-input :value="baseinfo&&baseinfo.name" :disabled="isEdit"></el-input>
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
  props:['baseinfo'],
  data:function(){
        return{
            isEdit:true,
        }
    },
    methods:{
        edit:function(){
            this.isEdit=false;
        },
        ok:function(){
            this.isEdit=true;
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


