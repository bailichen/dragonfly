<template>
    <div :class="[`ck-checkbox`,{'is-disabled':isDisabled,'is-reverse-color':isReverseColor,'is-space-between':isSpaceBetween}]">
        <label @click="ripple($event)">
            <span class="tips"
                  v-theme:color>
                <slot></slot>
            </span>
            <span ref="inputWapper"
                  class="input-wapper">
                <input type="checkbox"
                       :value="value"
                       :name="name"
                       v-model="currentValue"
                       :disabled="isDisabled" />
                <i class="icon-default iconfont icon-radio"></i>
                <i class="icon-checked iconfont icon-radio-checked"
                   v-theme:color="11"></i>
            </span>
        </label>
    </div>
</template>
<script>
    import TwoWay from 'two-way';

    export default {
        mixins: [TwoWay],
        props: ['name', 'value', 'reverse-color', 'disabled', 'space-between'],
        computed: {
            isReverseColor() { return vueSingleDirectiveProp(this.reverseColor) },
            isDisabled() { return vueSingleDirectiveProp(this.disabled) },
            isSpaceBetween() { return vueSingleDirectiveProp(this.spaceBetween) },
        },
        methods: {
            ripple(event) {
                const _this = this;
                if (event.target.nodeName === 'INPUT') {
                    const ripple = document.createElement('b');
                    ripple.classList.add('ck-choices-ripple');
                    this.$refs.inputWapper.appendChild(ripple);
                    setTimeout(() => {
                        _this.$refs.inputWapper && ripple && _this.$refs.inputWapper.removeChild(ripple);
                    }, 500)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~utils-scss';

    .ck-checkbox {
        width: 100%;
        @include clearfix();

        & > label {
            float: left;
            display: flex;
            align-items: center;
            cursor: pointer;
            width: auto;
            height: 100%;

            .tips {
                display: block;
                line-height: 48px;
                font-size: 32px;
                padding-left: 24px;
                padding-right: 32px;
            }

            .input-wapper {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 48px;
                height: 48px;
                order: -1;

                input {
                    display: none;

                    & ~ .icon-default {
                        display: inline-block;
                        color: #ccc;
                        font-size: 36px;
                        line-height: 48px;
                    }

                    & ~ .icon-checked {
                        display: none;
                        font-size: 36px;
                        line-height: 48px;
                    }
                }

                input:checked {
                    & ~ .icon-default {
                        display: none;
                    }

                    & ~ .icon-checked {
                        display: inline-block;
                    }
                }
            }
        }

        &.is-space-between {
            & > label {
                width: 100%;
                padding-right: 16px;
                justify-content: space-between;
                .input-wapper {
                    order: 2;
                }
            }
        }

        /deep/ .ck-choices-ripple {
            position: absolute;
            left: 14px;
            top: 14px;
            width: 20px;
            height: 20px;
            background: rgba(0, 0, 0, 0.35);
            border-radius: 50%;
            pointer-events: none;
            transform: scale(0);
            animation: ck-ripple-spread 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94);

            @keyframes ck-ripple-spread {
                to {
                    transform: scale(8.6);
                    opacity: 0;
                }
            }
        }
    }
</style>


