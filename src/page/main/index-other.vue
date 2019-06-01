<template>
    <div class="index-other">
        <div class="list">
            <div class="list-item"
                 v-for="item in list"
                 :key="item.id">
                <div class="item-top">
                    <img :src="item.img"
                         alt="">
                    <div class="item-top-right">
                        <p class="name">{{item.name}}</p>
                        <p class="learnNum">{{item.learnNum}}</p>
                    </div>
                </div>
                <div class="item-bottom">
                    <div class="bottom-left">预计收益：¥{{item.money}}</div>
                    <div class="bottom-right">开始赚钱</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [
                {
                    id: 0,
                    name: "世坤的321表达法--15万人都学过的表达课",
                    img: require('@/assets/img/1.png'),
                    learnNum: '1.7万次学习',
                    money: '129',
                },
                {
                    id: 1,
                    name: "世坤的321表达法--15万人都学过的表达课",
                    img: require('@/assets/img/2.png'),
                    learnNum: '1.7万次学习',
                    money: '129',
                }
            ]
        }
    },
    mounted() { },
    methods: {},
}
</script>
<style lang="less" scoped>
.index-other {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    background: #ededed;
    .list {
        padding: 20px;
        .list-item {
            background: #f5f6fa;
            margin-bottom: 30px;
            border-radius: 5px; /*no*/
            .item-top {
                padding: 12px 20px;
                display: flex;
                img {
                    display: block;
                    width: 240px;
                    height: 150px;
                    margin-right: 16px;
                }
                .item-top-right {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    width: 412px;
                    p {
                        width: 100%;
                    }
                    .name {
                        font-size: 24px;
                        line-height: 36px;
                        color: #323232;
                    }
                    .learnNum {
                        color: #6d6d6d;
                        font-size: 24px;
                    }
                }
            }
            .item-bottom {
                width: 695px;
                border-top: 1px solid #ededed; /*no*/
                margin: 0 auto;
                display: flex;
                justify-content: flex-start;
                padding: 16px 0;
                div {
                    width: 50%;
                    text-align: center;
                    height: 36px;
                    font-size: 24px;
                    color: #000;
                    border-right: 1px solid #ededed; /*no*/
                    &:last-child{
                        border: 0;
                    }
                }
            }
        }
    }
}
</style>