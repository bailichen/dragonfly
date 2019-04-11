<template>
    <div class="service"
         v-theme:color="2"
         @click="handleClick">
        <div>如有疑问请联系客服</div>
        <div>400-101-5559</div>
    </div>
</template>
<script>
    import ua from 'ua';
    export default {
        methods: {
            handleClick() {
                if (ua.isIosApp) {
                    window.webkit.messageHandlers.phoneCall.postMessage('4001015559');
                }
                else if (ua.isAndroidApp) {
                    window.control.phoneCall('4001015559');
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .service {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
        font-size: 24px;
        line-height: 48px;
        padding-bottom: 8px;
    }
</style>
