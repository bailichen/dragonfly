<template>
    <fullscreen-dialog class="loading"
                       v-if="isActive"
                       transparent>
        <div class="loading-wrapper">
            <div class="loading-content">
                <div class="icon">
                    <i class="back"></i>
                    <i class="front"></i>
                </div>
            </div>
            <div class="text-content"
                 v-if="text">
                {{text}}
            </div>
        </div>
    </fullscreen-dialog>
</template>
<script>
    export default {
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            active(text) {
                this.text = text;
                this.isActive = true;
            },
            disband() {
                this.isActive = false;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .loading {
        .loading-wrapper {
            width: 240px;
            height: 230px;
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .loading-content {
                width: 240px;
                height: 160px;
                display: flex;
                justify-content: center;
                align-items: center;
                .icon {
                    position: relative;
                    height: 90px;
                    width: 90px;
                    background: url('~@/assets/img/load.png') no-repeat;
                    background-size: 100% 100%;
                    animation: spin 1.68s cubic-bezier(0.66, 0.38, 0.32, 0.73) infinite;
                }
            }
            .text-content {
                flex-shrink: 0;
                font-size: 26px;
                line-height: 70px;
                color: #ffffff;
                text-align: center;
                padding: 0 18px;
            }
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
