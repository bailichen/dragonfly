<!--六位验证码输入框组件-->
<template>
     <div class="security-code-wrap">
         <label for="code">
            <ul class="security-code-container">
                <li class="field-wrap"
                    v-for="(item, index) in number"
                    :key="index"
                    @click="clickItem(index)">
                    <i class="char-field"
                       :class="{'char-field-focus-center':ceterFalg===index,'char-field-focus-after':index ===5 && ceterFalg ===6 }">{{inputValue[index]}}</i>
                </li>
            </ul>
        </label>
         <input ref="input"
               class="input-code"
               @input="handleInput"
               @blur="lastFalg = false"
               @focus="lastFalg = true"
               v-model="inputValue"
               id="code"
               name="code"
               type="tel"
               :maxlength="number"
               autocorrect="off"
               autocomplete="off"
               autocapitalize="off" />
    </div>
</template>
<script>
 export default {
    name: 'GetCode',
    // component properties
    props: {
        number: {
            type: Number,
            default: 6
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            inputValue: '',
            lastFalg: true,
        }
    },
    watch:{
        inputValue(){
           this.lastFalg = true; 
        }
    },
    computed: {
        ceterFalg() {
           let result=-1;
           if(this.lastFalg){
               result= this.inputValue.length;
           }
        return result;
        }
    },
    methods: {
        clickItem(index) {
            if (this.inputValue.length > 0 && index == this.number - 1) {
                return true
            }
        },
        getFocus(index) {
            if (this.inputValue.length == 0) {
                return index == 0
            } else {
                return index == this.$refs.input.selectionEnd

            }
        },
        hideKeyboard() {
            // 输入完成隐藏键盘
            document.activeElement.blur() // ios隐藏键盘
            this.$refs.input.blur() // android隐藏键盘
        },
        handleSubmit(){
            this.$emit('input',this.inputValue)
        },
        handleInput(e) {
            this.lastFalg = true;
            this.inputValue = this.inputValue.replace(/[^\d]/g, '');
            // if (this.inputValue.length >= this.number) {
            //     this.hideKeyboard()
            // }
            this.handleSubmit()
        },
        calcClass(item, index) {
            const { getFocus, lastFalg, inputValue } = this;
            return {
                'char-field-focus-center': getFocus(index) && lastFalg,
                'char-field-focus-after': index == inputValue.length - 1 && number == inputValue.length && lastFalg
            }
        }
    }
 }
</script>
<style lang="scss" scoped>
.security-code-wrap {
    overflow: hidden;
}
.security-code-container {
    margin: 0;
    padding: 0;
    padding-top: 30px;
    display: flex;
    width: 468px;
    margin: 0 auto;
    justify-content: space-around;
    .field-wrap {
        list-style: none;
        display: block;
        width: 48px;
        font-size: 38px;
        background-color: #fff;
        margin: 2px;
        color: #000;
        .char-field {
            font-style: normal;
            display: block;
            position: relative;
            width: 48px;
            height: 48px;
            text-align: center;
            border-bottom: 4px solid #7B7B7B;
        }
        .char-field-focus-center:after {
            content: "";
            display: block;
            position: absolute;
            left: 23px;
            top: 0;
            width: 2px;
            height: 42px;
            animation: blink 1s infinite steps(1, start);
        }
        .char-field-focus-after:after {
            content: "";
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            width: 2px;
            height: 42px;
            animation: blink 1s infinite steps(1, start);
        }
    }
}
.input-code {
    display: block;
    position: absolute;
    left: -9999px;
    top: -99999px;
    // border: 2px solid #f90;
}

@keyframes blink {
    0% {
        background-color: white;
    }
    50% {
        background-color: #f05962;
    }
    100% {
        background-color: white;
    }
}
</style>
