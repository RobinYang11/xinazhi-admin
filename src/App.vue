<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

  *{
    padding: 0;
     margin:0 auto;
  }
  body{
    font-family: Microsoft YaHei,Helvitica,Verdana,Arial,san-serif;
    background-color: rgba(226, 226, 226, 0.3);
  }
  a{

    text-decoration: none;
    /* color:white; */
    font-size:12px;

  }

  .wrapper{
     width: 1200px;
  }

  /*修改el-card 标题 内编辑*/
  .el-card>div:first-child{
    padding: 10px !important;
  }
   .el-card>div:first-child>span{
     font-weight: 800;
   }
</style>
