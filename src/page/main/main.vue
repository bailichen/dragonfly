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
        <section>
            <div v-if="tabId == 0">

                <index-recommend></index-recommend>
            </div>
        </section>

    </div>
</template>
<script>
import IndexTab from './index-tab'
import IndexRecommend from './index-recommend.vue'
export default {
    components: {
        IndexTab,
        IndexRecommend
    },
    data() {
        return {
            tabId:"0",
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
        }
    }
}
</script>
<style lang="less" scoped>

</style>
