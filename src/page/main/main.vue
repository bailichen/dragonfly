<template>
    <div class="main">
        <!-- <button @click="handleClick">点击获取用户信息</button>
        <div>
            用户信息openid： {{this.userInfo.openid}} <br />
            headimgurl : {{this.userInfo.headimgurl}} <br />
            nickname :{{this.userInfo.nickname}} <br />
            sex: {{this.userInfo.sex}} <br />
            ts :{{this.userInfo.ts}} <br />
            unionid: {{this.userInfo.unionid}} <br />
        </div>
        <button @click="handlePay">支付订单</button> -->
        <index-tab @handleTab="handleTab"></index-tab>
        <section class="main-content">
            <index-recommend v-if="tabId == 0" @handleMack="handleMack"></index-recommend>
            <index-other v-else></index-other>
        </section>
        <up-member v-if="coverStatus" @handleClose="coverStatus = false"></up-member>
    </div>
</template>
<script>
import IndexTab from './index-tab'
import IndexRecommend from './index-recommend.vue'
import IndexOther from './index-other.vue'
import UpMember from './up-member.vue'
export default {
    components: {
        IndexTab,
        IndexRecommend,
        IndexOther,
        UpMember
    },
    data() {
        return {
            tabId: "0",
            coverStatus: false
        }
    },

    mounted() {
        this.$request('wechartClass').then(({ data }) => {
            // console.log(data);
        })
    },
    methods: {
        handleTab(id) {
            this.tabId = id
            console.log(id);
        },
        handleMack(){
            this.coverStatus = true
        }
    }
}
</script>
<style lang="less" scoped>
.main {
    height: 100vh;
    width: 100vw;
    .main-content {
        width: 100%;
        height: calc(~"100% - 88px");
    }
}
</style>
