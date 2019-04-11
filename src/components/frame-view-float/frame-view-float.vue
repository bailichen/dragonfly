<template>
    <transition>
        <div ref="main"
             :class="['frame-view-float',{'with-btn-bottom':withBtnBottom||withBtnCustom}]"
             :style="{zIndex:z}">
            <div class="frame-view-float-header">
                <div class="btns-left">
                    <ck-button-inline class="btn-back"
                                      @click="handleBtnBackClick">
                        <i class="iconfont icon-back"></i>
                    </ck-button-inline>
                </div>
                <div class="title">{{title}}</div>
                <div class="btns-right">
                    <slot name="btns-right"></slot>
                </div>
            </div>
            <div class="frame-view-float-content"
                 ref="content"
                 @scroll="handleContentScroll">
                <slot></slot>
            </div>
            <div class="frame-view-btn-bottom"
                 v-if="withBtnBottom">
                <slot name="btn-bottom"></slot>
            </div>
            <div class="frame-view-btn-bottom-custom"
                 v-if="withBtnCustom">
                <slot name="btn-bottom-custom"></slot>
            </div>
            <slot name="sub"></slot>
            <router-view></router-view>
        </div>
    </transition>
</template>
<script>
    import Hammer from 'hammerjs';
    import ua from 'ua';

    export default {
        name: 'frame-view-float',
        props: {
            z: {
                type: Number,
                required: true,
                validator(value) {
                    if (value < 120 || value > 190) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            },
            title: String
        },
        data() {
            return {
            }
        },
        computed: {
            withBtnBottom() {
                return !!(this.$slots['btn-bottom']);
            },
            withBtnCustom() {
                return !!(this.$slots['btn-bottom-custom']);
            }
        },
        methods: {
            handleBtnBackClick(evt) {
                this.$back();
            },
            handleContentScroll(evt) {
                const el = evt.target;
                if (el.scrollHeight - el.scrollTop - el.clientHeight < 10) {
                    this.$emit('scrollEnd');
                }
            }
        },
        created() {
            // if (ua.isIosApp) {
            //     window.webkit.messageHandlers.assistiveTouch.postMessage('0');
            // }
            // if (ua.isAndroidApp) {
            //     window.control.assistiveTouch('0');
            // }
        },
        mounted() {
            const _this = this;
            const hammerTime = new Hammer(this.$refs.content);
            hammerTime.on('swiperight', evt => {
                console.log(evt);
                _this.$back();
            });
        }
    }
</script>
<style lang="scss" scoped>
    .frame-view-float {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #f8f8f9;

        &.v-enter-active {
            transition: left 0.24s linear;
        }

        &.v-leave-active {
            transition: left 0.16s linear;
        }

        &.v-enter,
        &.v-leave-active {
            transform: translateX(100%);
            left: 100%;
        }

        .frame-view-float-header {
            width: 100%;
            height: 89px;
            display: flex;
            padding: 0 20px;
            background: #fff;
            border-bottom: 2px solid #f1f1f1;
            -webkit-transform: translateZ(0);

            .btns-left {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                width: 88px;
                height: 88px;
                text-align: center;
            }
            .title {
                flex-grow: 1;
                font-size: 34px;
                line-height: 88px;
                text-align: center;
            }
            .btns-right {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 120px;
                height: 88px;
                text-align: center;
            }
        }

        .frame-view-float-content {
            width: 100%;
            height: calc(#{"100% - 89px"});
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        }

        &.with-btn-bottom {
            .frame-view-float-content {
                height: calc(#{"100% - 89px - 126px"});
            }
        }

        .frame-view-btn-bottom {
            height: 126px;
            width: 100%;
            padding: 24px;
        }

        .frame-view-btn-bottom-custom {
            height: 126px;
            width: 100%;
            padding: 24px;
            border-radius: 16px 16px 0 0;
            background: #fff;
        }
    }
</style>

