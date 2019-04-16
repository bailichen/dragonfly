<template>
    <div>
        <frame-view-float title="微信测试" :z="120" class="main">
                微信测试
        </frame-view-float>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$store.dispatch('demo/invokePushItems')
    }
}
</script>
<style lang="scss" scoped>
</style>
