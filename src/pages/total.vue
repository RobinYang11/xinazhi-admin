<template>
   <div>
       <el-row :gutter="10">
            <el-col :span="24">
                 <el-card class="box-card sold-count">
                    <div slot="header" class="clearfix">
                        <span>总体销售数据统计</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div>
                        <div id="myChart" :style="{width: '400px', height: '300px'}"></div>
                    </div>
                </el-card>
            </el-col>
       </el-row>
   </div>
</template>
<script>
    
    export default {
        name:"total",
        data() {
            return {
            msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.drawLine();
        },
        methods: {
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                                title: {
                    text: '世界人口总量',
                    subtext: '数据来自网络'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['2011年', '2012年']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01]
                },
                yAxis: {
                    type: 'category',
                    data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
                },
                series: [
                    {
                        name: '2011年',
                        type: 'bar',
                        data: [18203, 23489, 29034, 104970, 131744, 630230]
                    },
                    {
                        name: '2012年',
                        type: 'bar',
                        data: [19325, 23438, 31000, 121594, 134141, 681807]
                    }
                   ]
                });
            }
        }
    }
</script>
<style lang="less" scoped>
    .total{
        .el-row{
             .sold-count{
                 width: 100%;
                 #myChart{
                     width: 100%;
                 }
             }
        }
    }
</style>


