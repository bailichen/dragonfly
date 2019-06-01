<template>
    <div class="low-price">
        <img src="../../assets/img/low.png"
             alt=""
             class="low" />
        <div class="list-content">
            <div class="list">
                <div v-for="item in list"
                     :key="item.id"
                     class="list-item">
                    <div class="list-item-wipe">
                        <img :src="item.img"
                             alt=""
                             class="item-img" />
                        <div class="name">{{item.name}}</div>
                        <div class="item-bottom">
                            <div class="item-bottom-left">
                                <img src="../../assets/img/hui.png"
                                     alt="" />
                                <span>￥{{item.money}}</span>
                            </div>
                            <div class="item-bottom-right">￥{{item.make}}</div>
                        </div>
                    </div>
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
                    name: "世坤的321表达法",
                    img: require('@/assets/img/1.png'),
                    make: '1.129',
                    money: '129',
                },
                {
                    id: 1,
                    name: "世坤的321表达法--15万人都学过的表达课",
                    img: require('@/assets/img/2.png'),
                    make: '1.129',
                    money: '129',
                },
                {
                    id: 2,
                    name: "世坤的321表达法--15万人都学过的表达课",
                    img: require('@/assets/img/2.png'),
                    make: '1.129',
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
.low-price {
    height: 100%;
    background: #ededed;
    .low {
        width: 100%;
        height: 350px;
        display: block;
    }
    .list-content {
        height: calc(~"100%-350px");
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        .list {
            zoom: 1;
            padding: 10px 10px;
            box-sizing: border-box;
            .list-item {
                width: 50%;
                height: 389px;
                float: left;
                padding-bottom: 20px;
                .list-item-wipe {
                    width: 330px;
                    height: 380px;
                    margin: 0 auto;
                    box-shadow: 0 0 20px #cdcdcd;
                    background: #fff;
                    border-radius: 5px; /*no*/
                    box-sizing: border-box;
                    padding: 40px;
                    .item-img {
                        width: 100%;
                        height: 150px;
                    }
                    .name {
                        text-align: justify;
                        font-size: 24px;
                        font-weight: 400;
                        color: rgba(50, 50, 50, 1);
                        width: 100%;
                        height: 70px;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        word-break: break-all;
                        -webkit-line-clamp: 2;
                        line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .item-bottom {
                        margin-top: 20px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .item-bottom-left {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            img {
                                display: block;
                                width: 40px;
                                height: 40px;
                                margin-right: 20px;
                            }
                            span {
                                display: block;
                                color: #d81e06;
                                font-size: 24px;
                            }
                        }
                        .item-bottom-right {
                            font-size: 24px;
                            color: #6d6d6d;
                        }
                    }
                }
            }
            &:after {
                content: "";
                display: block;
                height: 0;
                clear: both;
            }
        }
    }
}
</style>