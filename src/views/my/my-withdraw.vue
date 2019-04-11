<template>
    <frame-view-float class="my-withdraw"
                      :z="120"
                      title="提现">
        <ck-button-inline slot="btns-right"
                          v-if="!isService"
                          text="记录"
                          @click="recordShow=true">
            <i class="iconfont icon-list"></i>
        </ck-button-inline>
        <button slot="btns-right"
                v-else
                class="award-record"
                @click="awardRecordShow=true">
            提现记录
        </button>
        <div class="withdraw-container"
             v-show="inited">
            <!-- <div class="bank-list-tips"
                 v-theme:color>请选择提现方式:</div> -->
            <div class="bankcard-list">
                <ck-radio v-for="bankcard of bankcards"
                          :key="bankcard.id"
                          name='bankcard'
                          class="bankcard-item"
                          :value="bankcard.id"
                          v-model="selectedBankcard"
                          space-between
                          v-theme:background
                          v-theme:shadow>
                    <div class="bankcard-item-wrapper"
                         @click="goToBankList">
                        <div class="image">
                            <img src="../../assets/images/bankcard.png">
                        </div>
                        <div class="description"
                             v-theme:color="2">
                            <div class="type">银行卡</div>
                            <div>
                                <div v-if="bankcard.id"
                                     class="bank">{{bankcard.name}}，尾号{{bankcard.tail}}</div>
                                <div class="bank"
                                     v-else>请添加银行卡</div>
                            </div>
                        </div>
                        <div class="arrow-part">
                            <img src="@/assets/images/nav_back@2x.png"
                                 alt="" />
                        </div>
                    </div>
                </ck-radio>
            </div>
            <div v-if="!isService"
                 class="amount"
                 v-theme:background>
                <div class="available">
                    <div class="text">
                        <span v-theme:color>可用余额：</span>
                        <span v-theme:color="11">{{available}}元</span>
                    </div>
                    <div class="btns">
                        <button v-theme:color="11"
                                v-ripple
                                @click="handleAmountAllBtnClick">全部提现</button>
                    </div>
                </div>
                <div class="amount-title"
                     v-theme:color>
                    提现金额
                </div>
                <ck-input-cash v-model="amount"
                               ref="amountDom"></ck-input-cash>
                <div class="amount-tips"
                     v-theme:color="2">
                    <!-- 单笔限制1-{{limit}}元，单日限制{{times}}次。 -->
                    {{rule.text}}
                </div>
            </div>
            <div v-else
                 class="amount-reward"
                 v-theme:background
                 v-show="available>=1">
                <div class="tips">请选择提现金额</div>
                <div class="selecter">
                    <div class="selecter-item"
                         :class="{active:amount===item}"
                         v-for="item of availableList"
                         :key="item"
                         @click="amount=item">{{`${item}元`}}</div>
                </div>
                <div class="available">当前余额：{{available}}元</div>
            </div>
            <div class="btn-bottom"
                 v-show="!isService || (isService && available>=1)">
                <ck-button @click="handleSubmitBtnClick"
                           :disabled="!(bankcards[0] && bankcards[0].id) || !amount">确定</ck-button>
                <div class="tips"
                     v-if="isService">
                    <img src="@/assets/images/info.png">
                    <span v-theme:color="2">{{rule.text}}</span>
                </div>
            </div>
            <div class="blank"
                 v-if="isService && available<1"
                 v-theme:background>
                <div class="img">
                    <img src="~@/assets/images/withdraw-blank.png">
                </div>
                <div class="text">当前余额不足1元，暂无法提现</div>
            </div>
        </div>
        <my-withdraw-record slot="sub"
                            v-if="recordShow"
                            v-model="recordShow"></my-withdraw-record>
        <my-withdraw-award-record slot="sub"
                                  v-if="awardRecordShow"
                                  v-model="awardRecordShow"></my-withdraw-award-record>
        <my-money-success slot="sub"
                          v-if="moneySuccess"
                          v-model="moneySuccess"
                          :amount="amount"
                          :bankName="bankName"
                          :bankTail="bankTail"
                          :is-service="isService"></my-money-success>
        <my-code-dialog slot="sub"
                        ref="codeDialog"
                        :codeDialog="codeDialog"
                        @goSendAgain="handleCaptchaBtnClick"
                        @submitCode="handleWithdrawDeposit"
                        @codeStatus="codeDialog = false"
                        :mobile="mobile"
                        :amount="amount"></my-code-dialog>
        <my-bank-list slot="sub"
                      v-if="bankList"
                      v-model="bankList"
                      @bankListBack="getInfo"
                      :bankTail="bankTail"
                      @chooseBank="chooseBankData"></my-bank-list>

    </frame-view-float>
</template>
<script>
    import myWithdrawRecord from './my-withdraw-record.vue';
    import myWithdrawAwardRecord from './my-withdraw-award-record.vue';
    import myCodeDialog from './my-code-dialog.vue';
    import myMoneySuccess from './my-money-success.vue';
    import myBankList from './my-bank-list.vue';

    export default {
        components: {
            myWithdrawRecord, // 提现记录
            myCodeDialog, //验证码弹窗
            myMoneySuccess, //提现成功页面
            myBankList, // 银行卡列表页,
            myWithdrawAwardRecord
        },
        data() {
            return {
                bankcards: [],
                selectedBankcard: '',
                available: 0.00,    //可用余额
                amount: '',   //提现金额
                bankTail: '',
                bankName: '', // 银行卡尾号
                captcha: '',
                mobile: '',
                limit: 10000,
                times: 3,
                recordShow: false,
                codeDialog: false,
                moneySuccess: false,
                bankList: false,

                isService: false, // 是否为劳务费用户
                availableList: [],
                awardRecordShow: false,

                inited: false,

                rule: {
                    text: '',
                    maxPerTimes: ''
                }
            }
        },
        methods: {
            goToBankList() { //银行卡列表
                this.bankList = true;
            },
            chooseBankData(item) {
                this.bankcards = [];
                this.bankcards.push({
                    id: item.bank_id,
                    name: item.bank_name,
                    tail: item.bank_no
                });
                this.bankName = item.bank_name;
                this.bankTail = item.bank_no;
            },
            getInfo() {
                this.bankcards = [];
                this.$request('withdrawInfo').then(response => {
                    const data = response.data.data;
                    const bankId = data.bank_id;
                    const bankName = this.bankName = data.bank_name;
                    const bankTail = this.bankTail = data.bank_no;

                    this.bankcards.push({
                        id: bankId,
                        name: bankName,
                        tail: bankTail
                    });

                    this.selectedBankcard = bankId;

                    const available = data.balance;
                    this.available = available;

                    const mobile = data.mobile;
                    this.mobile = mobile;

                    const isService = data.is_service;
                    //this.isService = isService;
                    this.isService = isService;

                    if (isService) {
                        this.availableList = data.tabs;
                    }

                    this.rule.text = data.rule.txt;

                    this.inited = true;
                });
            },
            handleWithdrawDeposit(code) {
                if (!/^\d{6}$/.test(code)) {
                    this.$toast('验证码格式不正确');
                    return;
                }

                if (!this.isService) {
                    this.$request('withdrawRequest', {
                        money: Number(this.amount),
                        bankCardId: this.bankcards[0].id,
                        code: code
                    }).then(response => {
                        const data = response.data.data;
                        const msg = response.data.msg;
                        const code = response.data.code;
                        if (code === 0) {
                            this.moneySuccess = true;
                        } else {
                            this.$toast(msg)
                        }
                    }).finally(result => {
                        this.codeDialog = false;
                    })
                }
                else {
                    this.$request('serviceWithdraw', {
                        money: Number(this.amount),
                        bankCardId: this.bankcards[0].id,
                        code: code
                    }).then(response => {
                        const data = response.data.data;
                        const msg = response.data.msg;
                        const code = response.data.code;
                        if (code === 0) {
                            this.moneySuccess = true;
                        } else {
                            this.$toast(msg)
                        }
                    }).finally(result => {
                        this.codeDialog = false;
                    })
                }

            },
            handleSubmitBtnClick() {
                const { available, captcha } = this;
                const amount = Number(this.amount);
                const bankId = this.bankcards[0].id;
                if (amount < 1) {
                    this.$toast('单笔提现最少1元');
                    return;
                }
                if (amount > this.limit) {
                    this.$toast(`单笔提现最多${this.limit}元`);
                    return;
                }
                if (amount > available) {
                    this.$toast('账户余额不足');
                    return;
                }
                this.handleCaptchaBtnClick();
            },
            handleAmountAllBtnClick() {
                if (this.available < 1) {
                    this.$toast('账户余额不足');
                    return;
                }
                if (this.available >= this.limit) {
                    this.amount = this.limit;
                }
                else {
                    this.amount = this.available;
                }
            },
            handleCaptchaBtnClick() {
                const { mobile } = this;
                this.$request('withdrawCaptcha', {
                    mobile,
                    money: this.amount,
                    bankCardId: this.bankcards[0].id,
                    isService: this.isService ? 1 : 0
                }).then(response => {
                    const data = response.data.data;
                    const code = response.data.code;
                    const msg = response.data.msg;
                    if (code === 0) {
                        this.codeDialog = true;
                        this.$refs.codeDialog.goSend();
                    } else {
                        this.$toast(msg);
                    }
                })
            }
        },
        created() {
            this.getInfo();
        },
        mounted() {
            this.$refs.amountDom.$emit('inputFocus')
        }
    }
</script>
<style lang="scss" scoped>
    @import "~utils-scss";
    .my-withdraw {
        .award-record {
            font-size: 10px; /* no */
        }

        .withdraw-container {
            height: 100%;
            .bank-list-tips {
                font-size: 30px;
                line-height: 50px;
                padding-left: 18px;
            }
            .bankcard-list {
                width: 100%;

                .bankcard-item {
                    height: 125px;
                    .bankcard-item-wrapper {
                        @include clearfix();
                        .image {
                            float: left;
                            height: 84px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img {
                                width: 50px;
                            }
                        }
                        .description {
                            padding-left: 28px;
                            float: left;
                            font-size: 26px;
                            line-height: 42px;
                            max-width: 88%;
                            text-align: justify;
                        }
                        .arrow-part {
                            float: right;
                            height: 84px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img {
                                display: block;
                                width: 17px;
                            }
                        }
                    }

                    /deep/ .input-wapper {
                        display: none;
                    }
                }
            }
            .amount {
                margin: 24px 0;
                padding: 12px 32px;

                .available {
                    @include clearfix();
                    line-height: 86px;

                    .text {
                        float: left;
                        font-size: 24px;
                    }
                    .btns {
                        display: flex;
                        height: 86px;
                        align-items: center;
                        justify-content: center;
                        line-height: inherit;
                        float: right;
                        button {
                            vertical-align: text-top;
                            font-size: 20px;
                            line-height: 20px;
                            padding: 10px 20px;
                            text-decoration-style: solid;
                            text-decoration-line: underline;
                        }
                    }
                }

                .amount-title {
                    font-size: 30px;
                    line-height: 48px;
                }

                .amount-tips {
                    font-size: 24px;
                    line-height: 72px;
                }
            }

            .amount-reward {
                padding: 0 22px;

                .tips {
                    font-size: 28px;
                    line-height: 96px;
                    border-top: 1px solid rgba(#000, 0.12);
                    padding-left: 16px;
                }

                .selecter {
                    @include clearfix();
                    padding: 16px 0;
                    .selecter-item {
                        float: left;
                        width: 144px;
                        height: 96px;
                        margin: 16px;
                        border-radius: 8px;
                        border: 1px solid #f05962; /* no */
                        color: #f05962;
                        font-size: 28px;
                        line-height: 94px;
                        text-align: center;

                        &.active {
                            color: #fff;
                            background: #f05962;
                        }

                        &:last-child {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            font-size: 22px;
                            line-height: 38px;
                            &::before {
                                content: "全部提现";
                            }
                        }
                    }
                }

                .available {
                    font-size: 28px;
                    padding-left: 16px;
                    line-height: 64px;
                }
            }

            .captcha {
                padding: 36px 32px;
                font-size: 30px;
            }

            .btn-bottom {
                padding: 24px;

                .tips {
                    font-size: 24px;
                    line-height: 80px;
                    img {
                        width: 28px;
                        vertical-align: text-bottom;
                    }
                }
            }

            .blank {
                padding: 0 22px;
                height: calc(100% - 125px);
                .img {
                    padding-top: 128px;
                    border-top: 1px solid rgba(#000, 0.12);
                    text-align: center;
                    img {
                        width: 248px;
                    }
                }
                .text {
                    font-size: 28px;
                    line-height: 144px;
                    text-align: center;
                }
            }
        }
    }
</style>
