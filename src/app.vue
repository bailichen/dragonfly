<template>
    <div class="app">
        <div class="a"></div>
        <router-view v-if="tokenGet || $route.name == 'foget-password'"></router-view>
    </div>
</template>
<script>
import ua from 'ua';

export default {
    data() {
        return {
            token: '',
            tokenGet: false,
            isIOS: !!ua.isIosApp,
        }
    },
    created() {
        const _this = this;
        window.set_userToken = token => {
            _this.token = token;
            _this.$storage.set('token', token);
            _this.tokenGet = true;

            return token;
        };

        if (ua.isIosApp) {
            window.webkit.messageHandlers.request_userToken.postMessage('');
        }
        else if (ua.isAndroidApp) {
            const token = window.control.get_userToken();
            this.token = token;
            this.$storage.set('token', token);
            this.tokenGet = true;
        }
        else {
            this.$request('login', {
                // mobile: 18817893609,
                // mobile: 18697715328,
                mobile: 15800319949,
                login_type: 1,
                client_type: 1,
                captcha: '123456',
                business_type: 5
            }).then(response => {
                this.$storage.set('token', response.data.data);
                this.tokenGet = true;
            })
        };

    },
    mounted() {
        this.initHtmlFontSize()
    },
    methods: {
        /**
         * 设置移动端响应式
         */
        initHtmlFontSize() {
            document.addEventListener('DOMContentLoaded', () => {
                const html = document.querySelector('html')
                    , fontSize = window.innerWidth / 10
                html.style.fontSize = `${fontSize}px`
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.app {
    width: 100%;
    height: 100%;
}
</style>


