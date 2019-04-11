<template>
    <div class="login">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        mounted() {
        }
    }
</script>
<style lang="scss">
    .login {
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        height: 100%;
        width: 100%;
    }
</style>