<template>
    <div>
        <frame-view-float title="微信测试"
                          :z="120"
                          class="main">

            <div class="main-content">微信测试</div>
        </frame-view-float>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        this.$store.dispatch('demo/invokePushItems')
    }
}
</script>
<style lang="scss" scoped>
.main {
    .main-content {
        font-size: 40px;
    }
}
</style>
