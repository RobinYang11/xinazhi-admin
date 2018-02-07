<template>
   <div>
       <ul>
           <li>
               <el-row>
                   <el-col :span="6"><i class="el-icon-edit"></i></el-col>
                   <el-col :span="18"><a href="#">这是一个选项</a></el-col>
               </el-row>
           </li>
            <li>
               <el-row>
                   <el-col :span="6"><i class="el-icon-edit"></i></el-col>
                   <el-col :span="18"><a href="#">这是一个选项</a></el-col>
               </el-row>
           </li>
            <li>
               <el-row>
                   <el-col :span="6"><i class="el-icon-edit"></i></el-col>
                   <el-col :span="18"><a href="#">这是一个选项</a></el-col>
               </el-row>
           </li>
            <li>
               <el-row>
                   <el-col :span="6"><i class="el-icon-edit"></i></el-col>
                   <el-col :span="18"><a href="#">这是一个选项</a></el-col>
               </el-row>
           </li>
       </ul>
   </div>
</template>
<script>
export default {
  name:"leftNav"
}
</script>
<style lang="less" scoped>
    .el-col-6{
            text-align: center;
    }
     .el-col-18{
         display: none;
     }
</style>


