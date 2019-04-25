<template>
    <div id="app"
         class="fillcontain">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    mounted() {
        if (this.$storage.get('code')) {
            // 拿token
            this.$request('wxauth', {
                code: this.$storage.get('code')
            }).then(res => {
                this.$store.dispatch('userInfo/getUserInfoActive', res.user)
            }).catch(err => {
                this.$storage.clear();
                this.$router.push({name:'main'})
            })
        } else {
            let url = 'http://www.shijianguanlixueyuan.com/wechart'
            let redirectUrl = encodeURIComponent(url, 'utf-8')
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe5240862be6104be&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=12#wechat_redirect`
        }
    }
}
</script>

<style lang="less">
@import "./style/common";
</style>
