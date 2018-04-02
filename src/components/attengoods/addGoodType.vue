<template>
    <div class="addGoodType">
        <el-button type="primary" size="medium" class="fr mb15" @click="zjperson">
            添加商品分类
        </el-button>
        <table class="table">
            <thead>
                <tr>
                    <th width="32">序号</th>
                    <th>分类id</th>
                    <th>分类名</th>
                    <th width="100">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(type,index) in GoodTypeList">
                    <td>{{index+1}}</td>
                    <td>{{type.goodsTypeId}}</td>
                    <td>
                        {{type.goodsTypeName}}
                    </td>
                    <td>
                        <el-button type="success" size="mini" @click="xgperson(type.goodsTypeId,type.goodsTypeName)">修&nbsp&nbsp改</el-button>
                        <!-- <el-button type="danger" size="mini" @click="dleperson(type.goodsTypeId)">删除</el-button> -->
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
                                 <el-input v-model="goodType" ></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="typeSubmit">确 定</el-button>
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
                               分类名称
                            </el-col>
                            <el-col :span="10">
                                 <el-input v-model="goodTypeName" ></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="xgDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="typeNameSubmit()">确 定</el-button>
                    </span>
                </el-dialog>
        <!--修改弹框E-->
          <!--删除S-->
            <!-- <el-dialog
                    :title="message"
                    :visible.sync="deDialogVisible"
                    width="30%"
                    >
                    <div>
                       是否确定删除此分类？
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="deDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="deleteSubmit">确 定</el-button>
                    </span>
                </el-dialog> -->
        <!--删除E-->
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data: function() {
    return {
      centerDialogVisible: false,
      xgDialogVisible: false,
      deDialogVisible: false,
      message: "",
      goodType: "",
      goodTypeName: "",
      goodTypeId: 0
    };
  },
  created() {
    if (this.GoodTypeList.length == 0) {
      this.$store.dispatch("getAllGoodType");
    }
  },
  computed: {
    ...mapGetters(["GoodTypeList"])
  },
  methods: {
    xgperson: function(id,name) {
        this.goodTypeId=id
        this.goodTypeName=name
        this.xgDialogVisible = true;
    },
    zjperson: function() {
      this.centerDialogVisible = true;
      this.message = "添加商品分类";
    },
    // dleperson: function(id) {
    //   this.message = "删除分类";
    //   this.goodTypeId=id
    //   this.deDialogVisible = true;
    // },
    typeSubmit() {
      let param = {
        goodTypeName: this.goodType
      };
      this.$store.dispatch("addGoodType", param);
      setTimeout(() => {
        console.log("helo");
        this.$store.dispatch("getAllGoodType");
      }, 1000);

      this.centerDialogVisible = false;
    },
    typeNameSubmit() {
      let param = {
        goodTypeName: this.goodTypeName,
        id: this.goodTypeId
      };
      this.$store.dispatch("updateGoodType", param);
      setTimeout(() => {
        this.$store.dispatch("getAllGoodType");
      }, 1000);
      this.xgDialogVisible = false;
    },
    // deleteSubmit(){
    //     let param={
    //         id:this.goodTypeId
    //     }
    //     this.$store.dispatch("deleteGoodTypeById",param)
    //      setTimeout(() => {
    //     this.$store.dispatch("getAllGoodType");
    //   }, 1000);
    //   this.deDialogVisible = false;
    // }
  }
};
</script>

<style lang="less" scoped>
.addGoodType {
  .el-button.mb15 {
    margin-bottom: 15px;
  }
}
</style>

