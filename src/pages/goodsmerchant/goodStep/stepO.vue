<template>
    <div class="goodBasic">
           <div class="panel">
                <div class="panel-body">
                    <el-form ref="form" label-width="80px">
                        <el-form-item label="商品名称" required>
                            <el-input v-model="goods.goodName" @blur="changeName" :class="{isOpacity}"></el-input>
                            <div class="el-form-item__error" :class="{isOpacity}">
                                请输入商品名称
                            </div>
                        </el-form-item>
                         <el-form-item label="别名">
                            <el-input v-model="goods.goodOtherName"></el-input>
                        </el-form-item>
                        <el-form-item label="商品编码" required>
                            <el-input v-model="goods.goodNumber" @blur="changeNumber" :class="{isNumber}"></el-input>
                            <div class="el-form-item__error" :class="{isNumber}">
                                请输入商品编码
                            </div>
                        </el-form-item>
                        <el-form-item label="存货编码" required>
                            <el-input v-model="goods.goodSortNum"  @blur="changeSortNum" :class="{isSortNum}"></el-input>
                             <div class="el-form-item__error" :class="{isSortNum}">
                                请输入存货编码
                            </div>
                        </el-form-item>
                        <el-form-item label="单位">
                           <el-select v-model="goods.unit" placeholder="请选择" >
                                <el-option
                                    v-for="(until,index) in getALLGoodUnit"
                                    :key="index" 
                                    :label="until.goodUnitName"
                                    :value="until.goodUnitId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="商品类别">
                            <el-select v-model="goods.goodType" placeholder="请选择" @change="change">
                                <el-option
                                    v-for="(type,index) in GoodTypeList"
                                    :key="index" 
                                    :label="type.goodsTypeName"
                                    :value="type.goodsTypeId">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="商品产地">
                            <el-input v-model="goods.goodGrowPlace"></el-input>
                        </el-form-item>
                        <el-form-item label="制造商">
                            <el-input v-model="goods.goodManufacture"></el-input>
                        </el-form-item>
                        <el-form-item label="价格" required>
                            <el-input v-model="goods.goodPrice" @blur="changePrice" :class="{isPrice}" class="label_left"></el-input>
                            <span class="label_right">千克/元</span>
                            <div class="el-form-item__error" :class="{isPrice}">
                                价格不能为空必须为数字
                            </div>
                        </el-form-item>
                        <el-form-item label="折扣">
                            <el-input v-model="goods.goodDiscount" @blur="changeDiscount" :class="{isDiscount}" ></el-input>
                            <div class="el-form-item__error" :class="{isDiscount}">
                                折扣不能为空并且只能在0-10之间
                            </div>
                        </el-form-item>
                        <el-form-item label="有效期">
                            <el-input v-model="goods.goodValidityPeriod" class="label_left"></el-input>
                            <span class="label_right">月</span>
                        </el-form-item>
                        <el-form-item label="商品状态">
                            <el-input v-model="goods.goodStatus"></el-input>
                        </el-form-item>
                        <el-form-item label="商品成分" >
                            <el-input v-model="goods.goodMaterial"></el-input>
                        </el-form-item>
                        <el-form-item label="存储方式">
                            <el-input v-model="goods.goodSortMethod"></el-input>
                        </el-form-item>
                        <el-form-item label="商品运输">
                            <el-input v-model="goods.goodSecurityAuth"></el-input>
                        </el-form-item>
                        <el-form-item label="最新消息">
                            <el-input v-model="goods.goodRemark"></el-input>
                        </el-form-item>
                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="goods.goodBak"></el-input>
                        </el-form-item>
                        <el-form-item label="品牌">
                            <el-input v-model="goods.goodBrand"></el-input>
                        </el-form-item>
                        <el-form-item label="生产厂家">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="安全认证">
                            <el-input></el-input>
                        </el-form-item>
                        <!-- <el-form-item style="width:100%">
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item> -->
                </el-form>
            </div>
         </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    props:["message"],
  data() {
    return {
      form: {
          type:[],
          radio:"",
          isBlue:false,
      },
      isOpacity:false,
      isNumber:false,
      isSortNum:false,
      isPrice:false,
      isDiscount:false,
      goods:{
          	goodId:1,
            goodType:1,
            goodShop:1,
            goodUnit:1,
            goodName:"",
            goodOtherName:"",
            goodPrice:0.0,
            goodDiscount:"",
            goodStatus:"",
            goodBrand:"",
            goodRemark:"",
            goodValidityPeriod:0,
            goodGrowPlace:"",
            goodManufacture:"",
            goodBak:"",
            goodMaterial:"",
            goodSortMethod:"",
            goodNumber:"",
            goodSecurityAuth:"",
            goodSortNum:"",
      },
      kkk:"千克1",
      isTrue:false,
      isHidden:false,
      specName:"",
      specPrice:"",
      list:[
          
      ],  
      dialogVisible: false
    };
  },
   created() {
    if (this.GoodTypeList.length == 0) {
      this.$store.dispatch("getAllGoodType");
    }
     if (this.getALLGoodUnit.length == 0) {
      this.$store.dispatch("getAllGoodUnit");
    }
  },
  computed: {
    ...mapGetters(["GoodTypeList","getALLGoodUnit"])
  },
  methods: {
    onSubmit() {
      console.log("submit!");
      this.goods.goodPrice=parseFloat(this.goods.goodPrice)
      this.goods.goodDiscount=parseFloat(this.goods.goodDiscount)
      let goods=this.goods;
      this.$store.dispatch("addGood",goods);
      if(window.localStorage.getItem("newGood")){
        //   this.$store.state.activeName="three" 
        this.$emit("propName","second")
      }else{
          alert("数据请求错误")
      }
       
    },
    tjSpe:function(){
        this.isTrue=true
    },
    qxSpe:function(){
        this.isTrue=false
    },
    qdSpe:function(){
        let obj={};
        obj.name=this.specName
        obj.price=this.specPrice
        this.list.push(obj)
        this.isHidden=true
        this.isTrue=false
    },
    change:function(){
        alert(this.goods.goodType)
        alert(/e/.test("this.base"))//正则表达式test判断
        alert(/v/.exec("valibale vvppsd"))
    },
    changeName:function(){
        if(this.goods.goodName==""){
            this.isOpacity=true
        }else{
            this.isOpacity=false
        }
    },
    changeNumber:function(){
         if(this.goods.goodNumber==""){
            this.isNumber=true
        }else{
            this.isNumber=false
        }
    },
    changeSortNum:function(){
        if(this.goods.goodSortNum==""){
            this.isSortNum=true
        }else{
            this.isSortNum=false
        }
    },
    changePrice:function(){
        if(this.goods.goodPrice==""||isNaN(this.goods.goodPrice)==true){
            this.isPrice=true
        }else{
            this.isPrice=false
        }
    },
    changeDiscount:function(){
        if(this.goods.goodDiscount==""||isNaN(this.goods.goodDiscount)==true|| (/^(0\.\d{1,2}|[1-9](\.\d{1,2})?)$/).test(this.goods.goodDiscount)==false){
            this.isDiscount=true
        }else{
            this.isDiscount=false
        }
    }
  },
};
</script>
<style lang="less">
    .goodBasic{
        width:100%;
        background: #fff;
        .panel{
            .panel-body{
                padding:0;
                .el-form{ 
                     .el-form-item {
                        margin-bottom: 22px;
                        width: 40%;
                        float: left;
                        margin: 10px 5%;  
                        .upload{
                            padding: 6px 12px;
                            height: 24px;
                            line-height: 24px;
                            position: relative;
                            border: 1px solid rgb(153, 153, 153);
                            text-decoration: none;
                            color: #666;

                            input{
                                position: absolute;
                                overflow: hidden;
                                right: 0;
                                top: 0;
                                opacity: 0;
                                width:100%;
                            }
                        } 
                        .span{
                            font-size: 14px;
                            color:#2ec748;
                            overflow: hidden;
                            text-overflow: ellipsis; 
                        } 
                        .label_left.el-input{
                            width:60%;
                            float: left;
                        }
                        .label_right{
                            width:40%;
                            float:left;
                            box-sizing: border-box;
                            padding-left:10px;
                        }
                        .el-form-item__error{
                            opacity: 0;
                        }
                        .el-form-item__error.isOpacity,.el-form-item__error.isNumber,.el-form-item__error.isSortNum,.el-form-item__error.isPrice,.el-form-item__error.isDiscount{
                            opacity: 1;
                        }
                        .isOpacity .el-input__inner,.isNumber .el-input__inner,.isSortNum .el-input__inner,.isPrice .el-input__inner,.isDiscount .el-input__inner {
                            border-color: #f56c6c;
                        }
                        .el-textarea__inner{
                            height:100px;
                        }
                    }
                }   
                .el-form::after{
                        content: "";
                        display:block;
                        height:0;
                        clear:both;
                    } 
            }
        }
    }
</style>


