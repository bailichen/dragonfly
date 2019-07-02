<template>
    <div class="no-data">
        <img src="../../assets/img/no-data.png"
             alt="" />
        <p>暂无数据</p>
    </div>
</template>
<script>


export default {}
</script>
<style lang="scss" scoped>
.no-data {
    padding: 80px 0 40px;
    img {
        display: block;
        width: 228px;
        height: 164px;
        margin: 0 auto
    }
    p{
        display: block;
        text-align: center;
        font-size: 32px;
        color: #797979;
        padding-top: 45px;
    }
}
</style>