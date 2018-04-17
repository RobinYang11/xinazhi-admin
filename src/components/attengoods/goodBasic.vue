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
                            <el-input v-model="goods.goodDiscount"></el-input>
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
                        <el-form-item label="规格">
                            <el-row v-show="!isTrue">
                                <el-button @click="tjSpe" type="primary">添加规格</el-button>
                            </el-row>
                            <el-row v-show="isTrue" style="margin-bottom:15px;">
                                <el-col :span="5">
                                    规格名称
                                </el-col>
                                <el-col :span="6">
                                    <el-input v-model="specName"></el-input>
                                </el-col>
                                <el-col :span="1">&nbsp</el-col>
                                <el-col :span="5">
                                    规格价格
                                </el-col>
                                <el-col :span="6">
                                    <el-input v-model="specPrice"></el-input>
                                </el-col>  
                            </el-row>
                            <el-row v-show="isTrue" style="margin-bottom:15px;">
                                <el-col :span="7">&nbsp</el-col>
                                <el-col :span="3">
                                    <el-button @click="qdSpe" type="success">确定</el-button>
                                </el-col>
                                <el-col :span="2">&nbsp</el-col>
                                <el-col :span="3">
                                    <el-button @click="qxSpe" type="danger">取消</el-button>
                                </el-col>
                            </el-row>
                            <table class="table" v-show="isHidden" style="margin-top:10px; margin-bottom:0;">
                                <thead>
                                    <tr>
                                        <th>规格名称</th>
                                        <th>规格价格</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="i in list">
                                        <td>{{i.name}}</td>
                                        <td>{{i.price}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </el-form-item>
                        <el-form-item label="生产厂家">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="品牌">
                            <el-input v-model="goods.goodBrand"></el-input>
                        </el-form-item>
                        <el-form-item label="安全认证">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="食用方式">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="存储方式">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="拆分方式">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="驰名商标">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="有效期">
                            <el-col :span="11">
                                <el-input></el-input>
                            </el-col>
                            <el-col :span="2">
                                天
                            </el-col>
                        </el-form-item>
                        <el-form-item label="产地">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="积分比例">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="销售单位">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="销售提点">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="主要配料">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="即时配送">
                            <el-switch v-model="form.isBlue"></el-switch>
                        </el-form-item>
                        <el-form-item label="所属餐厅类型">
                            <el-checkbox-group v-model="form.type">
                                <el-checkbox :label="kkk" name="type1"></el-checkbox>
                                <el-checkbox label="机关单位" name="type"></el-checkbox>
                                <el-checkbox label="大型餐厅" name="type"></el-checkbox>
                                <el-checkbox label="学校餐厅" name="type"></el-checkbox>
                                <el-checkbox label="街道餐馆" name="type"></el-checkbox>
                                <el-checkbox label="员工食堂" name="type"></el-checkbox>
                                <el-checkbox label="路边摊烧烤类" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="标签">
                            <el-radio-group v-model="form.radio">
                                <el-radio label="进口型"></el-radio>
                                <el-radio label="自产地"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="活动形式">
                            <el-input type="textarea"></el-input>
                        </el-form-item>
                        <el-form-item style="width:100%">
                            <el-button type="primary" @click="onSubmit">立即创建</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
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
                        .el-form-item__error.isOpacity,.el-form-item__error.isNumber,.el-form-item__error.isSortNum,.el-form-item__error.isPrice{
                            opacity: 1;
                        }
                        .isOpacity .el-input__inner,.isNumber .el-input__inner,.isSortNum .el-input__inner,.isPrice .el-input__inner{
                            border-color: #f56c6c;
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


