<template>
   <div class="addGoodLabel">
       <el-button type="primary" size="medium" class="fr mb15" @click="zjperson">添加标签</el-button>
       <table class="table">
           <thead>
               <tr>
                   <th width="32">序号</th>
                   <th width="100">权重</th>
                   <th>标签名称</th>
                   <th width="180">操&nbsp作</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="(Label,index) in getAllGoodLabel">
                   <td>{{index+1}}</td>
                   <td>{{Label.priority}}</td>
                   <td>{{Label.goodLabelName}}</td>
                   <td>
                       <el-button type="success" size="mini" @click="xgperson(Label.id,Label.goodLabelName,Label.priority)">修改</el-button>
                       <el-button type="danger" size="mini" @click="scperson(Label.id)">删除</el-button>
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
                              标签名称
                            </el-col>
                            <el-col :span="10">
                                 <el-input v-model="goodLabelName"></el-input>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top:15px">
                            <el-col :span="4" style="line-height:40px;">
                              权重
                            </el-col>
                            <el-col :span="10">
                                <el-select v-model="value" clearable placeholder="请选择" @change="selectGet($event)">
                                    <el-option
                                        v-for="(item,index) in options"
                                        :key="index" 
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
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
                        <el-row>
                            <el-col :span="4" style="line-height:40px; text-align:right;padding-right:10px">
                               标签名称
                            </el-col>
                            <el-col :span="10">
                                 <el-input v-model="LabelName"></el-input>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top:15px; ">
                            <el-col :span="4" style="line-height:40px; text-align:right; padding-right:10px">
                              权重
                            </el-col>
                            <el-col :span="10">
                                <el-select v-model="value" clearable placeholder="请选择" @change="selectGet($event)">
                                    <el-option
                                        v-for="(item,index) in options"
                                        :key="index" 
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
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
      LabelId:"",
      LabelName:"",
      goodLabelName:"",
      goodPriority:0,
      options: [{
      value: '1',
      label: '选项1'
    }, {
      value: '2',
      label: '选项2'
    }, {
      value: '3',
      label: '选项3'
    }, {
      value: '4',
      label: '选项4'
    }, {
      value: '5',
      label: '选项5'
    }],
    value: ''
    };
  },
  methods: {
    selectGet:function(e){
      this.goodPriority=this.value
    },
    xgperson: function(id,name,priority) {
      this.LabelId=id
      this.LabelName=name
      this.goodPriority=priority
      this.xgDialogVisible = true;
      this.message = "修改标签";
    },
    scperson:function(id){
        let param={
            id:id
        }
        this.$store.dispatch("deleteGoodLabel",param);
        setTimeout(()=>
        {
            this.$store.dispatch('getAllGoodLabel')
        },1000)
    },
    zjperson: function() {
      this.centerDialogVisible = true;
      this.message = "添加标签";
    },
    xgSubmit:function(){
        let param={
           id: this.LabelId,
           goodLabelName:this.LabelName,
           priority:this.goodPriority
        };
        this.$store.dispatch("updateGoodLabel",param);
        setTimeout(()=>{
            this.$store.dispatch("getAllGoodLabel")
        },1000);
        this.xgDialogVisible=false;
    },
    zjSubmit:function(){
        let param={
            goodLabelName:this.goodLabelName,
            priority:this.goodPriority
        };
        this.$store.dispatch("addGoodLabel",param);
        setTimeout(()=>{
            this.$store.dispatch("getAllGoodLabel",param)
        },1000);
         this.centerDialogVisible = false;
    }
  },
  created() {
    if (this.getAllGoodLabel.length == 0) {
      this.$store.dispatch("getAllGoodLabel");
    }
  },
  computed: {
    ...mapGetters(["getAllGoodLabel"])
  }
};
</script>
<style lang="less" scoped>
.addGoodLabel {
  .mb15 {
    margin-bottom: 15px;
  }
}
</style>


