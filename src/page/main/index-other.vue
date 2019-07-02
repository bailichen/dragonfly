<template>
    <div class="index-other"
         v-scroll-end="handleEnd">
        <div class="list" v-if="list.length || loading">
            <div class="list-item"
                 v-for="item in list"
                 :key="item.id" @click="handleClick(item)">
                <div class="item-top">
                    <img :src="item.class_banner"
                         alt="">
                    <div class="item-top-right">
                        <p class="name">{{item.class_name}}</p>
                        <p class="learnNum">{{item.study_count ? item.study_count >=10000 ?`${(Number(item.study_count)/10000).toFixed(2)}万次学习`:`${item.study_count}次学习` :''}}</p>
                    </div>
                </div>
                <div class="item-bottom">
                    <div class="bottom-left">预计收益：¥{{item.share}}</div>
                    <div class="bottom-right" @click.stop  @click="$emit('handleMack')">开始赚钱</div>
                </div>
            </div>
            <list-loading v-if="loading"></list-loading>
                <list-end v-if="!loading && tillEnd"></list-end>
        </div>
        <no-data v-else></no-data>
    </div>
</template>
<script>
export default {
    props: ['tabId'],
    data() {
        return {
            filter: {
                type: '0',
                pageSize: 10,
                pageNum: 1
            },

            total: 0,
            loading: false,
            list: []
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.total / this.filter.pageSize)
        },
        tillEnd() {
            return this.total && this.filter.pageNum >= this.pageCount;
        },
    },
    watch: {
        tabId(newVal) {
            this.filter.type = newVal;
            this.filter.pageNum = 1;
            this.list = []
            this.getList()
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        getList() {
            this.loading = true
            this.$request('wechartClassIndex', this.filter).then(data => {
                this.list.push(...data.data.list)
                this.total = data.data.total
            }).finally(() => {
                this.loading = false;
            })
        },
        handleEnd() {
            console.log(this.filter.pageNum);
            if (this.filter.pageNum < this.pageCount && !this.loading) {
                this.filter.pageNum += 1;
                this.getList();
            }
        },
        handleClick(item){
            window.location.href = item.class_url
        }
    },
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
        padding-bottom: 60px;
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
                    &:last-child {
                        border: 0;
                    }
                }
            }
        }
    }
}
</style>