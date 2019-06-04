<template>
    <div class="success">
        <img src="../../assets/img/order.jpg"
             class="order-img"
             alt="" />
        <p class="congratulation">恭喜你，成为蜻蜓会员</p>
        <p>扫描下方二维码或复制微信号，</p>
        <p>拉你入培训群，手把手教你如何赚钱</p>
        <img src="../../assets/img/wx.png"
             alt=""
             class="wx-code" />
        <p>
            <span>复制微信号：ABC123</span>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    mounted() { },
    methods: {},
}
</script>
<style lang="less" scoped>
.success {
    height: 100%;
    background: #fafafa;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .order-img {
        width: 100%;
        height: auto;
        display: block;
    }
    p {
        text-align: center;
        color: #000;
        font-size: 30px;
        margin-bottom: 40px;
    }
    .congratulation {
        font-weight: bold;
        font-size: 48px;
        padding: 53px 0 88px;
    }
    .wx-code {
        display: block;
        width: 250px;
        height: 250px;
        margin: 0 auto 40px;
    }
}
</style>