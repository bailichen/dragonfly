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
export default {
    data() {
        return {
            isActive: false,
            state: 1,
            header: '',
            mainTips: '',
            subTips: '',
            btnText: '确定',
            caller: null
        }
    },
    methods: {
        status(caller, state, header, mainTips, subTips, btnText, slot) {
            this.caller = caller;

            this.state = state;
            this.header = header;
            this.mainTips = mainTips;
            this.subTips = subTips;
            this.btnText = btnText;
            slot && (this.$slots.default = slot)

            this.isActive = true;
        },
        handleBtnClick() {
            this.isActive = false;
            this.caller && this.caller.$back();
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
                text-align: center;
                font-size: 24px;
                line-height: 48px;
                padding: 64px 0;
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
