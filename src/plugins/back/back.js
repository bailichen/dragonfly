import ua from '@/_config/ua.js';

export default {
    install(Vue, options) {
        Vue.prototype.$back = function () {
            if (this.routerFrom.name) {
                this.$router.go(-1);
            } else {
                if (ua.isIosApp) {
                    window.webkit.messageHandlers.quitWebView.postMessage('');
                }

                if (ua.isAndroidApp) {
                    window.control.quitWebView();
                }
            }
        }
    }
}
