<template>
    <div class="specification">
        <el-row :gutter="10">
            <el-col :span="col_left">
                <el-button @click="addBak" v-show="isHidden" type="primary" style="margin:11px auto 0; display:block;">添加规格</el-button>
                <el-row :gutter="15" v-show="!isHidden">
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
            <el-row :gutter="15" v-show="!isHidden">
                <el-col :span="4" class="aling_right">
                    描述
                </el-col>
                <el-col :span="20">
                    <el-input type="textarea" v-model="specBak"></el-input>
                </el-col>  
            </el-row>
            <el-row :gutter="20" v-show="!isHidden">    
                <el-col :span="12" :offset="6">
                    <div style="margin:0 auto; width:160px;">
                        <el-button @click="submitSpec" type="success">确定</el-button>
                        <el-button type="danger" @click="qxBak">取消</el-button>
                    </div>
                </el-col>
            </el-row> 
            </el-col>
            <el-col :span="col_right">
                <table class="table" style="margin-top:11px;">
                    <thead>
                        <tr>
                            <th width="60">名称</th>
                            <th width="100">价格</th>
                            <th>描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in list">
                            <td>{{item.name}}</td>
                            <td>{{item.price}}</td>
                            <td>{{item.bak}}</td>
                        </tr>
                    </tbody>
                </table>
            </el-col>
        </el-row>  
    </div>
</template>

<script>
export default {
  data:function(){
      return{
          isHidden:false,
          specName:"",
          specPrice:"",
          specBak:"",
          col_left:12,
          col_right:12,
          list:[]
      }
  },
  methods:{
      submitSpec(){
          this.isHidden=true
          this.col_left=4
          this.col_right=20
          let goodSizeBean={
              GoodId:parseInt(window.localStorage.getItem("newGood")),
              goodSize:this.specName,
              goodSizePrice:this.specPrice,
              goodSizeBak:this.specBak
          }
          this.$store.dispatch("addGoodSize",goodSizeBean);
        let obj={}
        obj.name=this.specName
        obj.price=this.specPrice
        obj.bak=this.specBak
        this.list.push(obj)
      },
      addBak(){
          this.isHidden=false
          this.col_left=12
          this.col_right=12
      },
      qxBak(){
          this.isHidden=true
          this.col_left=4
          this.col_right=20
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
               .el-textarea__inner{
                   height:340px
               }
           }
           .aling_right{
               text-align: right;
           }
       }
   }
</style>


