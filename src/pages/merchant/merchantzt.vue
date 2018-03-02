<template>
    <div class="merchantzt">
        <div class="panel">
            <div class="panel-header">
                <div class="panel-title">
                    <h4>配送信息</h4>
                </div>
            </div>
            <div class="panel-body">
                <div class="merchant">
                    <p>
                        <span>配送方式：</span>
                        <span>蜂鸟专送</span>
                    </p>
                    <p>
                        <span>送达时间：</span>
                        <span>尽快送出</span>
                    </p>
                </div>
                <div class="merchant">
                    <p>
                        <span>联系人：</span>
                        <span>张xx(先生)</span>
                    </p>
                    <p>
                        <span>联系电话：</span>
                        <span>183xxx2566</span>
                    </p>
                    <p>
                        <span>收货地址：</span>
                        <span>银川iBi育成中心宁夏回族自治区银川市金凤区宁安大街北段育成中心4007</span>
                    </p>
                </div>
                <div class="merchant">
                    <p>
                        <span>发票信息：</span>
                        <span>无发票</span>
                    </p>
                    <p>
                        <span>备注：</span>
                        <span>新鲜的蔬菜，尽可能快的送达。。。。。。。</span>
                    </p>  
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  data:function(){
        return{
            
        }
    },
}
</script>
<style lang="less" scoped>
    .merchantzt{
        .panel{
            .panel-title{
                font-size:17px;
                color: black;
                font-weight: normal;
            }
            .panel-body{  
                .merchant{
                    padding: 0 0 12px;
                    border-bottom: 1px dashed #eee;
                    p{
                        display: table;
                        margin-bottom: 12px;
                        span{
                            display: table-cell;
                            vertical-align: top;
                            line-height: 18px;
                            word-break: break-word;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
</style>


