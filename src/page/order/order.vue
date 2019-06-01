<template>
    <div class="order">
        <img src="../../assets/img/order.png"
             class="order-img"
             alt="" />
        <div class="order-list">
            <div v-for="item in list"
                 :key="item.id"
                 class="order-list-item" :class="{'order-list-item-red':choosed == item.id}" >
                <input type="radio"
                       name="order"
                       v-model="choosed"
                       :value="item.id"
                       class="item-input">

                <div class="choose-img">
                    <img src="../../assets/img/select.png"
                         alt=""
                         v-if="choosed == item.id" />
                    <img v-else
                         src="../../assets/img/not.png"
                         alt="" />
                </div>
                <div class="choose-text"
                     :class="{'after-choose':choosed == item.id}">
                    <div class="choose-text-left">
                        <span>{{item.name}}</span>
                        <i>{{item.divide}}</i>
                    </div>
                    <div class="choose-text-right">
                        {{item.money}}
                    </div>
                </div>
            </div>
        </div>
        <div class="order-botton">
            <button @click="handlePay">确认购买</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            choosed: '0',
            list: [
                {
                    id: '0',
                    name: '白蜻蜓',
                    divide: '分成20%',
                    money: '99元/年'
                },
                {
                    id: '1',
                    name: '红蜻蜓',
                    divide: '分成30%',
                    money: '249元/年'
                },
                {
                    id: '2',
                    name: '蓝蜻蜓',
                    divide: '分成50%',
                    money: '899元/年'
                }
            ]
        }
    },
    watch: {
        choosed(newVal) {
            console.log(newVal);
        }
    },
    mounted() { },
    methods: {
        handlePay(){
            this.$router.push({name:'pay'})
        }
    },
}
</script>
<style lang="less" scoped>
.order {
    height: 100%;
    background: #fafafa;
    .order-img {
        display: block;
        width: 100%;
        height: 450px;
        height: auto;
    }
    .order-list {
        padding-top: 20px;
        padding: 20px 32px;
        box-sizing: border-box;
        height: calc(~"100% - 570px");
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
        .order-list-item {
            margin-top: 24px;
            background: #fff;
            border-radius: 10px; /*no*/
            border: 1px solid #c8c8c8; /*no*/
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 160px;
            padding: 0 35px;
            .item-input {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
            }
            .choose-img {
                img {
                    display: block;
                    width: 36px;
                    height: 36px;
                    margin-right: 35px;
                }
            }
            .choose-text {
                display: flex;
                justify-content: space-between;
                width: 540px;
                font-size: 36px;
                color: #646464;
                .choose-text-left {
                    span {
                        display: inline-block;
                        margin-right: 30px;
                    }
                    i {
                        font-style: normal;
                    }
                }
            }
            .after-choose {
                color: #000000;
                .choose-text-left {
                    i {
                        color: #d1090c;
                    }
                }
            }
        }
        .order-list-item-red{
            border-color: #D1090C
        }
    }
    .order-botton {
        width: 100%;
        height: 120px;
        button {
            display: block;
            width: 100%;
            height: 100%;
            border: 0;
            font-size: 36px;
            color: #fff;
            font-weight: 400;
            background: #d1090c;
        }
    }
}
</style>