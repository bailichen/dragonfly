<template>
    <div class="container">
        <img src="./images/download_bg.png">
        <button class="download" @click="download">下载口諀工作创客版</button>
        <button class="open-app" @click="quickOpen">已安装 立即打开</button>
        <div class="shadow" v-show="shadowShow"></div>
    </div>
</template>
<script>
import os from './os.js'
import main from './main.js'
export default {
    data () {
        return {
            shadowShow: false,
            appUrl: {}
        }
    },
    created () {
        if(os.isWechat() || os.isAlipay()){
            this.shadowShow = true
        }

        this.getURL()

    },
    methods: {
        getURL(){
            this.$request('getDownloadUrl').then(response=>{
                    let {data} = response;
                    this.appUrl =  data.data
            })
        },
        download() {
            if (os._android()) {
                window.location.href = this.appUrl.android
            } else if (os._ios()) {
                window.location.href = this.appUrl.ios
            }
        },
        quickOpen() {
            if (os._android()) {
                window.location.href = "koubeigongzuock://app";

            } else if (os._ios()) {
                window.location.href = "comkoubeigongzuock://";
            }
        },
    }
}
</script>

<style scoped>
    @import 'download.css';
</style>


