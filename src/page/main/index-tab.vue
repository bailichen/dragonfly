<template>
    <div class="index-tab">
        <div class="tab-part">
            <span v-for="(item,index) in tabData"
                  :class="{'select-tab':selectTab == item.id}"
                  :key="index"
                  @click="handleTab(item)">{{item.title}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectTab: '0',
            tabData: [
                {
                    title: '推荐',
                    id: '0'
                },
                {
                    title: '时间管理',
                    id: '4'
                },
                {
                    title: '个人提升',
                    id: '5'
                },
                {
                    title: '赚钱技能',
                    id: '3'
                },
                {
                    title: '气质女神',
                    id: '2'
                },
                {
                    title: '父母课堂',
                    id: '1'
                }
            ]
        }
    },
    mounted() { },
    methods: {
        handleTab(item) {
            this.selectTab = item.id
            this.$emit('handleTab', item.id)
        }
    }
}
</script>
<style lang="less" scoped>
.index-tab {
    width: 700px;
    height: 88px;
    margin: 0 auto;
    overflow: hidden;
    .tab-part {
        overflow-x: scroll;
        white-space: nowrap;
        span {
            display: inline-block;
            font-size: 30px;
            margin-right: 34px;
            color: #000;
            padding: 24px 0;
        }
        .select-tab {
            color: #d81e06;
        }
    }
}
</style>