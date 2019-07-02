<template>
    <div class="list-loading">
        <i class="icon-loading"></i>加载中…
    </div>
</template>
<script>

export default {}
</script>
<style lang="scss" scoped>
.list-loading {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 64px;
    font-size: 30px;
    i {
        display: block;
        margin: 0 16px;
        animation: spin 1.8s infinite linear;
        width: 50px;
        height: 50px;
        background: url("../../assets/img/load-data.png") no-repeat;
        background-size: 100% 100%;
    }

    @keyframes spin {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>
