<template>
    <div class="detail">

        detail
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
.detail {
    font-size:40px;
}
</style>
