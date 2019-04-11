<template>
    <section class="find-password">
        <phone-img :phoneNum="userMebile"></phone-img>
        <section class="find-password-content">
            <password-input v-if="!userMebile"
                            labelText="手机号：">
                <div slot="right-part"
                     class="password-input-content">
                    <input slot="right-part"
                           type="text"
                           name="myMebile"
                           placeholder="请输入手机号"
                           v-model="myMebile"
                           maxlength="11" />
                </div>
            </password-input>
            <password-input labelText="验证码：">
                <div slot="right-part"
                     class="password-input-content">
                    <input slot="right-part"
                           type="tel"
                           name="myCode"
                           placeholder="请输入验证码"
                           v-model="code"
                           maxlength="6" />
                    <button class="code-bts"
                            :disabled="codeBts"
                            @click="getCode">{{codeText}}</button>
                </div>
            </password-input>
            <password-input labelText="新密码：">
                <div slot="right-part"
                     class="password-input-content">
                    <input slot="right-part"
                           type="password"
                           name="newPass"
                           placeholder="请输入6～20位数字或字母"
                           v-model="newPass"
                           maxlength="20" />
                </div>
            </password-input>
            <ck-button class="query-bts"
                       :disabled="!code || !newPass || queryBts || !myMebile"
                       @click="handleFindQuery">确定</ck-button>
        </section>
    </section>
</template>
<script>
import ua from 'ua';
export default {
    props: {
        userMebile: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            myMebile: '',
            newPass: '',
            code: '',
            codeText: '获取验证码',
            queryBts: false,
            timer: null,
            codeBts: false,

        }
    },
    mounted() {
        this.myMebile = this.userMebile
    },
    methods: {
        getCode() {
            let codeMobile = /^1[345789]\d{9}$/
            if (!codeMobile.test(this.myMebile)) {
                this.$toast('请输入正确的手机号格式！');
                return false
            }
            this.$request('captchaSend', {
                mobile: this.myMebile,
                type: 1,
                client_type: 1,
                business_type: 5
            }).then(({ data }) => {
                if (data.code === 0) {
                    this.$toast('发送成功')
                    this.codeBts = true;
                    let codeNum = 60;
                    clearInterval(this.timer);
                    this.timer = setInterval(() => {
                        codeNum--;
                        this.codeText = `${codeNum}s`;
                        if (codeNum < 1) {
                            clearInterval(this.timer)
                            this.timer = null;
                            this.codeText = "重新发送"
                            this.codeBts = false;
                        }
                    }, 1000)
                } else {
                    this.$toast(data.msg)
                }
            })

        },
        handleFindQuery() {
            let meibleReg = /^1[345789]\d{9}$/
            let codeReg = /^[0-9]{6}$/
            let passwordReg = /^[a-zA-Z0-9]{6,20}$/;
            if (!meibleReg.test(this.myMebile)) {
                this.$toast('请输入正确的手机号格式！');
                return false
            }
            if (!codeReg.test(this.code)) {
                this.$toast('请输入正确的验证码格式！');
                return false
            }
            if (!passwordReg.test(this.newPass)) {
                this.$toast('请输入6～20位数字或字母的密码格式！');
                return false
            }

            if (this.userMebile) {
                // 设置进来忘记密码
                this.$emit('closePage')
            } else {
                // 登录进来忘记密码
                this.$request('usersPasswordForget', {
                    mobile: this.myMebile,
                    captcha: this.code,
                    new_password: this.newPass,
                    business_type: 5
                }).then(({ data }) => {
                    this.queryBts = true;
                    if (data.code === 0) {
                        this.$toast('修改密码成功')
                        if (ua.isIosApp) {
                            window.webkit.messageHandlers.quitWebView.postMessage('');
                        }
                        if (ua.isAndroidApp) {
                            window.control.quitWebView();
                        }
                    } else {
                        this.$toast(data.msg)
                    }
                }).finally(() => {
                    this.queryBts = false;
                })

            }

        }
    }
}
</script>
<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";
.find-password {
    min-height: 100%;
    background: #fff;
    .find-password-content {
        width: 625px;
        margin: 0 auto;
        .password-input-content {
            @include left;
            margin-left: 35px;
            input {
                display: block;
                flex: 1;
                line-height: 60px;
                height: 60px;
                font-size: 34px;
                border: 0;
                width: 90px;
            }
            .code-bts {
                display: block;
                font-size: 24px;
                width: 140px;
                text-align: right;
                color: #f05962;
            }
        }
        .query-bts {
            margin-top: 106px;
        }
    }
}
</style>
