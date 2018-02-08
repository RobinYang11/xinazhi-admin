<template>
    <div class="test">
        <div class="circle">
            <div class="wrap"></div>
            <div class="photo">
                <img src="../../static/img/modeo03.jpg" alt="美女">
            </div>
            <div class="text">
                <h3>欢迎来到鲜致，美女为你服务</h3>
            </div>
        </div>
        <div class="text">
            <img src="../../static/img/modeo03.jpg" alt="2">
            <div class="posi">
                <h4>125</h4>
                <p>22555555</p>
            </div>
        </div> 
        <!--computed计算属性-->
        <div class="com">
            <h5>本店外卖起送价格￥30</h5>
            <p>您购买了{{good.name}}共{{good.count}}份===￥{{good.price}}/份</p>
            <p>总价:{{totalprice}}</p>
        </div>
        <!--computed计算属性结束-->
        <div v-for="(item,index) in peoples">
            {{index}}---{{item.name}}
            <span>{{facedstatus(item)}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name:"test",
  data:function(){
      return{
          good:{
              name:"大盘鸡",
              count:"3",
              price:"20"
          },
          peoples:[
            //是否发送过简历  是否同意面试   是否面试过   面试人员名字
            {sended:false,agree:false,faced:false,name:"唐森"},
            {sended:true,agree:false,faced:false,name:"沙僧"},
            {sended:true,agree:true,faced:false,name:"天蓬"},
            {sended:true,agree:true,faced:true,name:"悟空"},
            ],
          dilver:0.8,
          lwf:5
      }
  },
  computed:{
      totalprice(){
          return(this.good.price*this.good.count)*this.dilver+this.lwf;
      }
  },
  methods:{
      facedstatus(item){
          var status_label="面试状态未可知";
          if(!item.sended){
              status_label="未发送简历"
          }
          if(item.sended&&!item.agree){
              status_label="已发送简历，未同意面试"
          }
          if(item.sended&&item.agree&&!item.faced){
        status_label='已发送简历，已同意面试，但未面试';
      }
      if(item.sended&&item.agree&&item.faced){
        status_label='已发送简历，并同意面试，已经面试过';
      }
      return status_label;
      }
  }
}
</script>
<style lang="less" scoped>
    .test{
        width: 100%;
        background: #fff;
        .circle{
            margin: 100px auto;
            width: 300px;
            height: 300px;
            position: relative;
            &:hover{
                .wrap{
                    transform: rotate(0deg);
                }
                .text{
                    transform: rotate(0deg);
                    height: 280px;
                }
            }
            .wrap{
                position: absolute;
                width: 300px;
                height: 300px;
                top: 0;
                left: 0;
                background: url(../../static/img/wrap-bg.png) no-repeat;
                display: block;
                transform: rotate(180deg);
                transition: ease-in 0.6s;
            }
            .photo, .text{
                left: 10px;
                top: 10px;
                width: 280px;
                height: 280px;
                position: absolute;
                img{
                    width: 280px;
                    height: 280px;
                    border-radius: 50%;
                }
            }
            .text{
                background: rgba(78,78,12,0.5);
                text-align: center;
                overflow: hidden;
                color: #fff;
                transform: rotate(180deg);
                transition: all ease-in-out 0.4s;
                transform-origin: top;
                height: 0;
                border: none;
                border-radius: 50%;
                h3{
                    line-height: 280px;
                }
            }
        }
        .text{
            width: 200px;
            height: 200px;
            margin: 0 auto;
            position: relative;
            border: 1px solid #ddd;
            &:hover{
                .posi{
                    transform: rotate(0deg);
                    height: 120px;
                }
            }
            img{
                width: 100%;
                height: 100%;
            }
            .posi{
                position: absolute;
                overflow: hidden;
                top: 40px;
                height: 0;
                left: 0;
                width: 200px;
                text-align: center;
                background:rgba(0, 0, 0,0.5);
                color: #fff;
                transform: rotate(55deg);
                transition: all ease  0.4s;
            }
        }
    }
</style>

