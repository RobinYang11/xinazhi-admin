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
                            <router-link to="shopinfo">  {{ scope.row.shop_name}} </router-link>
                        </div>
                    </template>
                    </el-table-column>

                    <el-table-column label="区域">
                        <template slot-scope="scope">
                            <div> {{ scope.row.shop_area}}</div>
                        </template>
                    </el-table-column>

                     <el-table-column
                    prop="tag"
                    label="状态"
                    width="100"
                    :filters="[{ text: '未审核', value: '未审核' }, { text: '已审核', value: '已审核' }]"
                    :filter-method="filterTag"
                    filter-placement="bottom-end">
                        <template slot-scope="scope">
                            <el-tag
                            :type="scope.row.shop_status === '未审核' ? 'primary' : 'success'"
                            close-transition>{{scope.row.shop_status}}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
             
            </div>
            <div v-for="n in people">
                <p>{{n.name}} <span style="color:red">{{n.age}}</span> </p>
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
                age:3,
                people:null,
            }
        },
        mounted(){
            this.getInfo();
            this.shop();
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
            },
            filterTag(value, row) {
                return row.shop_status === value;
            },
            filterHandler(value, row, column)
            {
                const property = column['property'];
                return row[property] === value;
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
