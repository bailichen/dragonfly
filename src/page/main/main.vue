<template>
    <div class="main">
        <div>
             用户信息openid：   {{this.userInfo.openid}}  <br/>
             headimgurl : {{this.userInfo.headimgurl}} <br/>
             nickname :{{this.userInfo.nickname}} <br/>
            sex: {{this.userInfo.sex}} <br/>
             ts :{{this.userInfo.ts}} <br/>
            unionid: {{this.userInfo.unionid}} <br/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userInfo:{}
        }
    },
    mounted() {
        this.userInfo = this.$store.state.userInfo.userInfoDetail
        this.$request('wechartClass').then(res => {
            console.log(res);
        })
    }
}
</script>
<style lang="less" scoped>
.main {
    font-size: 24px;
    img {
        width: 260px;
        height: 260px;
    }
}
</style>
