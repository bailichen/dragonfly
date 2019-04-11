<template>
    <transition>
        <div v-show="currentValue"
             class="frame-view-subsidiary"
             :class="{'is-ios-app':isIosApp}"
             :style="{zIndex:z}">
            <div class="frame-view-subsidiary-header">
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
            <div class="frame-view-subsidiary-content"
                 ref="content"
                 @scroll="handleContentScroll">
                <slot></slot>
            </div>
            <slot name="sub"></slot>
        </div>
    </transition>
</template>
<script>
    import Hammer from 'hammerjs';
    import ua from 'ua';
    import TwoWay from 'two-way';

    export default {
        mixins: [TwoWay],
        data() {
            return {
                isIosApp: false
            }
        },
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
        methods: {
            handleBtnBackClick(evt) {
                this.$emit('back');
                this.currentValue = false;
            },
            handleContentScroll(evt) {
                const el = evt.target;
                if (el.scrollHeight - el.scrollTop - el.clientHeight < 10) {
                    this.$emit('scrollEnd');
                }
            }
        },
        created() {
            if (ua.isIosApp) {
                this.isIosApp = true;
            }
        },
        mounted() {
            const _this = this;
            const hammerTime = new Hammer(this.$refs.content);
            hammerTime.on('swiperight', env => {
                _this.currentValue = false;
            });
        }
    }
</script>
<style lang="scss" scoped>
    .frame-view-subsidiary {
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
            left: 100%;
        }

        &.is-ios-app {
            transition: none !important;
        }

        .frame-view-subsidiary-header {
            width: 100%;
            height: 89px;
            display: flex;
            padding: 0 20px;
            background: #fff;
            border-bottom: 2px solid #f1f1f1;
            //-webkit-transform: translateZ(0);

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
                width: 100px;
                height: 88px;
                text-align: center;
            }
        }

        .frame-view-subsidiary-content {
            width: 100%;
            height: calc(#{"100% - 89px"});
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        }
    }
</style>
