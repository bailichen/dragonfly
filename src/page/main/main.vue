<template>
    <div class="main">
        <button @click="handleClick">点击获取用户信息</button>
        <div>
            用户信息openid： {{this.userInfo.openid}} <br />
            headimgurl : {{this.userInfo.headimgurl}} <br />
            nickname :{{this.userInfo.nickname}} <br />
            sex: {{this.userInfo.sex}} <br />
            ts :{{this.userInfo.ts}} <br />
            unionid: {{this.userInfo.unionid}} <br />
        </div>
        <button @click="handlePay1">支付订单1</button>
        <button @click="handlePay2">支付订单2</button>
        <button @click="handlePay3">支付订单3</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userInfo: {
                openid: '',
                headimgurl: '',
                nickname: '',
                sex: '',
                ts: '',
                unionid: ''
            }
        }
    },
    mounted() {
        this.$request('wechartClass').then(({ data }) => {
            // console.log(data);
        })
    },
    methods: {
        handleClick() {
            this.userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'))
            console.log(this.userInfo);
        },
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
                    if (res.err_msg == "get_brand_wcpay_request:ok") {
                        paySuccessCallback();
                    } else if (res.err_msg == "get_brand_wcpay_request:cancel") {
                        alert('已取消支付');
                    } else {
                        alert('支付失败');
                    }
                }
            );
        },
        timestamp() {
            return Date.parse(new Date())
        },
        handlePay1() {
            const infoData = JSON.parse(window.sessionStorage.getItem('userInfo'))
            this.$request('UnifiedOrderApi1', {
                openid: infoData.openid
            }).then(({ data }) => {
                console.log(data);
            })
        },
        handlePay2() {
            const infoData = JSON.parse(window.sessionStorage.getItem('userInfo'))
            this.$request('UnifiedOrderApi2', {
                openid: infoData.openid
            }).then(({ data }) => {
                console.log(data);
            })
        },
        handlePay3() {
            const infoData = JSON.parse(window.sessionStorage.getItem('userInfo'))
            this.$request('UnifiedOrderApi3', {
                openid: infoData.openid
            }).then(({ data }) => {
                console.log(data);
            })
        },
        handlePay() {
            const infoData = JSON.parse(window.sessionStorage.getItem('userInfo'))
            this.$request('UnifiedOrderApi', {
                openid: infoData.openid
            }).then(({ data }) => {
                console.log(data);
                let args = {
                    "appId": data.appid,     //公众号名称，由商户传入     
                    "timeStamp": this.timestamp(),         //时间戳，自1970年以来的秒数     
                    "nonceStr": data.nonce_str, //随机串     
                    "package": `prepay_id=${data.prepay_id}`,
                    "signType": 'HMAC-SHA256',         //微信签名方式：     
                    "paySign": data.sign //微信签名 
                }
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
.main {
    font-size: 24px;
    img {
        width: 260px;
        height: 260px;
    }
}
</style>
