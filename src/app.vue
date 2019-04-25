<template>
    <div id="app"
         class="fillcontain">
        <router-view></router-view>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    mounted() {
        if (this.$storage.get('code')) {
            // 拿token
            this.$request('wxauth', {
                code: this.$storage.get('code')
            }).then(res => {
                if (res.user.openid) {
                    this.$store.dispatch('userInfo/getUserInfoActive', res.user)
                } else {
                    this.$toast('登录超时，请重新授权登录！')
                    this.$storage.clear();
                    this.$router.push({ name: 'main' })
                    setTimeout(()=>{
                        window.location.reload();
                    },2000)
                }
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
