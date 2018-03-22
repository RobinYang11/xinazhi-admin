<template>
   <div class="addGoodUtil">
       <el-button type="primary" size="medium" class="fr mb15" @click="zjperson">添加商品单位</el-button>
       <table class="table">
           <thead>
               <tr>
                   <th width="32">序号</th>
                   <th>序号id</th>
                   <th>单位</th>
                   <th width="180">操作</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="(until,index) in getALLGoodUnit">
                   <td>{{index+1}}</td>
                   <td>{{until.goodUnitId}}</td>
                   <td>{{until.goodUnitName}}</td>
                   <td>
                       <el-button type="default" size="mini" @click="xgperson">修改</el-button>
                       <el-button type="danger" size="mini" @click="dleperson">删除</el-button>
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
                                 <el-input ></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="centerDialogVisible=false">确 定</el-button>
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
                        <el-row :gutter="15">
                            <el-col :span="5" style="line-height:40px;">
                               商品单位ID
                            </el-col>
                            <el-col :span="10">
                                 <el-input ></el-input>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top:20px;">
                            <el-col :span="5" style="line-height:40px;">
                               {{message}}
                            </el-col>
                            <el-col :span="10">
                                 <el-input ></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="xgDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="xgDialogVisible=false">确 定</el-button>
                    </span>
                </el-dialog>
        <!--修改弹框E-->
          <!--删除S-->
            <el-dialog
                    :title="message"
                    :visible.sync="deDialogVisible"
                    width="30%"
                    >
                    <div>
                       是否确定删除此单位？
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="deDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="deDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
        <!--删除E-->
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
      deDialogVisible: false
    };
  },
  methods: {
    xgperson: function() {
      this.xgDialogVisible = true;
      this.message = "修改商品单位";
    },
    zjperson: function() {
      this.centerDialogVisible = true;
      this.message = "增加商品单位";
    },
    dleperson: function() {
      this.deDialogVisible = true;
      this.message = "删除单位";
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
.addGoodUtil {
  .mb15 {
    margin-bottom: 15px;
  }
}
</style>


