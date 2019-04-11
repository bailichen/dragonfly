<template>
    <button class="ck-button-inline"
            @click="handleClick">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        methods: {
            handleClick(evt) {
                this.$emit('click', evt)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .ck-button-inline {
        width: 48px;
        height: 48px;
    }
</style>
