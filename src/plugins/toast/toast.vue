<template>
    <transition>
        <div v-if="isActive"
             :class="['toast-wrapper',{}]">
            <div class="toast">
                {{text}}
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data() {
            return {
                text: '',
                isActive: false
            }
        },
        methods: {
            toast(text) {
                this.text = text;
                this.isActive = true;

                setTimeout(() => {
                    this.isActive = false;
                }, 1800);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .toast-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        z-index: 400;
        pointer-events: none;

        .toast {
            display: flex;
            flex-grow: 0;
            align-items: center;
            justify-content: center;
            min-width: 238px;
            max-width: 478px;
            height: auto;
            min-height: 80px;
            padding: 16px 32px;
            border-radius: 8px;
            color: #ffffff;
            text-align: center;
            font-size: 26px;
            line-height: 46px;
            background: rgba(#000, 0.7);
        }
    }
</style>
