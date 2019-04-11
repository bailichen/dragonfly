<template>
    <frame-view-sub class="my-withdraw-record"
                    :z="130"
                    title="申请提现成功"
                    @back="successBack"
                    v-model="currentValue">
        <div class="content">
            <div class="icons">
                <img src="@/assets/images/lmg_tixian_ok@2x.png"
                     alt="" />
            </div>
            <div class="tips">
                <div class="main-tips">
                    <p class="tips-money"><i>￥</i>{{Number(amount).toFixed(2)}}</p>
                    <p class="tips-bank">{{bankName}}（尾号{{bankTail}}）</p>
                </div>
                <div class="sub-tips"
                     v-html="subTips">
                </div>

            </div>
            <div class="btns">
                <ck-button outline
                           @click="handleBtnClick">{{btnText}}</ck-button>
            </div>
        </div>
        <service-bottom></service-bottom>
    </frame-view-sub>
</template>
<script>
    import TwoWay from 'two-way';
    export default {
        mixins: [TwoWay],
        props: ['amount', 'bankName', 'bankTail', 'is-service'],
        data() {
            return {
                btnText: '完成',
            }
        },
        computed: {
            subTips() {
                if (this.isService) {
                    return '预计2小时内全部到账，但由于提现资金来源不同，您的一笔提现金额会在不同时间段分批到账。'
                }
                else {
                    return '预计2小时内到账'
                }
            }
        },
        methods: {
            successBack() {
                window.location.reload(true)
            },
            handleBtnClick() {
                this.currentValue = false;
                window.location.reload(true)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .content {
        .icons {
            width: 200px;
            height: 168px;
            margin: 120px auto 40px;
            img {
                display: block;
                height: 200px;
                height: 168px;
            }
        }

        .tips {
            .main-tips {
                font-size: 36px;
                line-height: 60px;
                text-align: center;
                font-weight: 600;
                p {
                    margin: 0;
                    text-align: center;
                }
                .tips-money {
                    font-size: 60px;
                    color: #333;
                    font-weight: 500;
                    i {
                        display: inline-block;
                        font-style: normal;
                        font-size: 38px;
                    }
                }
                .tips-bank {
                    font-weight: 400;
                    font-size: 24px;
                    color: #b7b7b7;
                }
            }
            .sub-tips {
                text-align: center;
                font-size: 24px;
                line-height: 48px;
                color: #333333;
                padding: 64px 25%;
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
</style>
