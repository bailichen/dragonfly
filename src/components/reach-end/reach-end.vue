<template>
    <div class="reach-end">
        <i></i>
        <span v-theme:color="3">
            <slot></slot>
        </span>
        <i></i>
    </div>
</template>
<script>
    export default {

    }
</script>
<style lang="scss" scoped>
    .reach-end {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 28px 30px;
        height: 26px + 28px * 2;
        i {
            position: relative;
            display: block;
            flex-grow: 1;
            height: 1px; /*no*/
            background: rgba(#000, 0.12);

            &:first-child::after,
            &:last-child::before {
                content: '';
                position: absolute;
                top: -1px; /*no*/
                display: block;
                width: 3px; /*no*/
                height: 3px; /*no*/
                background: rgba(#000, 0.12);
            }
            &:first-child::after {
                right: -3px; /*no*/
            }
            &:last-child::before {
                left: -3px; /*no*/
            }
        }

        span {
            padding: 0 38px;
            font-size: 14px;
            line-height: 24px;
            padding-bottom: 1px;
        }
    }
</style>
