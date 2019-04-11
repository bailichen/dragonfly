<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script>
import ua from 'ua';

export default {
    data() {
        return {
        }
    },
    created() {


    },
    mounted() {
        this.initHtmlFontSize()
    },
    methods: {
        /**
         * 设置移动端响应式
         */
        initHtmlFontSize() {
            document.addEventListener('DOMContentLoaded', () => {
                const html = document.querySelector('html')
                    , fontSize = window.innerWidth / 10
                html.style.fontSize = `${fontSize}px`
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.app {
    width: 100%;
    height: 100%;
}
</style>


