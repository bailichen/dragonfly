<template>
    <transition>
        <div ref="main"
             :class="['frame-view-float',{'with-btn-bottom':withBtnBottom||withBtnCustom}]"
             :style="{zIndex:z}">
            <div class="frame-view-float-header">
                <div class="btns-left">
                    <button-inline class="btn-back"
                                      @click="handleBtnBackClick">
                        <i class="iconfont icon-back"></i>
                    </button-inline>
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
        </div>
    </transition>
</template>
<script>
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

        },
        mounted() {

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

        .frame-view-float-header {
            width: 100%;
            height: 89px;
            display: flex;
            padding: 0 20px;
            background: #fff;
            border-bottom: 2px solid #f1f1f1;

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
    }
</style>

