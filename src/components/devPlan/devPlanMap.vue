<template>
    <div>
        <div id="devChart"></div>
    </div>
</template>
<script>
export default {
  name:"devPlanMap",
  mounted() {

        var data1 = {
        "name": "鲜致开发计划图总览",
        "children": [
            {
                "name": "三月份开发开发计划",
                "children": [
                    {"name": "总后台前端架构实现", "value": 8833},
                    {"name": "总后台后端接口实现", "value": 1732},
                    {"name": "前后端联调，上线", "value": 3623}
                ]
            },
            {
                "name": "四月份开发开发计划",
                "children": [
                    {"name": "待定", "value": 8833},
                    {"name": "待定", "value": 1732},
                    {"name": "待定", "value": 3623}
            ]
            },
            {
                "name": "五月份开发开发计划",
                "children": [
                    {"name": "待定", "value": 4116}
                ]
            },
            {
            "name": "六月份开发开发计划",
            "children": [
                {"name": "待定", "value": 1616},
                {"name": "待定", "value": 1027},
                {"name": "待定", "value": 3891},
                {"name": "待定", "value": 891},
                {"name": "待定", "value": 2893},
                {"name": "待定", "value": 5103},
                {"name": "待定", "value": 3677},
                {"name": "待定", "value": 781},
                {"name": "待定", "value": 4141},
                {"name": "待定", "value": 933},
                {"name": "待定", "value": 5130},
                {"name": "待定", "value": 3617},
                {"name": "待定", "value": 3240},
                {"name": "待定", "value": 2732},
                {"name": "待定", "value": 2039},
        
            ]
            },
            {
            "name": "七月份开发开发计划",
            "children": [
                {"name": "待定", "value": 2105},
                {"name": "待定", "value": 1316},
                {"name": "待定", "value": 3151},
                {"name": "待定", "value": 3770},
                {"name": "待定", "value": 2435},
                {"name": "待定", "value": 4839},
                {"name": "待定", "value": 1756},
                {"name": "待定", "value": 4268},
                {"name": "待定", "value": 1821},
                {"name": "待定", "value": 5833}
            ]
            }
        ]
    };
        this.drawLine(data1);
   },
  methods:{
       drawLine(data1){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('devChart'))
        // 绘制图表
        myChart.setOption( {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            legend: {
                top: '2%',
                left: '3%',
                orient: 'vertical',
                data: [{
                    name: 'Development Progress Map',
                    icon: 'triangle'
                }],
                borderColor: 'blue',
                textStyle: {
                    fontSize: 18 // 用 legend.textStyle.fontSize 更改示例大小
                }
            },
            series:[
                {
                    type: 'tree',

                    name: 'Development Progress Map',

                    data: [data1],

                    top: '5%',
                    left: '30%',
                    bottom: '2%',
                    right: '20%',

                    symbolSize: 10,
                     itemStyle: {
                        normal: {
                            label: {
                                textStyle: {
                                    // 用 itemStyle.normal.label.textStyle.fontSize 來更改餅圖上項目字體大小
                                    fontSize: 15,
                                    color:"#000000"
                                }
                            }
                        }   
                     },

                    label: {
                        normal: {
                            position: 'left',
                            verticalAlign: 'middle',
                            align: 'right'
                        }
                    },

                    leaves: {
                        label: {
                            normal: {
                                position: 'right',
                                verticalAlign: 'middle',
                                align: 'left'
                            }
                        }
                    },

                    expandAndCollapse: true,

                    animationDuration: 550,
                    animationDurationUpdate: 750

                }
            ]
        });
    }
  }
}
</script>
<style lang="less" scoped>
    #devChart{
        width:100%;
        height: 1000px;
    }
</style>
