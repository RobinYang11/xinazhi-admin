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
    </div>
</template>

<script>
export default {
  name:"test",
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

