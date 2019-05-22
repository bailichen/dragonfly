<template>
    <section class="broadcast">
        <vue-seamless-scroll :data="dataList"
                             :class-option="defaultOption"
                             class="seamless-warp">
            <section class="marquee-list">
                <div v-for="(item,index) in dataList"
                     :key="index"
                     ref="childDom">
                    <span>{{item}}</span>
                </div>
            </section>
        </vue-seamless-scroll>
    </section>
</template>
<script>
import vueSeamlessScroll from "vue-seamless-scroll";
export default {
    components: {
        vueSeamlessScroll
    },
    data() {
        return {
            singleHeight: 0,
            dataList: [],
        }
    },
    computed: {
        defaultOption() {
            return {
                step: 1, // 数值越大速度滚动越快
                limitMoveNum: 1, // 开始无缝滚动的数据量 this.dataList.length
                hoverStop: false, // 是否开启鼠标悬停stop
                direction: 1, // 0向下 1向上 2向左 3向右
                openWatch: true, // 开启数据实时监控刷新dom
                singleHeight: this.singleHeight, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
                singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
                waitTime: 2000 // 单步运动停止的时间(默认值1000ms)
            }
        }
    },
    mounted() { 
        this.getTelPhone()
        this.$nextTick(() => {
            setTimeout(() => {
                var obj = this.$refs.childDom[0];
                var oStyle = obj.currentStyle
                    ? obj.currentStyle
                    : window.getComputedStyle(obj, null);
                var height = parseFloat(oStyle.height);
                this.singleHeight = height.toFixed(2) * 1;
            }, 17);
        });
    },
    methods: {
        getTelPhone() {
            var numArray = new Array(
                "139",
                "138",
                "137",
                "136",
                "135",
                "134",
                "159",
                "158",
                "157",
                "150",
                "151",
                "152",
                "188",
                "187",
                "182",
                "183",
                "184",
                "178",
                "130",
                "131",
                "132",
                "156",
                "155",
                "186",
                "185",
                "176",
                "133",
                "153",
                "189",
                "180",
                "181",
                "182",
                "183",
                "188",
                "170",
                "177",
                "178",
                "166",
                "198",
                "147",
            ); //这是目前找到的除了数据卡外的手机卡前三位，类型是字符串数组
            var numList = []; //创建一个数组用来存放10个手机号
            var arraryLength = numArray.length; //获取数组长度，这样如果手机号前三位取值单位发生变化，在下一步求i的地方就不用修改随机数取值范围了
            for (var n = 0; n < 100; n++) {
                let randomNum = Math.random() * arraryLength;
                var i = parseInt(randomNum.toString()); //注意乘以的是上面numArray数组的长度，这样就可以取出数组中的随机一个数。random的取值范围是大于等于0.0，小于1.0，相乘后得到的就是0到（数组长度-1）的值。
                var num = numArray[i]; //取出随机的手机号前三位并赋值给num，手机号前三位是字符串类型的
                for (var j = 0; j < 8; j++) {
                    num = num + Math.floor(Math.random() * 10); //num是字符串，后面的数字被当做字符串。所以变成两个字符串拼接了
                }
                numList.push(num);
            }
            numList.forEach((item) => {
                let num = Math.floor(Math.random() * 10 + 1)
                let itemString = `用户${item.substr(0, 3)}****${item.substr(7)}分销收益${num * 10}元`
                this.dataList.push(itemString)
            })
        }
    },
}
</script>
<style lang="less" scoped>
.broadcast {
    width: 550px;
    .seamless-warp {
        width: 100%;
        height: 26px;/*no*/
        overflow: hidden;
        .marquee-list {
            div {
                height: 26px;/*no*/
                span {
                    display: block;
                    text-align: center;
                    font-size: 30px;
                    color: #000;
                    height: 26px; /*no*/
                    line-height: 26px;/*no*/
                }
            }
        }
    }
}
</style>