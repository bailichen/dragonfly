<template>
    <div id="app"
         class="fillcontain">
        <router-view></router-view>
    </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            userOpenId: '',
            token: '',
        }
    },
    mounted() {
        if (this.$storage.get('code')) {
            // 拿token
            if (!window.sessionStorage.getItem('token')) {
                this.$request('wxauth', {
                    code: this.$storage.get('code')
                }).then(res => {
                    if (res.user.openid) {
                        this.userOpenId = res.user.openid
                        window.sessionStorage.setItem('token', res.access_token)
                        window.sessionStorage.setItem('userInfo', JSON.parse(res.user))
                        this.$store.dispatch('userInfo/getUserInfoActive')
                    } else {
                        this.$storage.clear();
                        this.$router.push({ name: 'main' })
                        setTimeout(() => {
                            window.location.reload();
                        }, 500)
                    }
                })
            }
        } else {
            let url = 'http://www.shijianguanlixueyuan.com/wechart'
            let redirectUrl = encodeURIComponent(url, 'utf-8')
            // window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe5240862be6104be&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=12#wechat_redirect`
        }
    }
}
</script>

<style lang="less">
@import "./style/common";
</style>
