<template>
   <div class="Commercial">
      <el-form ref="form"  label-width="180px">
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="单位名称">
                        <el-input :value="shop&&shop.company_name" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10">
                   <el-form-item label="公司注册地址">
                        <el-input :value="shop&&shop.registor_address_detail" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row>
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="纳税人识别号">
                        <el-input :value="shop&&shop.taxpayer_identification_number" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10">
                   <el-form-item label="开户银行">
                        <el-input :value="shop&&shop.bank" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row>
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="单位名称">
                        <el-input :value="shop&&shop.company_name" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10">
                   <el-form-item label="银行账号">
                        <el-input :value="shop&&shop.bank_name" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row> 
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="注册电话">
                        <el-input :value="shop&&shop.registor_tel" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10"> 
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
    name:'Commercial',
    props:['shop'],
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
    .Commercial{

    }
</style>


