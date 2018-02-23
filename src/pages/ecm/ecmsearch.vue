<template>
    <div class="ecmsearch">
        <el-row :gutter="20">
            <el-col :span="12" :offset="6" class="center">协议查询</el-col>
        </el-row>
        <el-row :gutter="20" class="action">
            <el-col :span="6" :offset="9">
                <el-form :inline="true"  >
                    <el-form-item label="可输入:">
                        <el-input  v-model="searchmain" placeholder="商户ID，商户名称进行查询"></el-input>
                    </el-form-item>
                </el-form>
                <a>{{searchmain}}</a>
            </el-col>
        </el-row> 
        <el-row :gutter="20" class="action-text">
            <el-col :span="6" :offset="9">
                <a href="/#/main/ecmshow">银川</a>
            </el-col>
        </el-row> 
        <el-row :gutter="20" class="action-text">
            <el-col :span="6" :offset="9">
                <a href="/#/main/ecmshow">银川华信智</a>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="center">
            <el-col :span="6" :offset="9">
                <el-button type="default">
                    <i class="el-icon-plus"></i>    
                    <a href="/#/main/ecmadd">新建合同</a>
                </el-button> 
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
export default {
  data:function(){
      return{
          searchmain:"",
      }
  }
}
</script>
<style lang="less">
    .ecmsearch{
        margin: 200px 0 0 0; 
            .center{
                text-align: center;
                font-weight: 700;
                font-size: 18px;
                .el-button{
                    a{
                        font-size: 14px;
                        color: #606266;
                    }
                }
            }
        .action{
            margin: 50px 0 10px 0;
            .el-col{
                a{
                    height: 40px;
                    line-height: 40px;
                    background: #fff;
                    border-radius: 4px;
                    padding-left: 10px;
                    text-align: center;
                    width: 100%;
                    display: inline-block;
                    font-size: 16px;
                    box-sizing: border-box;
                }
            }
        }
        .action-text{
            margin-bottom: 10px;
            .el-col{
                .el-input{
                   .el-input__inner{
                       border: none;
                       height: 30px;
                   }
                }
                a{
                    height: 25px;
                    line-height: 25px;
                    background: #fff;
                    border-radius: 4px;
                    padding-left: 10px;
                    text-align: left;
                    color: #ccc;
                    width: 100%;
                    display: inline-block;
                    font-size: 14px;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>

