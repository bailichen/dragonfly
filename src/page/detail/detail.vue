<template>
    <div class="detail">
        <img src="../../assets/img/make-logo.jpg"
             alt=""
             class="make-logo">
        <div class="member-type">
            <div v-for="item in list"
                 :key="item.id"
                 class="list-item">
                <span>{{item.name}}</span>
                <span>{{item.money}}</span>
            </div>
        </div>
        <div class="member-introduce">
            <div class="introduce-text">
                《2017年国民财富焦虑指数》显示78%人处于中度焦虑水平，4.4%的人处于高焦虑水平。我们当中5个人就有4个很焦虑。似乎我们的钱总是不太够花。
                <br />
                <br />
                因为我们大部分人都是这样过的，<br />
                20多岁，初入社会，月光还要透支信用卡<br />
                30岁，结婚生娃，为房贷车贷养娃日日努力工作<br />
                35岁，正当壮年，别人眼中的中产却活得一点也不轻松<br />
                40多岁，上有老下有小，却成为公司优化的对象。<br />
                直到被离职，才发现自己除了工作什么都不会，离了公司自己什么都不是
                <br />
                <br />
                而有些人却早早改变思维，一边工作，一边利用业余时间打造管道收入，月收入超过了五位数，甚至六位数。人随着年龄的增长反而越来越值钱。
                <br />
                <br />
                是的<br />
                20岁后，我们要靠睡后收入--千万别被死工资拖垮<br />
                作为老实人，不是只会上班--要像聪明人一样靠副业赚钱<br />
                作为上班族，空闲时间太少--想利用业余时间赚钱，收入比工资还多
                <br />
                <br />
                也许你早有挣钱想法，却没有方法，没有项目，没有资源。其实想业余时间赚钱并不难。你离睡后收入只差一个蜻蜓会员。
            </div>
        </div>
        <div class="member-bottom">
            <img src="../../assets/img/vip-number.jpg" class="vip-number" alt=""/>
            <img src="../../assets/img/vs.jpg" alt="" class="vs"/>
            <button @click="$router.push({name:'order'})">立即购买</button>
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
                    name: '白蜻蜓会员',
                    money: "99元/年"
                },
                {
                    id: 1,
                    name: '红蜻蜓会员',
                    money: "249元/年"
                },
                {
                    id: 2,
                    name: '蓝蜻蜓会员',
                    money: "899元/年"
                },
            ]
        }
    },
    mounted() {
        this.$request('wechartClass').then(res => {
            console.log(res);
        })
    }
}
</script>
<style lang="less" scoped>
.detail {
    height: 100%;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    .make-logo {
        display: block;
        width: 100%;
        height: auto;
    }
    .member-type {
        background: #fff;
        display: flex;
        justify-content: space-around;
        padding: 36px 0;
        .list-item {
            width: 210px;
            height: 120px;
            background: -webkit-linear-gradient(
                #ff764d,
                #ff3b00
            ); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(
                #ff764d,
                #ff3b00
            ); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(
                #ff764d,
                #ff3b00
            ); /* Firefox 3.6 - 15 */
            background: linear-gradient(
                #ff764d,
                #ff3b00
            ); /* 标准的语法（必须放在最后） */
            border-radius: 10px; /*no*/
            box-shadow: 0 0 20px #e2e2e2;
            font-size: 30px;
            color: #fff;
            span {
                font-weight: bold;
                padding-top: 10px;
                text-align: center;
                letter-spacing: 2px;
                display: block;
            }
        }
    }
    .member-introduce {
        background: #65c8ff url("../../assets/img/detail-bg.jpg") no-repeat;
        background-size: 100% auto;
        .introduce-text {
            padding: 528px 62px 64px;
            text-align: justify;
            color: #fff;
            font-size: 30px;
            line-height: 48px;
        }
    }
    .member-bottom{
        overflow: hidden;
        background: #D1090C;
        img{
            display: block;
            width: 100%;
            height: auto;
        }
        button{
            width: 300px;
            display: block;
            margin: 49px auto 40px;
            background: #FCEF24;
            font-weight:bold;
            height: 84px;
            border-radius: 42px; /*no*/ 
            color: #D1090C;
            font-size:36px;
        }
    }
}
</style>
