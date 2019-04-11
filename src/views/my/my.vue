<template>
    <div>
        <router-link :to="{name:'my-withdraw'}">提现</router-link><br/><br/>
        <router-link :to="{name:'my-config',params:{id:'1'}}">设置</router-link><br/><br/>
        <router-link :to="{name:'my-certification'}">实名</router-link><br/><br/>
        <router-link :to="{name:'my-bills'}">账单</router-link><br/><br/>
        <router-link :to="{name:'my-about'}">关于</router-link><br/><br/>
        <router-link :to="{name:'my-star'}">创客星</router-link><br/><br/>
        <router-link :to="{name:'foget-password'}">找回登录密码</router-link><br/><br/>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    .my {
        .btn-config {
            font-size: 28px;
            padding: 0;
            height: 56px;
            width: 56px;
        }
    }
</style>
