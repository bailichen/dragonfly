<template>
    <ck-input class="ck-input-captcha"
              v-model="currentValue"
              :tips="tips"
              maxlength="6"
              type="tel">
        <div class="captcha-wrapper">
            <ck-button outline
                       small
                       @click="handleCaptchaBtnClick"
                       :disabled="countdown>0 && countdown<=60">{{btnText}}</ck-button>
        </div>

    </ck-input>
</template>
<script>
    import TwoWay from 'two-way';
    export default {
        mixins: [TwoWay],
        props: ['tips'],
        data() {
            return {
                itv: null,
                countdown: -1
            }
        },
        computed: {
            btnText() {
                const { countdown } = this;

                let result = '';

                if (countdown === -1) {
                    result = '发送验证码';
                }

                if (countdown > -1 && countdown <= 60) {
                    result = `${countdown}s后重发`;
                }
                if (countdown === 0) {
                    result = '重发验证码';
                }
                return result;
            }
        },
        methods: {
            handleCaptchaBtnClick() {
                this.countdown = 60;
                this.itv = setInterval(() => {
                    this.countdown -= 1;

                    if (this.countdown === 0) {
                        clearInterval(this.itv);
                        this.itv = null;
                    }
                }, 1000)

                this.$emit('button');
            },
            reset() {
                this.countdown = -1;
                clearInterval(this.itv);
                this.itv = null;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .ck-input-captcha {
        /deep/ input {
            font-size: 40px;
        }
        .captcha-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 168px;
            height: 100%;
        }
    }
</style>
