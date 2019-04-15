<template>
    <div>
        <frame-view-float title="main" :z="120" class="main">
                1232
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
