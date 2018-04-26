<template>
    <div class="test" style="margin-top:23px">
      <el-row :gutter="20">
        <el-col :span="12">
           <a name="firstAnchor">这就跳转的位置</a>
            <div class="circle">
                <div class="wrap"></div>
                <div class="photo">
                    <img src="../../static/img/modeo03.jpg" alt="美女">
                </div>
                <div class="text">
                    <h3 style="text-shadow:black 5px 3px 3px;">欢迎来到鲜致，美女为你服务</h3>
                </div>
            </div>
        </el-col>
        <el-col :span="12">
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

          <!--无缝滚动-->
          <div id="box">
                  <ul id="con1" ref="con1" >
                      <li v-for="item in items" @mouseover="stopscroll">{{item.name}}</li>
                  </ul>
          </div>
          <!--无缝滚动结束--> 
          <ul> 
              <li><a href="#firstAnchor">跳至第一个锚点</a></li>
          </ul>
        </el-col>
      </el-row>
      <el-row :gutter="20">
         <!--display格式-->
        <div class="table" style="display:table">
            <div class="table-row" style="display:table-row;">
                <div class="table-cell" style="display:table-cell; vertical-align:middle; height:150px; width:150px;">处我是一个例子一个测试第三批辣条、display的属性</div>
                <div class="table-cell" style="color:red">display样式中的display:table,display:table-row以及display:table-cell属性</div>
            </div>
        </div>
      </el-row>
      <el-row :gutter="20">
         <el-col :span="12">
             <input type="file" @change="upLoad" ref="upload">
         </el-col>
         <el-col :span="12">
           <el-steps :active="active" finish-status="success">
              <el-step title="步骤 1"></el-step>
              <el-step title="步骤 2"></el-step>
              <el-step title="步骤 3"></el-step>
           </el-steps>
            <router-view></router-view>
            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
         </el-col>
      </el-row>
    </div>
</template>
<script>
export default {   
  name: "test",
  data: function() {
    return {
      good: {
        name: "大盘鸡",
        count: "3",
        price: "20"
      },
      peoples: [
        //是否发送过简历  是否同意面试   是否面试过   面试人员名字
        { sended: false, agree: false, faced: false, name: "唐森" },
        { sended: true, agree: false, faced: false, name: "沙僧" },
        { sended: true, agree: true, faced: false, name: "天蓬" },
        { sended: true, agree: true, faced: true, name: "悟空" }
      ],
      items: [{ name: "马云" }, { name: "雷军" }, { name: "王勤" }],
      animate: false,
      dilver: 0.8,
      lwf: 5,
      active: 1
    };
  },
  computed: {
    totalprice() {
      return this.good.price * this.good.count * this.dilver + this.lwf;
    }
  },
  created() {
    // this.scrollTop();
    setInterval(this.scrollo, 1000);
  },
  methods: {
    facedstatus(item) {
      var status_label = "面试状态未可知";
      if (!item.sended) {
        status_label = "未发送简历";
      }
      if (item.sended && !item.agree) {
        status_label = "已发送简历，未同意面试";
      }
      if (item.sended && item.agree && !item.faced) {
        status_label = "已发送简历，已同意面试，但未面试";
      }
      if (item.sended && item.agree && item.faced) {
        status_label = "已发送简历，并同意面试，已经面试过";
      }
      return status_label;
    },
    // scrollTop: function() {
    //   setInterval(() => {
    //     this.scroll();
       
    //   }, 5000);
    // },
    // scroll: function() {
    //   console.log("这是时间模拟函数")
    // },
    scrollo: function() {
      let con1 = this.$refs.con1;
      // con1.style.marginTop = "-30px;";
      // this.animate = !this.animate;
      var that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
      setTimeout(function() {
        that.items.push(that.items[0]);//给数组末尾添加当前数组第一个元素
        // alert(that.items)
        that.items.shift();//删除数组第一个元素
        // con1.style.marginTop = "0px";
        // that.animate = !that.animate;
      }, 500);
    },
    stopscroll:function(){
         clearInterval(this.scrollo);
    },
    upLoad:function(){
      let files=this.$refs.upload.files
       console.log(files[0])
    },
     next() {
        let router=this.$route.path
        alert(router)
        if(router=="/main/test/testo"){
          this.$router.push({path:"/main/test/testt"})
          this.active=2
        }else if(router=="/main/test/testt"){
          this.$router.push({path:"/main/test/testr"})
          this.active=3
        }else{
          alert("步骤完成请求数据")
          
        }
      }
  }
};
</script>
<style lang="less" scoped>
.test {
  width: 100%;
  background: #fff;
  .circle {
    margin: 100px auto;
    width: 300px;
    height: 300px;
    position: relative;
    &:hover {
      .wrap {
        transform: rotate(0deg);
      }
      .text {
        transform: rotate(0deg);
        height: 280px;
      }
    }
    .wrap {
      position: absolute;
      width: 300px;
      height: 300px;
      top: 0;
      left: 0;
      background: url(../../static/img/wrap-bg.png) no-repeat;
      display: block;
      transform: rotate(180deg) ;
      transition: ease-in 0.6s;
    }
    .photo,
    .text {
      left: 10px;
      top: 10px;
      width: 280px;
      height: 280px;
      position: absolute;
      img {
        width: 280px;
        height: 280px;
        border-radius: 50%;
      }
    }
    .text {
      background: rgba(78, 78, 12, 0.5);
      text-align: center;
      overflow: hidden;
      color: #fff;
      transform: rotate(180deg);
      transition: all ease-in-out 0.4s;
      transform-origin: top;
      height: 0;
      border: none;
      border-radius: 50%;
      h3 {
        line-height: 280px;
      }
    }
  }
  .text {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    position: relative;
    border: 1px solid #ddd;
    &:hover {
      .posi {
        transform: rotate(0deg);
        height: 120px;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    .posi {
      position: absolute;
      overflow: hidden;
      top: 40px;
      height: 0;
      left: 0;
      width: 200px;
      text-align: center;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      transform: rotate(55deg);
      transition: all ease 0.4s;
    }
  }
  //box
  .box {
    width: 200px;
    margin: 20px auto;
    ul {
      width: 100%;
      border: 1px solid #ddd;
      display: inline-block;
      li {
        height: 35px;
        line-height: 35px;
        text-align: center;
        list-style: none;
      }
    }
  }
  #box {
    width: 300px;
    height: 32px;
    line-height: 30px;
    overflow: hidden;
    padding-left: 30px;
    border: 1px solid black;
    transition: all 0.5s;
  }
  .anim {
    transition: all 0.5s;
  }
  #con1 li {
    list-style: none;
    line-height: 30px;
    height: 30px;
  }
}
</style>

