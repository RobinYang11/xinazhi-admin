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
        a{
            display: inline-block;
            height: 40px;
            line-height: 40px;
            padding: 0 15px;
            margin: 0 10px;
            font-size: 16px;
            color: #409EFF;
        }
    }
</style>


