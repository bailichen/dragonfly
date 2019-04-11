<template>
    <frame-view-float class="my-star"
                      :z="120"
                      title="创客星">
        <!-- <button @click="$router.push({name:'my-star-agreement'})">协议</button>
        <button @click="$router.push({name:'my-star-status',params:{status:1}})">状态</button> -->
        <router-view slot="router-view"></router-view>
    </frame-view-float>
</template>
<script>
    export default {

    }
</script>
<style lang="scss">
</style>
