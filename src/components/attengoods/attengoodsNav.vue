<template>
    <div class="attengooodsNav">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="关注的商品" name="first">
                <nuxt-link to="attention_goods">关注的商品</nuxt-link>
            </el-tab-pane>
            <el-tab-pane label="关注的活动" name="second">
                <nuxt-link to="attention_goods">关注的活动</nuxt-link>
            </el-tab-pane>
            <el-tab-pane label="关注的店铺" name="third">
                <nuxt-link to="attention_goods">关注的店铺</nuxt-link>
            </el-tab-pane>
        </el-tabs>
        <!--搜索开始-->
        <div class="search-attention">
            <el-input placeholder="请输入商品名称" v-model="input" class="input-with-select">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <!--搜索结束-->
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
         input: ''
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="less">
    .attengooodsNav{
        .el-tabs{
            width: 60%;
            display: inline-block;
            float: left;
            .el-tabs__header{
                margin: 0;
                .el-tabs__nav-wrap{
                    &:after{
                        background-color:transparent;
                    }
                    .el-tabs__nav-scroll{
                        .el-tabs__nav{
                            .el-tabs__active-bar{
                                background-color:#2ec748;
                            }
                            .el-tabs__item.is-active{
                                color:#2ec748;
                            }
                            .el-tabs__item:hover{
                                color: #2ec748;
                            }
                        }
                    }
                }
            }
            .el-tabs__content{
                height: 0;
            }
        }
        .search-attention{
            width: 40%;
            display: inline-block;
            .el-input-group{
                position: relative;
            }
        }
    }
</style>
