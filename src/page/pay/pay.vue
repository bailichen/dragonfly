<template>
    <div>
        <button class="query-btn" @click="handlePay">确认支付233</button>
    </div>
</template>
<script>
export default {
    methods:{
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
        handlePay(){
            const infoData = JSON.parse(window.sessionStorage.getItem('userInfo'))
            this.$request('UnifiedOrderApi2', {
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
<style lang="scss" scoped>
.query-btn{
    display: block;
    width: 100%;
    height: 80px;
}
</style>
