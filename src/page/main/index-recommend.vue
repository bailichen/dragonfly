<template>
    <div class="index-recommend">
        <swiper-img :swiperDate="swiperDate"></swiper-img>
        <div class="recombtn">
            <div v-for="(item,index) in btnData"
                 :key="index"
                 class="recombtn-item">
                <img :src="item.imgSrc"
                     alt="" />
                <span>{{item.title}}</span>
            </div>
        </div>
        <div class="recommend-center">
            <img src="../../assets/img/money.png"
                 alt=""
                 class="recommend-center-left">
            <div class="recommend-center-center">
                <p>蜻蜓计划-学习赚钱两不误</p>
                <p>推广课程 <span>赚20%-45%</span></p>
            </div>
            <div class="recommend-center-right" @click="$emit('handleMack')">
                <span>立即赚钱</span>
            </div>
        </div>
        <div class="broad-wipe">
            <broad-cast></broad-cast>
        </div>
        <h1 class="today-recom">
            今日推荐
        </h1>
        <div class="index-list-content">
            <div class="index-list">
                <div v-for="item in list"
                     :key="item.id"
                     class="index-list-item">
                    <div class="index-list-item-top">
                        <img :src="item.img"
                             alt=""
                             class="index-list-item-top-img" />
                        <div class="index-list-item-top-instr">
                            <p>{{item.titie}}</p>
                            <p>{{item.content}}</p>
                        </div>
                    </div>
                    <div class="index-list-item-center">
                        <span>{{item.learn}}</span>
                        <span class="index-list-item-center-qun">培训群</span>
                    </div>
                    <div class="index-list-item-bottom">
                        <div>售价￥{{item.money}}</div>
                        <div class="make-money">赚<img src="../../assets/img/make-money.png"
                                 alt="" />{{item.make}}</div>
                        <div class="begin-money" @click="$emit('handleMack')">开始赚钱</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SwiperImg from './swiper-img'
import BroadCast from './broad-cast.vue'
export default {
    components: {
        SwiperImg,
        BroadCast
    },
    data() {
        return {
            swiperDate: [
                {
                    imgSrc: require('@/assets/img/1.png')
                },
                {
                    imgSrc: require('@/assets/img/2.png')
                }
            ],
            btnData: [
                {
                    title: "新课首发",
                    imgSrc: require('@/assets/img/new.png')
                },
                {
                    title: "爆款课程",
                    imgSrc: require('@/assets/img/bao.png')
                },
                {
                    title: "父母专题",
                    imgSrc: require('@/assets/img/parent.png')
                },
                {
                    title: "学生专题",
                    imgSrc: require('@/assets/img/student.png')
                }
            ],
            list: [
                {
                    id: 0,
                    titie: "【开年职场第一大课】",
                    content: "世坤的321表达法--15万人都学过的表达课",
                    img: require('@/assets/img/1.png'),
                    learn: "8.2万人次",
                    money: '129',
                    make: "32.5"
                },
                {
                    id: 1,
                    titie: "【开年职场第一大课】",
                    content: "世坤的321表达法--15万人都学过的表达课",
                    img: require('@/assets/img/2.png'),
                    learn: "8.2万人次",
                    money: '129',
                    make: "32.5"
                }
            ]
        }
    },
    mounted() { },
    methods: {},
}
</script>
<style lang="less" scoped>
.index-recommend {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .recombtn {
        display: flex;
        justify-content: space-around;
        padding-top: 50px;
        padding: 50px 25px 30px;
        .recombtn-item {
            img {
                display: block;
                width: 60px;
                height: 60px;
                margin: 0 auto;
            }
            span {
                display: block;
                width: 100%;
                margin-top: 20px;
                text-align: center;
                font-size: 30px;
            }
        }
    }
    .recommend-center {
        width: 734px;
        height: 118px;
        background: #d81e06;
        margin: 0 auto;
        border-radius: 50px; /*no*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        .recommend-center-left {
            display: block;
            width: 64px;
            height: 64px;
            margin-left: 25px;
        }
        .recommend-center-center {
            p {
                width: 100%;
                color: #fff;
                text-align: center;
                font-size: 32px;
                margin-bottom: 10px;
                span {
                    color: #f4ea2a;
                }
            }
            p:last-child {
                margin-bottom: 0;
            }
        }
        .recommend-center-right {
            width: 112px;
            height: 112px;
            margin-right: 5px;
            background: #fff;
            border-radius: 100%;
            span {
                box-sizing: border-box;
                text-align: center;
                display: block;
                width: 100px;
                height: 100px;
                padding: 8px 10px;
                margin-top: 6px;
                margin-left: 6px;
                color: #f4ea2a;
                background: #d81e06;
                border-radius: 100%;
                font-size: 30px;
            }
        }
    }
    .broad-wipe {
        width: 550px;
        margin: 30px auto;
    }
    .today-recom {
        border-top: 1px solid #dcdde1; /*no*/
        color: 000;
        font-weight: normal;
        font-size: 28px;
        padding: 38px 0 24px 24px;
    }
    .index-list-content {
        padding-bottom: 30px;
        .index-list {
            .index-list-item {
                border: 1px solid #dcdde1; /*no*/
                box-shadow: 0 0 20px #bfc0c3;
                width: 720px;
                margin: 0 auto 30px;
                padding: 10px;
                box-sizing: border-box;
                border-radius: 10px;
                .index-list-item-top {
                    position: relative;
                    .index-list-item-top-img {
                        display: block;
                        width: 700px;
                        height: 330px;
                    }
                    .index-list-item-top-instr {
                        position: absolute;
                        width: 100%;
                        left: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.5);
                        box-sizing: border-box;
                        padding: 20px;
                        p {
                            color: #fff;
                            font-size: 32px;
                        }
                    }
                }
                .index-list-item-center {
                    padding: 22px 0 30px;
                    span {
                        font-size: 28px;
                        color: #000;
                        display: inline-block;
                    }
                    .index-list-item-center-qun {
                        margin-left: 28px;
                        width: 140px;
                        font-size: 28px;
                        background: #1296db;
                        color: #fff;
                        border-radius: 50px; /*no*/
                        text-align: center;
                        padding: 10px 0;
                    }
                }
                .index-list-item-bottom {
                    padding-bottom: 30px;
                    display: flex;
                    color: #d81e06;
                    font-size: 28px;
                    justify-content: space-between;
                    .make-money {
                        display: flex;
                        align-items: center;
                        img {
                            display: inline-block;
                            width: 30px;
                            height: 30px;
                            margin: 0 20px 0 2px;
                            vertical-align: middle;
                        }
                    }
                    .begin-money {
                        width: 180px;
                        text-align: center;
                        color: #fff;
                        padding: 10px 0;
                        font-size: 30px;
                        background: #d81e06;
                        border-radius: 50px; /*no*/
                    }
                }
            }
            .index-list-item:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>