<template>
   <div class="news">
       <el-row>
           <el-col :span="20">
               <ul>  
                    <li><a href="#">宁夏生鲜将迎来福利大活动，满500减200，福利大放放松尽在三天后，不要错过哦。</a></li>
                    <li><a href="#">宁夏生鲜将迎来福利大活动，满500减200，福利大放放松尽在三天后，不要错过哦。</a></li>
                    <li><a href="#">宁夏生鲜将迎来福利大活动，满500减200，福利大放放松尽在三天后，不要错过哦。</a></li>
                    <li><a href="#">宁夏生鲜将迎来福利大活动，满500减200，福利大放放松尽在三天后，不要错过哦。</a></li>
                    <li><a href="#">宁夏生鲜将迎来福利大活动，满500减200，福利大放放松尽在三天后，不要错过哦。</a></li>
                    <li><a href="#">宁夏生鲜将迎来福利大活动，满500减200，福利大放放松尽在三天后，不要错过哦。</a></li>
                    <li><a href="#">宁夏生鲜将迎来福利大活动，满500减200，福利大放放松尽在三天后，不要错过哦。</a></li>
                </ul>
           </el-col>
           <el-col :span="4" class="right">
               <ul>
                    <li><a href="#">2018-09-26</a></li>
                    <li><a href="#">2018-09-26</a></li>
                    <li><a href="#">2018-09-26</a></li>
                    <li><a href="#">2018-09-26</a></li>
                    <li><a href="#">2018-09-26</a></li>
                    <li><a href="#">2018-09-26</a></li>
                    <li><a href="#">2018-09-26</a></li>
                </ul>
           </el-col>
       </el-row>
   </div>
</template>

<style lang="less" scoped>
    .news{
        .el-row{
            .el-col{
                 ul{
                    display: inline-block;
                    width: 100%;
                    li{
                        border-bottom: dashed 1px #ddd;
                        padding: 10px 8px;
                        a{
                        color: #444;
                        font-size: 14px; 
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        display: inline-block;
                        &:hover{
                            color: #2ec748;
                        }
                        }
                    }
                }
            }
            .right{
                a{
                    text-align: right;
                    width: 180px;
                    display: inline-block;
                }
            }
        } 
    }
</style>

