<template>
    <div v-if="isActive"
         :class="['status',{'status-success':state, 'status-failure':!state}]"
         v-theme:background="0"
         v-theme:border
         v-theme:color>
        <div class="header"
             v-theme:background
             v-theme:color>{{header}}</div>
        <div class="content">
            <div class="icons">
                <i :class="['iconfont',state?'icon-status-check':'icon-status-error']"
                   v-theme:color="state?200:400"></i>
            </div>
            <div class="tips">
                <div class="main-tips">
                    <span :class="state?'tips-success':'tips-failure'"
                          v-theme:color="state?200:400">{{mainTips}}</span>
                </div>
                <div class="sub-tips"
                     v-theme:color="2"
                     v-html="subTips">
                </div>

            </div>
            <div class="btns">
                <ck-button outline
                           @click="handleBtnClick">{{btnText}}</ck-button>
            </div>
        </div>
        <service-bottom></service-bottom>
    </div>
</template>
<script>
import ua from '@/_config/ua.js';

export default {
    data() {
        return {
            isActive: true,
            state: 1,
            mainTips: '签约完成',
            btnText: '完成',
            caller: null
        }
    },
    computed: {
        type() {
            return this.$route.params.type;
        },
        header() {
            return `${this.type == 1 ? '开' : '完'}工协议`;
        },
        subTips() {
            const { type } = this;
            if (type == 1) {
                return '等待发佣金<br>发佣金时将以短信通知'
            }
            else {
                return '恭喜您已完工！去看看更多任务吧～'
            }
        }
    },
    methods: {
        handleBtnClick() {
            if (ua.isIosApp) {
                window.webkit.messageHandlers.quitWebView.postMessage('');
            }

            if (ua.isAndroidApp) {
                window.control.quitWebView();
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.status {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 300;
    .header {
        height: 89px;
        width: 100%;
        text-align: center;
        font-size: 34px;
        line-height: 88px;
    }
    .content {
        .icons {
            height: 280px;
            line-height: 280px;
            text-align: center;
            i {
                font-size: 200px;
            }
        }

        .tips {
            .main-tips {
                font-size: 36px;
                line-height: 60px;
                text-align: center;
                font-weight: 600;
            }
            .sub-tips {
                padding: 64px 0;
                text-align: center;
                font-size: 24px;
                line-height: 64px;
            }
        }

        .btns {
            padding-top: 54px;
            text-align: center;
            button {
                width: 260px;
            }
        }
    }
}
</style>

