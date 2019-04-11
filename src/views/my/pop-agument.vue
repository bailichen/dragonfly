<template>
    <section class="pop-agument"
             v-show="currentValue">
        <div class="pop-agument-content">
            <span v-for="(item,index) in popData" :key="index" @click="popClick(item.id)">{{item.title}}</span>
            <p @click="currentValue = false">取消</p>
        </div>
    </section>
</template>
<script>
import TwoWay from 'two-way';
export default {
    mixins: [TwoWay],
    data() {
        return {
            popData:[
                {
                    id:'1',
                    title:'注册须知'
                },
                {
                    id:'2',
                    title:'个人工作室注册协议'
                },
                {
                    id:'3',
                    title:'合作协议'
                },
                {
                    id:'4',
                    title:'隐私政策'
                },
            ]
        }
    },
    methods:{
        popClick(id){
            this.$emit('handlePopClick',id)
        }
    }
}
</script>
<style lang="scss" scoped>
.pop-agument {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(30, 30, 30, 0.7);
    z-index: 300;
    .pop-agument-content {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 1;
        background: #fff;
        span{
            display: block;
            text-align: center;
            font-size:38px;
            color: #48484D;
            padding: 30px 0;
            border-bottom: 2px solid #D2D2D2;
        }
        p{
            display: block;
            margin: 0;
            text-align: center;
            border-top: 10px solid #D2D2D2;
            font-size:38px;
            color: #F05962;
            padding: 32px 0;
        }
    }
}
</style>
