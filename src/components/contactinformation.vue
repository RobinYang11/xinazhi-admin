<template>
    <div class="contactinformation">
        <el-form ref="form"  label-width="180px"> 
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="姓名">
                        <el-input :value="contact.registor_name" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10">
                   <el-form-item label="联系人信息">
                        <el-input :value="contact.registor_tel" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row>
          <el-row :gutter="20">
              <el-col :span="10">
                   <el-form-item label="省份城市">
                        <el-input :value="contact.shop_name" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
              <el-col :span="10">
                   <el-form-item label="详细地址">
                        <el-input :value="contact.registor_address_detail" :disabled="isEdit"></el-input>
                    </el-form-item>
              </el-col>
          </el-row>  
          <el-form-item>
                <el-button type="primary" @click="isedit">编辑信息</el-button>
                <el-button @click="isok">确定</el-button>
          </el-form-item>
      </el-form>
    </div>
</template>
<script>
export default {
  name:"contactinformation",
  props:['contact'],
  data:function(){
      return{
          isEdit:true
      }
  },
  methods:{
      isedit:function(){
          this.isEdit=false
      },
      isok:function(){
          this.isEdit=true
      }
  }
}
</script>

