<template>
    <div class="main">
        main
        <img src="../../assets/img/avator.jpg"
             alt="">
    </div>
</template>
<script>
export default {
    mounted() {
        this.$request('wechartClass').then(res => {
            console.log(res);
        })
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
