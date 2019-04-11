<template>
    <div :class="['ck-input-cash',{}]"
         v-theme:border
         v-ripple>
        <div class="tips"
             v-theme:color
             @click="$refs.input.focus()">
            <i class="iconfont icon-qian"></i>
        </div>
        <input ref="input"
               v-model="currentValue"
               :placeholder="placeholder"
               v-theme:color="11"
               type="number">
        <slot></slot>
        <b class="indicator"
           v-theme:background="11"></b>
    </div>
</template>
<script>
import TwoWay from 'two-way';

export default {
    mixins: [TwoWay],
    data() {
        return {
        }
    },
    props: ['min', 'max', 'placeholder'],
    methods: {
        getFocus(){
            this.$refs.input.focus()
        }
    },
    mounted() {
        this.$on('inputFocus', () => {
            this.getFocus();
        })
    },
    watch: {
        currentValue(newValue, oldValue) {
            let temp = this.currentValue;
            const regs = [
                [/^0(\d+)$/, '$1'], //禁止录入整数部分两位以上，但首位为0
                [/^\./, ''],//禁止首位为点
                [/[^\d\.]+$/, ''], //禁止录入任何非数字和点
                [/\.(\d?)\.+/, '.$1'], //禁止录入两个以上的点
                [/^(\d+\.\d{2}).+/, '$1'], //禁止录入小数点后两位以上

                [/^(\d{5})[^\.]+/, '$1'], //禁止输入大于五位数的整数位
                [/^(0)\.+/, '$1'], //禁止0后面直接输入点
            ];

            for (let i = 0; i < regs.length; i++) {
                temp.replace && (temp = temp.replace(regs[i][0], regs[i][1]));
            }

            this.currentValue = temp;
        }
    }

}
</script>
<style lang="scss" scoped>
@import "~utils-scss";

$large-height: 122px;

.ck-input-cash {
    position: relative;
    height: $large-height;
    display: flex;

    .tips {
        flex-shrink: 0;
        padding: 0 16px;
        font-size: 42px;
        line-height: $large-height;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
            //vertical-align: text-bottom;
            font-size: 40px;
        }
    }

    input {
        flex-grow: 1;
        font-size: 48px;
        padding: 0 16px;
        line-height: $large-height;

        &:focus {
            & ~ .indicator {
                left: 0;
                width: 100%;
            }
        }
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
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
