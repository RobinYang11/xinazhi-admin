<template>
    <div class="specification">
        <el-row :gutter="15">
            <el-col :span="4" class="aling_right">
                规格名称
            </el-col>
            <el-col :span="8">
                <el-input v-model="specName"></el-input>
            </el-col>
            <el-col :span="4" class="aling_right">
                规格价格
            </el-col>
            <el-col :span="8">
                <el-input v-model="specPrice"></el-input>
            </el-col>  
        </el-row>
        <el-row :gutter="15">
            <el-col :span="4" class="aling_right">
                描述
            </el-col>
            <el-col :span="20">
                <el-input type="textarea" v-model="specBak"></el-input>
            </el-col>  
        </el-row>
        <el-row :gutter="20">    
            <el-col :span="12" :offset="6">
                <div style="margin:0 auto; width:160px;">
                    <el-button @click="submitSpec" type="success">确定</el-button>
                    <el-button type="danger">取消</el-button>
                </div>
            </el-col>
        </el-row> 
    </div>
</template>

<script>
export default {
  data:function(){
      return{
          specName:"",
          specPrice:"",
          specBak:""
      }
  },
  methods:{
      submitSpec(){
          let goodSizeBean={
              GoodId:parseInt(window.localStorage.getItem("newGood")),
              goodSize:this.specName,
              goodSizePrice:this.specPrice,
              goodSizeBak:this.specBak
          }
          this.$store.dispatch("addGoodSize",goodSizeBean);
      }
  }
}
</script>
<style lang="less">
   .specification{
       .el-row{
           margin-bottom:15px;
           margin-top:10px;
           .el-col{
               line-height:40px;
           }
           .aling_right{
               text-align: right;
           }
       }
   }
</style>


