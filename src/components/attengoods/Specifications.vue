<template>
   <div class="Specifications">
       <el-button type="primary" size="medium" class="fr mb15" @click="zjperson">添加规格</el-button>
       <table class="table">
           <thead>
               <tr>
                   <th width="32">序号</th>
                   <th width="100">规格id</th>
                   <th>规格名称</th>
                   <th width="100">操&nbsp作</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="(until,index) in getALLGoodUnit">
                   <td>{{index+1}}</td>
                   <td>{{until.goodUnitId}}</td>
                   <td>{{until.goodUnitName}}</td>
                   <td>
                       <el-button type="success" size="mini" @click="xgperson(until.goodUnitId,until.goodUnitName)">修改</el-button>
                       <!-- <el-button type="danger" size="mini" @click="dleperson">删除</el-button> -->
                   </td>
               </tr>
           </tbody>
       </table>
       <!--添加弹框S-->
               <el-dialog
                    :title="message"
                    :visible.sync="centerDialogVisible"
                    width="30%"
                    >
                    <div>
                        <el-row>
                            <el-col :span="4" style="line-height:40px;">
                               {{message}}
                            </el-col>
                            <el-col :span="10">
                                 <el-input v-model="goodUnit"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="zjSubmit()">确 定</el-button>
                    </span>
                </el-dialog>
        <!--添加弹框E-->
          <!--修改弹框S-->
               <el-dialog
                    :title="message"
                    :visible.sync="xgDialogVisible"
                    width="30%"
                    >
                    <div>
                        <el-row style="margin-top:20px;">
                            <el-col :span="5" style="line-height:40px;">
                               {{message}}
                            </el-col>
                            <el-col :span="10">
                                 <el-input v-model="unitName"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="xgDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="xgSubmit()">确 定</el-button>
                    </span>
                </el-dialog>
        <!--修改弹框E-->
   </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      message: "",
      xgDialogVisible: false,
      centerDialogVisible: false,
      deDialogVisible: false,
      unitId:"",
      unitName:"",
      goodUnit:""
    };
  },
  methods: {
    xgperson: function(id,name) {
      this.unitId=id
      this.unitName=name
      this.xgDialogVisible = true;
      this.message = "修改商品单位";
    },
    zjperson: function() {
      this.centerDialogVisible = true;
      this.message = "增加商品单位";
    },
    xgSubmit:function(){
        let param={
           id: this.unitId,
           goodUnitName:this.unitName
        };
        this.$store.dispatch("updateGoodUnitById",param);
        setTimeout(()=>{
            this.$store.dispatch("getAllGoodUnit")
        },1000);
        this.xgDialogVisible=false;
    },
    zjSubmit:function(){
        let param={
            goodUnitName:this.goodUnit
        };
        this.$store.dispatch("addGoodUtil",param);
        setTimeout(()=>{
            this.$store.dispatch("getAllGoodUnit",param)
        },1000);
         this.centerDialogVisible = false;
    }
  },
  created() {
    if (this.getALLGoodUnit.length == 0) {
      this.$store.dispatch("getAllGoodUnit");
    }
  },
  computed: {
    ...mapGetters(["getALLGoodUnit"])
  }
};
</script>
<style lang="less" scoped>
.Specifications {
  .mb15 {
    margin-bottom: 15px;
  }
}
</style>


