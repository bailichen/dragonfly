<template>
    <transition>
        <div :class="['fullscreen-dialog',{'is-transparent':isTransparent}]">
            <div class="dialog">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: ['transparent'],
        data() {
            return {};
        },
        computed: {
            isTransparent() { return vueSingleDirectiveProp(this.transparent) }
        },
        methods: {
        },
        mounted() {

        }
    };
</script>
<style lang="scss" scoped>
    .fullscreen-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(30, 30, 30, 0.84);
        z-index: 300;
        // &.v-enter-active {
        //     transition: opacity 0.45s ease;

        //     .dialog {
        //         transition: transform 0.45s ease;
        //     }
        // }

        // &.v-leave-active {
        //     transition: opacity 0.32s ease;

        //     .dialog {
        //         transition: transform 0.32s ease;
        //     }
        // }

        // &.v-enter,
        // &.v-leave-active {
        //     opacity: 0;

        //     .dialog {
        //         transform: perspective(400px) rotateX(90deg);
        //     }
        // }

        .dialog {
            border-radius: 10px;
            background: #fff;
        }

        &.is-transparent {
            background: transparent;
            transition: none;
            .dialog {
                background: rgba(0, 0, 0, 0.66);
                transition: none;
            }
        }
    }
</style>