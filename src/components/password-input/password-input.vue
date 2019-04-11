<template>
    <section class="password-input">
        <span class="label-text">{{labelText}}</span>
        <div class="right-part">
            <slot name="right-part"></slot>
        </div>

    </section>
</template>
<script>
export default {
    props: {
        labelText: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.password-input {
    display: flex;
    justify-content: flex-start;
    border-bottom: 2px solid #f2f2f2;
    align-items: center;
    padding: 10px 0;
    margin-top: 60px;
    .label-text {
        display: block;
        font-size: 34px;
        color: #1d1d26;
        line-height: 40px;
        flex: 0 0 auto;
    }
    .right-part {
        flex: 1;
    }
}
</style>
