<template>
    <div :class="['ck-input',{'is-space-between':isSpaceBetween,'is-large':isLarge,'is-disabled':disabled}]"
         v-theme:border
         v-ripple>
        <div v-if="tips"
             class="tips"
             v-theme:color
             @click="$refs.input.focus()">{{tips}}</div>
        <input ref="input"
               v-model="currentValue"
               :placeholder="placeholder"
               :maxlength="maxlength"
               :disabled="disabled"
               v-theme:color
               :type="type">
        <div class="slot-wrapper">
            <slot></slot>
        </div>

        <b class="indicator"
           v-theme:background="11"></b>
    </div>
</template>
<script>
    import TwoWay from 'two-way';

    export default {
        mixins: [TwoWay],
        props: ['tips', 'placeholder', 'space-between', 'large', 'cash', 'maxlength', 'type', 'disabled'],
        computed: {
            isSpaceBetween() { return vueSingleDirectiveProp(this.spaceBetween) },
            isLarge() { return vueSingleDirectiveProp(this.large) },
            isCash() { return vueSingleDirectiveProp(this.cash) },
        },
        data() {
            return {

            }
        },
        methods: {
        },
        watch: {
            currentValue(newValue, oldValue) {
                if (newValue > oldValue) {
                    if (this.isCash) {
                        let temp = this.currentValue;
                        const regs = [
                            [/^0(\d+)$/, '$1'], //禁止录入整数部分两位以上，但首位为0
                            [/[^\d\.]+$/, ''], //禁止录入任何非数字和点
                            [/\.(\d?)\.+/, '.$1'], //禁止录入两个以上的点
                            [/^(\d+\.\d{2}).+/, '$1'], //禁止录入小数点后两位以上

                            [/^(\d{5})[^\.]+/, '$1'], //禁止输入大于五位数的整数位
                            [/^(0)\.+/, '$1'], //禁止0后面直接输入点
                        ];

                        for (let i = 0; i < regs.length; i++) {
                            temp = temp.replace(regs[i][0], regs[i][1]);
                        }

                        this.currentValue = temp;
                    }
                }
            }
        }

    }
</script>

<style lang="scss">
    @import "~utils-scss";

    $default-height: 98px;
    $large-height: 122px;

    .ck-input {
        position: relative;
        height: $default-height;
        display: flex;

        &.is-large {
            height: $large-height;

            .tips {
                font-size: 42px;
                line-height: $large-height;
            }

            input {
                font-size: 42px;
                line-height: $large-height;
            }
        }

        &.is-space-between {
            input {
                text-align: right;
                padding-right: 32px;
            }
        }

        &.is-disabled {
            opacity: 0.5;
        }

        .tips {
            flex-shrink: 0;
            padding: 0 16px;
            font-size: 26px;
            line-height: $default-height;
            text-align: center;
        }

        input {
            width: 100%;
            font-size: 26px;
            padding: 0 16px;
            line-height: $default-height;

            &:focus {
                & ~ .indicator {
                    left: 0;
                    width: 100%;
                }
            }
        }

        .slot-wrapper {
            flex-grow: 0;
            flex-shrink: 0;
        }

        .indicator {
            position: absolute;
            bottom: 0;
            left: 50%;
            height: 4px;
            width: 0;
            transition: 0.2s ease all;
            z-index: 5;
        }
    }
</style>
