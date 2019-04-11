<template>
    <div class="about-wrapper"
         v-theme:background>
        <div class="logo">
            <img src="../../assets/images/logo.png"
                 alt="">
        </div>
        <!-- <div class="version">
            <span>V {{version}}</span>
        </div> -->
        <h1>让城市新人类的生活更美好</h1>
        <div class="description">
            <section>
                <p>口諀工作创客版由新仁类（上海）网络科技有限公司负责研发和运营。 新仁类”谐音“新人类”，代表进入城市工作、生活的新一代城市市民。公司成立于2016年11月，仅仅一年多的时间，已经发展成业内知名企业，新仁类拼搏奋发的精神也为业内所钦佩。</p>
            </section>
        </div>
        <div class="app-copy">
            版权所有&copy; 2019 新仁类(上海)网络科技有限公司
        </div>
    </div>
</template>
<script>
import ua from 'ua';
export default {
    data() {
        return {
            version: ''
        }
    },
    created() {
        if (ua.isIosApp) {
            window.set_version = version => {
                this.version = version;
            };

            window.webkit.messageHandlers.request_version.postMessage('');
        }
        else if (ua.isAndroidApp) {
            const uaString = ua.ua;
            const version = uaString.replace(/.*\/android_ck_app\/(\d+\.\d+\.?\d*)\/.*/, '$1');
            this.version = version;
        }
    }
}
</script>
<style lang="scss" scoped>
.about-wrapper {
    min-height: calc(100%);
    position: relative;
    h1 {
        display: block;
        text-align: center;
        font-size: 36px;
        font-weight: 400;
        color: #2e2e2e;
        margin: 0;
    }
    .logo {
        text-align: center;
        padding: 52px 0;
        img {
            width: 188px;
            display: inline-block;
            vertical-align: bottom;
        }
    }
    .description {
        padding: 64px 45px 96px;
        section {
            margin: 52px 0 0;
            p{
                font-size: 26px;
                line-height:42px;
                text-align: justify;
                color: #0F1110;
                margin: 0;
                text-indent: 2em;
            }
        }
    }
    .app-copy{
        position: absolute;
        bottom: 44px;
        width: 100%;
        text-align: center;
        font-size:24px;
        color: #59595A;
    }
}
</style>

