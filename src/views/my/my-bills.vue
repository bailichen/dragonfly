<template>
    <frame-view-float :z="120"
                      title="全部账单"
                      class="my-bills"
                      @scrollEnd="handleScrollEnd">
        <div v-if="list.length"
             class="table-header"
             v-theme:border
             v-theme:background
             v-theme:color>
            <span>时间</span>
            <span>类型</span>
            <span>金额</span>
        </div>
        <div class="table"
             v-theme:background>
            <div class="bill-item"
                 v-if="list.length"
                 v-for="item of list"
                 v-theme:color
                 :key="item.key">
                <div class="datetime">
                    <div class="date">{{item.date}}</div>
                    <div class="time">{{item.time}}</div>
                </div>
                <div class="type">{{item.type}}</div>
                <div class="amount">{{item.amount}}</div>
            </div>
            <reach-end v-if="list.length && onLoading">数据加载中……</reach-end>
            <reach-end v-if="list.length && reachEnd && !onLoading">全部加载完毕</reach-end>
        </div>
        <null-data v-if="list.length == 0"></null-data>
    </frame-view-float>
</template>
<script>
    export default {
        data() {
            return {
                total: 0,
                pageNow: 1,
                pageSize: 20,
                list: [],
                onLoading: false
            }
        },
        computed: {
            reachEnd() {
                const { total, pageNow, pageSize } = this;
                return pageNow * pageSize >= total;
            }
        },
        methods: {
            getList(pageNow, pageSize) {
                this.onLoading = true;
                this.$request('bills', {
                    page: pageNow,
                    page_size: pageSize
                }).then(response => {
                    const data = response.data.data;

                    const bills = data.data;
                    const total = data.total;

                    const list = bills.map(item => {
                        return {
                            date: (item.audited_at || '').split(' ')[0],
                            time: (item.audited_at || '').split(' ')[1],
                            type: item.batch_name,
                            amount: item.amount
                        }
                    });

                    this.total = total;
                    this.list.push(...list);
                    this.onLoading = false;

                })
            },
            handleScrollEnd() {
                const { reachEnd } = this;
                if (!reachEnd) {
                    this.pageNow += 1;
                    this.getList(this.pageNow, this.pageSize);
                }
            }
        },
        created() {
            this.getList(this.pageNow, this.pageSize);
        }
    }
</script>
<style lang="scss" scoped>
    @import "~utils-scss";
    .my-bills {
        .table-header {
            @include clearfix();
            span {
                float: left;
                display: block;
                font-size: 28px;
                line-height: 88px;
                font-weight: 600;
                text-align: center;
                width: 3 / 7 * 100%;

                &:first-child,
                &:last-child {
                    width: 2 / 7 * 100%;
                }
            }
        }
        .table {
            position: relative;
            /*&:empty::after {*/
            /*content: "暂无数据";*/
            /*position: absolute;*/
            /*left: 0;*/
            /*top: 0;*/
            /*display: block;*/
            /*width: 100%;*/
            /*text-align: center;*/
            /*font-size: 24px;*/
            /*line-height: 80px;*/
            /*color: rgba(#000, 0.38);*/
            /*}*/

            .bill-item {
                @include clearfix();

                & > div {
                    float: left;
                    width: 3 / 7 * 100%;
                    padding: 16px 0;
                    font-size: 26px;
                    line-height: 72px;
                    text-align: center;

                    @include text-overflow();
                    &:first-child,
                    &:last-child {
                        width: 2 / 7 * 100%;
                    }
                    &.datetime {
                        line-height: 36px;
                    }
                }
            }
        }
    }
</style>

