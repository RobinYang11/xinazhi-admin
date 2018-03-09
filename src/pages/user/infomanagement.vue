<template>
   <div class="shopinfo">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>会员信息</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div >
            <el-tabs tab-position='left' style="height:auto;">
                <el-tab-pane class="basic_info" label="基本信息">
                    <baseinfo :baseinfo="userList[0]&&userList[0].basicInfo"></baseinfo>
                </el-tab-pane>
                <el-tab-pane label="地址信息">
                     <addressinfo></addressinfo>
                </el-tab-pane>
                <el-tab-pane label="增值税发票相关信息">
                     <invoice></invoice>
                </el-tab-pane>
                <el-tab-pane label="信息展示">
                     <infopresentation></infopresentation>
                </el-tab-pane>
                <el-tab-pane label="操作">
                      <userzsgc></userzsgc>
                </el-tab-pane>
            </el-tabs>
        </div>
    </el-card>

   </div>
</template>
<script>
    import baseinfo from '../../components/member/baseinfo'
    import addressinfo from '../../components/member/addressinfo'
    import invoice from '../../components/member/invoice'
    import infopresentation from '../../components/member/infopresentation'
    import userzsgc from '../../components/member/userzsgc'
    import { mapGetters } from "vuex";
    export default {
        name:'shopinfo',
        data(){
            return {
                isPassed:"",
            }
        },
        created() {
            if (this.userList.length == 0) {
            this.$store.dispatch("user");
            }
        },
        computed: {
            ...mapGetters(["userList"])
        },
        methods:{
        },
        components:{
          baseinfo,addressinfo,invoice,infopresentation,userzsgc
        }
    }
</script>
<style lang="less" scoped>
    .shopinfo{
        .box-card{
            div:nth-child(2){
                .el-tabs>{
                    .basic_info{
                        font-size: 14px;
                        color:gray;
                       .el-row{
                            padding: 12px 0px;
                            border-bottom: 1px solid #e8e8e8;
                            .el-col-4{
                                text-align: right;
                                
                            }
                           
                       }
                    }
                }
            }
        }
    }
</style>

