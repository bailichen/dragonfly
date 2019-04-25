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
    </div>
</template>
<script>
export default {
    data() {
        return {
            userInfo: {}
        }
    },
    mounted() {
        this.$request('wechartClass').then(res => {
            console.log(res);
        })
    },
    methods: {
        handleClick() {
            this.userInfo = this.$store.state.userInfo.userInfoDetail
            console.log(this.userInfo);
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
