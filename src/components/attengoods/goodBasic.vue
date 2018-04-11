<template>
    <div class="goodBasic">
           <div class="panel">
                <div class="panel-body">
                    <el-form ref="form" label-width="80px">
                        <el-form-item label="商品名称" required>
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="商品类别">
                            <el-select v-model="value" placeholder="请选择" @change="change">
                                <el-option
                                    v-for="(item,index) in options"
                                    :key="index" 
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="商品编码" required>
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="存货编码">
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="单位">
                           <el-select v-model="valueo" placeholder="请选择" >
                                <el-option
                                    v-for="(item,index) in unit"
                                    :key="index" 
                                    :value="item.value">
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
                            <el-input></el-input>
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
                        <el-form-item label="驰名商标" required>
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="有效期" required>
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
                        <el-form-item label="备注">
                            <el-input type="textarea" ></el-input>
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
                        <el-form-item label="即时配送">
                            <el-switch></el-switch>
                        </el-form-item>
                        <el-form-item label="标签">
                            <el-radio-group >
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
export default {
  data() {
    return {
      form: {
      
      },
       options: [{
        value: '奶制品',
        }, {
        value: '水果类',
        }, {
        value: '肉制品',
        }, {
        value: '豆类',
        }, {
        value: '粮油',
        }],
        unit:[
            {
                value:'千克'
            },{
                value:'毫升'
            }
        ],
        valueo:'',
        value: '',
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
  methods: {
    onSubmit() {
      console.log("submit!");
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
        alert(this.value)
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


