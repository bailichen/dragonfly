<template>
    <div class="list-end">
        没有更多了
    </div>
</template>
<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .list-end {
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 64px;
        font-size: 30px;
        &::before {
            content: "";
            display: block;
            height: 1px; /* no */
            width: 160px;
            margin-right: 30px;
            background: rgba(#000, 0.28);
        }

        &::after {
            content: "";
            display: block;
            height: 1px; /* no */
            width: 160px;
            margin-left: 30px;
            background: rgba(#000, 0.28);
        }
    }
</style>
