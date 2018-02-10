<template>
    <div class="baseinfo">
        <el-form ref="form"  label-width="180px">
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="商户ID">
                        <el-input :value="baseinfo.id" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10">
                   <el-form-item label="商户名称">
                        <el-input :value="baseinfo.shop_name" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row>
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="店铺ID">
                        <el-input :value="baseinfo.shop_id" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10">
                   <el-form-item label="商家ID">
                        <el-input :value="baseinfo.seller_id" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row>
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="合同开始时间">
                        <el-input :value="baseinfo.contract_start_time" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10">
                   <el-form-item label="合同结束时间">
                        <el-input :value="baseinfo.contract_end_time" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row> 
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="状态">
                        <el-input :value="baseinfo.shop_status" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10"> 
                  <el-form-item label="地区">
                        <el-input :value="baseinfo.shop_area" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row>
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="地区">
                        <el-input :value="baseinfo.shop_area" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10"> 
                  <el-form-item label="登录信息">
                        <el-input :value="baseinfo.login_info" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row> 
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="登录ip">
                        <el-input :value="baseinfo.login_ip" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10"> 
                  <el-form-item label="商户服务热线">
                        <el-input :value="baseinfo.seller_service_number" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row>  
          <el-form-item>
                <el-button type="primary" @click="edit">编辑信息</el-button>
                <el-button @click="ok">确定</el-button>
          </el-form-item>
      </el-form>
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

