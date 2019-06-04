<template>
    <div class="up-member"
         @touchmove.prevent>

        <div class="member-content">
            <div class="close" @click="$emit('handleClose')">
                <img src="../../assets/img/close.png"
                     alt="">
            </div>

            <img src="../../assets/img/member.jpg"
                 alt=""
                 class="member-img">
            <p>欢迎来到会员商城</p>
            <p class="center-p">加入会员 立享特权</p>
            <p>特惠买课 分享赚收益</p>
            <button class="learn-more" @click="handleDetail">点击了解更多特权</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() { },
    methods: {
        handleDetail(){
            this.$router.push({name:'detail'})
        }
    },
}
</script>
<style lang="less" scoped>
.up-member {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    .member-content {
        background: #f5f6fa;
        width: 520px;
        box-sizing: border-box;
        padding: 50px;
        position: relative;
        box-shadow: 0 0 20px #c4c5c8;
        border-radius: 10px; /*no*/
        .close {
            position: absolute;
            right: 0px;
            top:0px;
            img {
                display: block;
                width: 25px;
                height: 25px;
                padding: 16px;
            }
        }
        .member-img {
            display: block;
            width: 100%;
            height: auto;
        }
        p {
            display: block;
            text-align: center;
            color: #000;
            font-size: 30px;
            padding-top: 30px;
        }
        .center-p {
            font-size: 36px;
        }
        .learn-more {
            display: block;
            width: 310px;
            margin: 48px auto 10px;
            height: 60px;
            background: #d81e06;
            color: #fff;
            font-size: 30px;
            border-radius: 30px; /*no*/
        }
    }
}
</style>