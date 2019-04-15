import ua from '@/_config/ua.js';

export default {
    install(Vue, options) {
        Vue.prototype.$back = function () {
            const historyList = this.$store.state.history.list;
            if (historyList.length > 1) {
                if (ua.isAndroidApp) {
                    window.control['goBack']()
                }
                else {
                    this.$router.go(-1);
                }
            } else {
                window.webkit.messageHandlers.quitWebView.postMessage('');
            }
        }
    }
}
