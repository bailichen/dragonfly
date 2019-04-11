<template>
    <frame-view-float class="my-star-status"
                      :class="`status-${status}`"
                      :z="130"
                      title="我的创客星"
                      v-theme:background>
        <div class="header">
            <img v-if="status==='waiting'"
                 src="../../assets/images/star-status-waitting@3x.png"
                 alt="">
            <img v-else-if="status==='success'"
                 src="../../assets/images/star-status-success@3x.png"
                 alt="">
            <img v-else-if="status=='failed'"
                 src="../../assets/images/star-status-failed@3x.png"
                 alt="">
            <div class="text-wrapper">
                <div class="outter-circle">
                    <div class="inner-circle"
                         v-theme:color="0">
                        {{statusText}}
                    </div>
                </div>
            </div>
        </div>
        <div class="info"
             v-if="status==='success'||status==='waiting'">
            <div class="info-item">
                <span v-theme:color>姓名</span>
                <span v-theme:color="2">{{(name||'').replace(/.{1}(.)/,'*$1').replace(/.{2}(.)/,'**$1').replace(/.{3,}(.)/,'***$1')}}</span>
            </div>
            <div class="info-item">
                <span v-theme:color>手机号</span>
                <span v-theme:color="2">{{(phone||'').replace(/(\d{3})\d{4}(\d{3})/,'$1****$2')}}</span>
            </div>
            <div class="info-item">
                <span v-theme:color>身份证号</span>
                <span v-theme:color="2">{{(idNumber||'').replace(/(\d{3})\d+(\d{4}|\d{3}(X|x))/,'$1***********$2')}}</span>
            </div>
            <!-- <div class="info-item">
                <span v-theme:color>银行卡号</span>
                <span v-theme:color="2">{{(cardNumber||'').replace(/\d+(\d{4})/,'**************$1')}}</span>
            </div> -->
        </div>
        <div class="msg"
             v-if="msg && status==='failed'">
            <div class="text">{{msg}}</div>
            <div class="button">
                <ck-button outline>重新填写</ck-button>
            </div>
        </div>
        <div class="star-agreement">
            <span>你已同意并签订</span>
            <a @click="agreementShown=true">《个人工作室注册协议》</a>
        </div>
        <service-bottom></service-bottom>
        <frame-view-sub slot="sub"
                        v-model="agreementShown"
                        :z="140"
                        title="个人工作室注册协议">
            <agreement-content></agreement-content>
        </frame-view-sub>
    </frame-view-float>
</template>
<script>
    import ua from 'ua';
    import AgreementContent from './my-star-agreement-content.vue'

    export default {
        components: {
            AgreementContent
        },
        data() {
            return {
                name: '',
                phone: '',
                idNumber: '',
                cardNumber: '',
                msg: '',
                agreementShown: false
            }
        },
        computed: {
            status() {
                const statusNumber = parseInt(this.$route.params.status);
                switch (statusNumber) {
                    case 30: return 'success';
                    default: return '';
                }
                return result;
            },
            statusText() {
                const { status } = this;
                if (status === 'waiting') return '审核中';
                if (status == 'success') return '开通成功';
                if (status == 'failed') return '开通失败';
            },
        },
        created() {
            window.set_starData = data => {
                const obj = JSON.parse(data);

                this.name = obj.name;
                this.phone = obj.phone;
                this.idNumber = obj.idNumber;
                this.cardNumber = obj.cardNumber;
                this.msg = "信息审核失败";

                return data;
            }


            if (ua.isIosApp) {
                window.webkit.messageHandlers.request_starData.postMessage('');
            }
            else if (ua.isAndroidApp) {

                const data = window.control.get_starData();
                const obj = JSON.parse(data);

                this.name = obj.name;
                this.phone = obj.phone;
                this.idNumber = obj.idNumber;
                this.cardNumber = obj.cardNumber;
                this.msg = "信息审核失败";

            }
        }
    }
</script>
<style lang="scss" scoped>
    .my-star-status {
        .header {
            position: relative;
            img {
                width: 100%;
            }

            .text-wrapper {
                position: absolute;
                left: 0;
                top: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
                padding-bottom: 20%;

                .outter-circle {
                    width: 226px;
                    height: 226px;
                    border-radius: 50%;
                    border: 1px solid rgba(#fff, 0.42); /*no*/
                    padding: 16px;

                    .inner-circle {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        border: 3px solid rgba(#fff, 0.42); /*no*/

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        font-size: 36px;
                    }
                }
            }
        }

        .info {
            padding-top: 96px;
            padding-left: 180px;

            .info-item {
                font-size: 28px;
                line-height: 60px;

                span {
                    display: inline-block;
                    &:first-child {
                        width: 132px;
                    }
                }
            }
        }
        .star-agreement {
            display: block;
            text-align: center;
            font-weight: 400;
            padding-top: 60px;
            font-size: 20px;
            span {
                display: inline-block;
            }
            a {
                display: inline-block;
                color: #f05962;
                text-decoration: none;
            }
        }
        .msg {
            padding-top: 60px;

            .text {
                text-align: center;
                font-size: 28px;
                line-height: 112px;
            }
            .button {
                padding: 28px 248px;
            }
        }
    }
</style>
