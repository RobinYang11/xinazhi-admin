<template>
    <div class="user-fl">
        <router-link to="/main/userManagement">会员管理</router-link>
        <router-link to="/main/rankManagement">等级管理</router-link>
    </div>
</template>
<script>
export default {
  name:"user"
}
</script>

<style lang="less">
    .user-fl{
          display: inline-block;
          width: 100%;
          margin: 280px auto;
        a{
            display: block;
            height: 40px;
            width: 50%;
            line-height: 40px;
            padding: 0 15px;
            border-radius: 4px;
            margin: 10px auto;
            text-align: center;
            font-size: 16px;
            color: #fff;
            background: #409eff;
        }
    }
</style>


