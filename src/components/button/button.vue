<template>
    <button ref="main"
            :class="['ck-button',{'is-disabled':isDisabled,'is-small':isSmall,'is-outline':isOutline}]"
            @click="handleClick"
            v-ripple
            v-theme:color="0">
        <slot></slot>
    </button>
</template>
<script>
    export default {
        props: ['disabled', 'small', 'outline'],
        data() {
            return {

            }
        },
        computed: {
            isDisabled() { return vueSingleDirectiveProp(this.disabled) },
            isSmall() { return vueSingleDirectiveProp(this.small) },
            isOutline() { return vueSingleDirectiveProp(this.outline) },
        },
        methods: {
            handleClick($event) {
                !this.isDisabled && this.$emit('click', $event)
            }
        },
        mounted() {
        }
    }
</script>
<style lang="scss" scoped>
    .ck-button {
        width: 100%;
        height: 78px;
        border-width: 1px; /*no*/
        border-style: solid;
        border-color: #f05962;
        border-radius: 39px;
        color: #fff;
        background: #f05962;
        font-size: 30px;
        line-height: 76px;

        &.is-disabled {
            background: #d2d2d2;
            border-color: #d2d2d2;

            &.is-outline {
                color: #d2d2d2;
            }

            /deep/ .ck-ripple-waves {
                display: none;
            }
        }

        &.is-outline {
            background: transparent;
            color: #f05962;
        }

        &.is-small {
            height: 50px;
            line-height: 48px;
            border-radius: 25px;
            font-size: 24px;
        }

        &.is-black {
            border-color: #bababa;
            color: #0f0f0f;
        }
    }
</style>


