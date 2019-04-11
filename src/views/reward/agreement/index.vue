<template>
    <frame-view-float class="my-star"
                      :z="120"
                      title="劳务协议">
        <div class="header">
            <img src="@/assets/images/my-star-agreement-picture@3x.png">
        </div>
        <div class="title"
             v-theme:color>
            该协议共包括以下子协议
        </div>
        <div class="list"
             v-theme:color>
            <a v-for="(item,index) of companies"
               :key="item"
               @click="handleDetailLinkClick(index)">
                <span>《{{item}} 劳务协议》</span>
                <span>></span>
            </a>
        </div>
        <agreement-detail slot="sub"
                          :id="id"
                          v-model="detail"></agreement-detail>
    </frame-view-float>
</template>
<script>
    import companies from './company-name.json';
    import AgreementDetail from './agreement-detail.vue';

    export default {
        components: {
            AgreementDetail
        },
        data() {
            return {
                companies,
                id: -1,
                detail: false
            }
        },
        methods: {
            handleDetailLinkClick(index) {
                //this.$router.push({ name: 'reward-agreement-detail', params: { id: index } })
                this.detail = true;
                this.id = index;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .header {
        padding-top: 18px;
        text-align: center;
        img {
            width: 192px;
        }
    }
    .title {
        font-size: 42px;
        line-height: 80px;
        font-weight: 600;
        text-align: center;
    }

    .list {
        padding-top: 80px;
        a {
            font-size: 24px;
            line-height: 68px;
            padding: 0 32px;
            display: flex;
            justify-content: space-between;
        }
    }
</style>
