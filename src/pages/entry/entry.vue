<template>
   <div class="entry">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>商家入驻</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div>
                <el-table
                :data="shopList"
                style="width: 100%">
                <el-table-column
                label="商户编号"
                width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.shop_id }}</span>
                    </template>
                    </el-table-column>
                    <el-table-column
                    label="商户名称"
                    width="180">
                    <template slot-scope="scope">
                        <div>
                            <router-link to="#">  {{ scope.row.shop_name}} </router-link>
                        </div>
                    </template>
                    </el-table-column>
                    <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                    </el-table-column>
                </el-table>
             
            </div>
        </el-card>
   </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name:"entry",
        data(){
            return {
                shopList:null,
                age:3
            }
        },
        mounted(){
            this.getInfo();
        },

        methods:{
          //
          getInfo()
          {   
              let _this=this
              this.$http.get('/api/shop')
                .then(function (response) {
                    _this.shopList=response.data
                })
                .catch(function (error) {
                    console.log(error);
            });
          }
        }
    }
</script>

<style lang="less" scoped>
    .entry{
        .box-card{
            .el-table{
                a{
                    font-size: 14px;
                    color:black;
                }
            }
        }
    }
</style>
