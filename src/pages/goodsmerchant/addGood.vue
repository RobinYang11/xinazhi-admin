<template>
    <div class="addGood">
         <div class="panel">
            <div class="panel-body" style=" background:#fff; padding: 15px;">
                    <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="商品名称" required>
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="商品类别">
                        <el-select placeholder="请选择类别">
                            <el-option label=""></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品编码" required>
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="存货编码">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="单位">
                        <el-select v-model="form.region" placeholder="请选择单位">
                        <el-option label="千克"></el-option>
                        <el-option label="斤"></el-option>
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
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="有效期" required>
                        <el-col :span="11">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item> -->
                    <el-form-item label="所属餐厅类型">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox :label="kkk" name="type"></el-checkbox>
                            <el-checkbox label="机关单位" name="type"></el-checkbox>
                            <el-checkbox label="大型餐厅" name="type"></el-checkbox>
                            <el-checkbox label="学校餐厅" name="type"></el-checkbox>
                            <el-checkbox label="街道餐馆" name="type"></el-checkbox>
                            <el-checkbox label="员工食堂" name="type"></el-checkbox>
                            <el-checkbox label="路边摊烧烤类" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="即时配送">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="标签">
                        <el-radio-group v-model="form.resource">
                        <el-radio label="进口型"></el-radio>
                        <el-radio label="自产地"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="简介" style="width:90%">
                        <quillEditor></quillEditor>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
         </div>
    </div>
</template>
<script>
import quillEditor from "../../components/quillEditor"
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      kkk:"千克1",
      isTrue:false,
      isHidden:false,
      specName:"",
      specPrice:"",
      list:[
          
      ],
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
    }
  },
  components:{
      quillEditor
  }
};
</script>
<style lang="less" scoped>
    .addGood{
        width:100%;
        background: #fff;
        .panel{
            .panel-body{
                .el-form{ 
                     .el-form-item {
                        margin-bottom: 22px;
                        width: 40%;
                        float: left;
                        margin: 10px 5%;
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

