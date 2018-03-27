<template>
    <div class="devPlanData">
        <el-container>
            <el-aside width="240px">
                <div class="main">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>5</li>
                        <li>7</li>
                        <li>8</li>
                    </ul>
                </div>
            </el-aside>
            <el-container style="background-color:#fafafa;">
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style lang="less" scoped>
    .devPlanData{
        .el-aside{
            position: relative;

            .main{
               
            }
        }
    }
</style>

