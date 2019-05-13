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
        <button @click="handlePay">支付订单</button>
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
        handlePay() {
            this.$router.push({name:'pay'})
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
