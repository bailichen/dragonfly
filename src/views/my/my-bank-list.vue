<template>
    <frame-view-sub class="my-withdraw-record"
                    :z="130"
                    title="选择银行卡"
                    @back="listBack"
                    v-model="currentValue">
        <i slot="btns-right"
           class="add-btn"
           @click="addClick">添加</i>
        <section>
            <div class="bank-list">
                <touch-slider v-for="item in bankList"
                              :key="item.id"
                              @msg-from-child="getMsgFromChild(item)">
                    <div class="bankcard-item"
                         @click="chooseBank(item)">
                        <div class="bankcard-left">
                            <img :src="item.bank_img"
                                 alt=""
                                 v-if="item.bank_img && item.bank_img.length > 0">
                            <img v-else
                                 src="@/assets/images/bankcard.png"
                                 alt="" />
                        </div>
                        <div class="bankcard-right">
                            <p class="bank_name">{{item.bank_name}}</p>
                            <p class="card_type">{{item.card_type ? item.card_type : '储蓄卡'}}</p>
                            <p class="bank_no">
                                <span>****</span>
                                <span>****</span>
                                <span>****</span>
                                <span>{{item.bank_no}}</span>
                            </p>
                        </div>
                    </div>
                </touch-slider>
            </div>
            <null-data v-if="nullStatus"></null-data>
        </section>
    </frame-view-sub>
</template>
<script>
import ua from 'ua';
import TwoWay from 'two-way';
import touchSlider from './touch-slider.vue';
export default {
    props: ['bankTail'],
    mixins: [TwoWay],
    components: {
        touchSlider
    },
    data() {
        return {
            bankList: [],
            nullStatus: false
        }
    },
    mounted() {

        this.getBankData()
        window.fetchBankList = this.getBankData
    },
    methods: {
        chooseBank(item) {
            this.$emit('chooseBank', item)
            this.currentValue = false;
        },
        findBankTail() {
            let flag = this.bankList.find((value, index) => {
                return value.bank_no == this.bankTail
            })
            return flag ? true : false
        },
        listBack() {
            if (this.bankList.length <= 1 || !this.findBankTail()) {
                this.$emit('bankListBack')
            }
        },
        addClick() {
            if (this.bankList.length < 3) {
                if (ua.isIosApp) {
                    window.webkit.messageHandlers.addBankCard.postMessage('');
                } else if (ua.isAndroidApp) {
                    window.control.addBankCard();
                }
            } else {
                this.$toast('最多绑定3张银行卡!')
            }

        },
        getMsgFromChild(item) {
            this.$request('bankUnbind', {
                bindId: item.id
            }).then(res => {
                console.log(res);
                if (res.data.code === 0) {
                    this.$toast('操作成功！')
                    this.getBankData()
                } else {
                    this.$toast(res.data.msg)
                }
            })
        },
        getBankData() {
            this.$request('bankBankcardList').then(res => {
                let { data } = res
                if (data.code === 0) {
                    this.bankList = data.data.list
                    this.bankList && this.bankList.length > 0 ? this.nullStatus = false : this.nullStatus = true
                } else {
                    this.$toast(data.msg)
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~utils-scss";
.add-btn {
    display: block;
    font-style: normal;
    font-size: 30px;
    height: 100%;
    line-height: 88px;
}
.bank-list {
    .bankcard-item {
        @include clearfix();
        .bankcard-left {
            float: left;
            padding: 14px;
            border-radius: 50%;
            margin: 56px 54px 0 45px;
            background: #fff;
            img {
                display: block;
                width: 50px;
                height: 50px;
            }
        }
        .bankcard-right {
            float: left;
            width: 540px;
            font-size: 24px;
            color: #fff;
            font-weight: 400;
            p {
                margin: 0;
            }
            .bank_name {
                font-size: 36px;
                margin: 20px 0 16px;
            }
            .bank_no {
                padding-top: 30px;
                span {
                    font-size: 34px;
                    display: inline-block;
                    margin-right: 50px;
                }
                span:last-child {
                    margin: 0;
                }
            }
        }
    }
}
</style>
