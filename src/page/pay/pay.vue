<template>
    <div class="pay">
        <div class="pay-top">
            <h1>申请人信息</h1>
            <div class="user-write">
                <div class="write-item">
                    <span>姓名</span>
                    <input v-model="filter.name"
                           type="text"
                           placeholder="请填写姓名" />
                </div>
                <div class="write-item">
                    <span>微信号</span>
                    <input v-model="filter.wxname"
                           type="text"
                           placeholder="请填写请填写微信" />
                </div>
                <div class="write-item">
                    <span>手机号码</span>
                    <input v-model="filter.tel"
                           type="text"
                           placeholder="请填写手机号" />
                </div>
            </div>
            <h1>订单信息</h1>
            <div class="order-list">
                <div class="order-list-item">
                    <div class="choose-img">
                        <img src="../../assets/img/select.png"
                             alt="" />
                    </div>
                    <div class="choose-text">
                        <div class="choose-text-left">
                            <span>红蜻蜓</span>
                            <i>分成30%</i>
                        </div>
                        <div class="choose-text-right">
                            249元/年
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-button">
            <span>总计：249元</span>
            <button class="query-btn"
                    @click="handlePay">确认购买</button>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            filter: {
                name: '',
                wxname: '',
                tel: ''
            }
        }
    },
    mounted() {
    },
    methods: {
        onBridgeReady(args) {
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId": args.appId,     //公众号名称，由商户传入     
                    "timeStamp": args.timeStamp,         //时间戳，自1970年以来的秒数     
                    "nonceStr": args.nonceStr, //随机串     
                    "package": args.package,
                    "signType": args.signType,         //微信签名方式：     
                    "paySign": args.paySign //微信签名 
                },
                function (res) {
                    alert(res.err_msg)
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        alert('支付成功');
                    } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                        alert('已取消支付');
                    } else {
                        alert('支付失败');
                    }
                }
            );
        },
        handlePay() {

            const infoData = JSON.parse(window.sessionStorage.getItem('userInfo'))
            this.$request('UnifiedOrderApi2', {
                openid: infoData.openid
            }).then(({ data }) => {
                console.log(data);
                let args = data;
                if (typeof WeixinJSBridge == "undefined") {
                    if (document.addEventListener) {
                        document.addEventListener('WeixinJSBridgeReady', this.onBridgeReady(args), false);
                    } else if (document.attachEvent) {
                        document.attachEvent('WeixinJSBridgeReady', this.onBridgeReady(args));
                        document.attachEvent('onWeixinJSBridgeReady', this.onBridgeReady(args));
                    }
                } else {
                    this.onBridgeReady(args);
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.pay {
    height: 100%;
    .pay-top {
        height: calc(~"100% - 120px");
        display: block;
         overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        h1 {
            display: block;
            padding: 32px 34px;
            font-size: 36px;
            font-weight: normal;
            background: #ededed;
            color: #646464;
        }
        .user-write {
            padding: 24px 36px 58px;
            .write-item {
                border-bottom: 1px solid #969696; /*no*/
                display: flex;
                justify-content: flex-start;
                align-items: center;
                span {
                    color: #646464;
                    font-size: 36px;
                    display: block;
                    width: 200px;
                }
                input {
                    display: block;
                    font-size: 36px;
                    padding: 32px 0;
                }
            }
        }

        .order-list {
            padding-top: 20px;
            padding: 20px 32px;
            box-sizing: border-box;
            .order-list-item {
                margin-top: 24px;
                border-radius: 10px; /*no*/
                border: 1px solid #d1090c; /*no*/
                position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 160px;
                padding: 0 35px;
                .item-input {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                }
                .choose-img {
                    img {
                        display: block;
                        width: 36px;
                        height: 36px;
                        margin-right: 35px;
                    }
                }
                .choose-text {
                    display: flex;
                    justify-content: space-between;
                    width: 540px;
                    font-size: 36px;
                    color: #000000;
                    .choose-text-left {
                        span {
                            display: inline-block;
                            margin-right: 30px;
                        }
                        i {
                            font-style: normal;
                            color: #d1090c;
                        }
                    }
                }
            }
        }
    }
    .bottom-button {
        display: flex;
        justify-content: flex-start;
        height: 120px;
        span{
            display: block;
            width: 60%;
            text-align: center;
            line-height: 120px;
            font-size:36px;
            color: #D1090C;
            border-top: 1px solid #B4B4B4;/*no*/
        }
        .query-btn {
            display: block;
            width: 60%;
            color: #fff;
            font-size:36px;
            background: #D1090C;
            text-align: center;
            
        }
    }
}
</style>
