<template>
    <div class="rankmange">
        <div class="djaddres">
            <h3>普通会员</h3>
            <p>有效期至2019-01-23</p>
            <el-progress :percentage="30"></el-progress>
            <p class="ptp">
                <span>保级</span>
                再获取1678积分保持普通会员
            </p>
            <h4>与黄金会员对比</h4>
            <el-progress type="circle" :percentage="25"></el-progress>
            <p class="jfp">
                <span>&nbsp</span>
                我的等级积分
            </p>
            <el-button type="success" class="mt30">赚取更多积分</el-button>
        </div>  
    </div>
</template>
<script>
export default {
  data:function(){
      return{
         
      }
  }
}
</script>

<style lang="less" scoped>
    .rankmange{
        .djaddres{
            width: 600px;
            margin: 50px auto;
            text-align: center;
            h3{
                text-align: center;
            }
            h4{
                text-align: center;
                color: #999;
                margin-bottom: 10px;
            }
            p{
                font-size: 14px;
                text-align: center;
                color: #999;
            }
            .ptp{
                margin-top: 20px;
                margin-bottom: 15px;
                span{
                    padding: 2px 5px;
                    background: #e6a23c;
                    color: #fff;
                    border-radius: 4px;
                }
            }
            .jfp{
                font-size: 12px;
                span{
                    min-width: 15px;
                    height:6px;
                    background: rgb(36, 160, 255);
                    display:inline-block;
                    vertical-align: middle;
                }
            }
            .mt30{
                margin-top: 30px;
            }
        }
    }
</style>
