<template>
    <section class="my-code-dialog"
             v-if="codeDialog">
        <div class="my-code-dialog-bg"></div>
        <div class="my-code-dialog-content">
            <img src="@/assets/images/but_close@2x.png"
                 alt=""
                 @click="$emit('codeStatus')"
                 class="but_close" />
            <p class="title">输入验证码</p>
            <p class="tele-detail">输入{{encrypt}}收到的短信验证码</p>
            <div class="code-btn">
                <button :disabled="sendAgin"
                        :class="{'send-click':!sendAgin}"
                        @click="goSendAgain">重新发送<i v-if="countdown > 0">（{{countdown}}s）</i>
                </button>
            </div>
            <section>
                <get-code v-model="authCode"
                          ref="getCode"></get-code>
            </section>
            <div class="get-money">
                <ck-button @click="submitCode"
                           :disabled="!authCode">确认提现{{Number(amount).toFixed(2)}}元</ck-button>
            </div>
        </div>
    </section>
</template>
<script>
    import getCode from './get-code'
    export default {
        props: ['codeDialog', 'mobile', 'amount'],
        components: {
            getCode
        },
        data() {
            return {
                sendAgin: true,
                itv: null,
                countdown: 0,
                encrypt: '',
                authCode: ''
            }
        },
        watch: {
            countdown(curVal, oldVal) {
                if (curVal <= 59) {
                    this.sendAgin = true
                }
                if (curVal === 0) {
                    this.sendAgin = false
                }
            }
        },
        methods: {
            submitCode() {
                this.$emit('submitCode', this.authCode)
            },
            goSendAgain() { // 重新发送验证码
                this.$emit('goSendAgain')
            },
            goSend() { // 发送验证码
                this.$nextTick(() => {
                    this.$refs.getCode.$refs.input.focus();
                    this.authCode = '';
                })
                let encrypt = this.mobile.substr(0, 3) + "****" + this.mobile.substr(7)
                this.encrypt = encrypt
                this.countdown = 59;
                clearInterval(this.itv);
                this.itv = setInterval(() => {
                    this.countdown -= 1;
                    if (this.countdown === 0) {
                        clearInterval(this.itv);
                        this.itv = null;
                    }
                }, 1000)
            }
        }

    }
</script>
<style lang="scss" scoped>
    .my-code-dialog {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: 10;
        top: 0;
        left: 0;
        .my-code-dialog-bg {
            position: fixed;
            width: 100%;
            height: 100%;
            z-index: 11;
            top: 0;
            left: 0;
            background: #000;
            opacity: 0.7;
        }
        .my-code-dialog-content {
            position: fixed;
            z-index: 12;
            width: 548px;
            height: 478px;
            left: 50%;
            margin-left: -280px;
            background: #fff;
            top: 50%;
            margin-top: -240px;
            .but_close {
                display: block;
                width: 48px;
                height: 87px;
                position: absolute;
                top: -70px;
                right: 0;
            }
            .title {
                display: block;
                text-align: center;
                font-weight: 400;
                color: #0f0f0f;
                font-size: 38px;
                margin: 26px 0 37px;
            }
            .tele-detail {
                font-size: 28px;
                font-weight: 400;
                color: #b7b7b7;
                text-align: center;
            }
            .code-btn {
                text-align: center;
                font-size: 28px;
                button {
                    display: inline-block;
                    i {
                        font-size: 28px;
                        display: inline-block;
                        color: #f05962;
                        font-style: normal;
                    }
                }
                .send-click {
                    color: #f05962;
                }
            }
            .get-money {
                width: 80%;
                margin: 48px auto 0;
            }
        }
    }
</style>
