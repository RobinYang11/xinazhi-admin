<template>
    <div>
        <div class="address-main">
            <div class="address-box">
                <el-row :gutter="20">
                    <el-col :span="14">
                    {{name}}
                        <span>先生</span>
                    </el-col>
                    <el-col :span="8" :offset="2">
                        <el-button type="text" @click="centerDialogVisible = true">修改</el-button>
                        <el-button type="text" v-on:click="show()">删除</el-button>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24" class="color-col">
                        丽水学院(东校区) 5幢308
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24" class="color-col">
                        15009580452
                    </el-col>
                </el-row>
                <el-dialog
                    title="编辑地址"
                    :visible.sync="centerDialogVisible"
                    width="30%"
                    >
                    <div>
                        <el-row>
                            <el-col :span="4">
                                姓名
                            </el-col>
                            <el-col :span="12">
                                <el-input v-model="name"></el-input>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                性别
                            </el-col>
                            <el-col :span="12">
                                 <el-radio v-model="radio" label="1">男</el-radio>
                                 <el-radio v-model="radio" label="2">女</el-radio>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                位置
                            </el-col>
                            <el-col :span="12">
                                <el-select v-model="value8" filterable placeholder="请选择" style="width:100%">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4">
                                详细地址
                            </el-col>
                            <el-col :span="12">
                                <el-input  placeholder="文二西路502号"></el-input>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20">
                            <el-col :span="4">
                                手机号
                            </el-col>
                            <el-col :span="7">
                                <el-input  placeholder="18357875807"></el-input>
                            </el-col>
                            <el-col :span="5">
                                <el-button type="success" v-on:click="click()">{{clickName}}</el-button>
                            </el-col>
                        </el-row>
                        <el-row :gutter="20" v-if="isShowLogin">
                            <el-col :span="4">
                                
                            </el-col>
                            <el-col :span="7">
                                <el-input  placeholder="固话，手机短号"></el-input>
                            </el-col>
                            <el-col :span="5">
                                <el-button type="danger">删除</el-button>
                            </el-col>
                        </el-row>
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="centerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
                <!--删除S-->
                <div class="delete" v-show="isshow">
                    <div class="maindl">
                        <p>确认删除收货地址？</p>
                        <el-row>
                            <el-col :span="24">
                                <el-button type="primary">确定</el-button>
                                <el-button style="color:#000;" v-on:click="qx()">取消</el-button>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <!--删除E-->
            </div>
        </div>
        <div class="primary">
            <div class="address-main">
                <div class="address-box">
                    <el-button class="prm-btn" @click="centerDialogVisible = true">
                        <i class="el-icon-plus"></i>添加地址
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:"hxzaddress",
  data() {
      return {
        centerDialogVisible: false,
        radio: '1',
         options: [{
          value: '选项1',
          label: '银川'
        }, {
          value: '选项2',
          label: '西安'
        }, {
          value: '选项3',
          label: '杭州'
        }, {
          value: '选项4',
          label: '华信智'
        }, {
          value: '选项5',
          label: '上海'
        }],
        value8: '',
        isShowLogin:false,
        clickName:"添加更多",
        name:"草原狼2013",
        isshow:false
      };
    },
    methods:{
        click:function()
        {
          this.isShowLogin=!this.isShowLogin;
          if(this.isShowLogin)
           {
               this.clickName="取消"
           }
           else
           {
               this.clickName="添加更多"
           }  
        },
        show:function(){
            this.isshow=!this.isshow;
        },
        qx:function(){
            this.isshow=!this.isshow;
        }
    }
}
</script>

<style lang="less" scoped>
    .address-main{
        width: 321px;
        display: inline-block;
        padding: 5px;
        box-sizing: border-box;
        border: 0;
        margin-bottom: 5px;
        .address-box{
            padding: 15px;
            border: 1px solid #ddd;
            width: 100%;
            height: 110px;
            box-sizing: border-box;
            position: relative;
            &:hover{ 
                border: 1px solid #2ec748;
                .el-row{
                    .el-col{
                        .el-button{
                            color:#2ec748;
                        }
                    }
                }
            }
            .el-row{
                .el-col{
                    height: 22px;
                    line-height: 22px;
                    cursor: default;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #333;
                    margin-bottom: 10px;
                    font-size: 14px;
                    .el-button{
                        padding: 0;
                        font-size: 12px;
                        color: #bbb;
                    }
                    span{margin-left:10px;}
                }
                .el-col.color-col{
                    color: #666;
                    font-size: 14px;
                    margin-bottom: 0;
                }
            }
            .el-dialog__wrapper{
                .el-dialog{
                    .el-dialog__header{
                        .el-dialog__title{

                        }
                    }
                    .el-dialog__body{
                       .el-row{
                           .el-col{
                               height: 40px;
                               line-height: 40px;
                               margin-bottom: 20px;
                               .el-button{
                                   padding: 12px 20px;
                                   color: #2ec748;
                                   border-color: #2ec748;
                                   background-color: #fff;
                                   width: 100%;
                                   overflow: hidden;
                                   text-overflow: ellipsis;
                                   &:hover{
                                       background-color: #2ec748;
                                       color: #fff;
                                       span{
                                           color: #fff;
                                       }
                                   }
                                   span{
                                       color: #fff;
                                   }
                               }
                               .el-button.el-button--danger{
                                   padding: 12px 20px;
                                   color: #f56c6c;
                                   border-color: #f56c6c;
                                   background-color: #fff;
                                   &:hover{
                                       background-color: #f56c6c;
                                       color: #fff;
                                       span{
                                           color: #fff;
                                       }
                                   }
                                   span{
                                       color: #fff;
                                   }
                               }
                           }
                       } 
                    }
                }
            }
            //删除开始
            .delete{
                position: absolute;
                left: 0;
                top: 0;
                background-color: #000;
                background-color: rgba(0, 0, 0, 0.5);
                width: 100%;
                height: 100%;
                text-align: center;
                z-index: 88;
                .maindl{
                    position: absolute;
                    left: 0;
                    top: 0;
                    margin-top: 25px;
                    color: #fff;
                    font-size: 14px;
                    line-height: 26px;
                    text-align: center;
                    width: 100%;
                    height: 100%;
                    z-index: 99;
                    p{
                        margin-bottom: 5px;
                    }
                    .el-row{
                        .el-col{
                            height: 26px;
                            .el-button{
                                padding: 5px 20px;
                                z-index: 99;
                            }
                            .el-button.el-button--primary{
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
    //初始化状态
    .primary{
        width: 100%;
        display: inline-block;
        .address-main{
            .address-box{
                .prm-btn{
                    margin:20px 85px;
                    border: 0;
                    
                }
            }
        }
    }
</style>


