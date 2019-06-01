<template>
    <div class="qr-code">
        <img src="../../assets/img/wx.png"
             alt=""
             class="wx-code" />
        <p class="title">长按识别添加好友</p>
        <p>1、详细了解会员政策</p>
        <p>2、已是会员务必加好友入培训群，专人手把手教你赚钱</p>
        <p>3、已入培训群会员，注意群消息</p>
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
.qr-code {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    padding: 140px 140px 0;
    .wx-code {
        width: 466px;
        height: 466px;
        display: block;
        margin: 0 auto;
    }
    p{
        padding-left: 18px;
        text-align: left;
        font-size:30px;
        color: #000000;
        line-height:72px;
    }
    .title{
        font-weight: bold;
        font-size:36px;
        padding: 40px 0 20px 18px;
    }
}
</style>