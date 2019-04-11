<template>
    <frame-view-sub class="my-withdraw-record"
                    :z="130"
                    title="提现记录"
                    @scrollEnd="handleScrollEnd"
                    v-model="currentValue">
        <div class="table-title"
             v-theme:color
             v-theme:background
             v-theme:border>
            <span>时间</span>
            <span>提现金额(元)</span>
            <span>提现银行卡</span>
            <span>状态</span>
        </div>
        <div class="table">
            <div class="table-item"
                 v-for="(item,index) of list"
                 :key="index"
                 v-theme:color="2"
                 v-theme:background>
                <div class="datetime">
                    <div class="date">{{item.date}}</div>
                    <div class="time">{{item.time}}</div>
                </div>
                <div class="amount">{{item.amount}}</div>
                <div class="bankcard">
                    <div class="bank">{{item.bank}}</div>
                    <div class="tail">{{item.cardTail}}</div>
                </div>
                <div class="status"
                     v-theme:color="item.status===3?400:2">
                    {{item.statusText}}
                </div>
            </div>
            <reach-end v-if="list.length >0 && reachEnd">已加载完成</reach-end>
            <null-data v-if="list.length == 0"></null-data>
        </div>
    </frame-view-sub>
</template>
<script>
    import TwoWay from 'two-way';

    export default {
        mixins: [TwoWay],
        data() {
            return {
                total: 0,
                pageNow: 1,
                pageSize: 20,
                list: [],
            }
        },
        computed: {
            reachEnd() {
                const { total, pageNow, pageSize } = this;

                return pageNow * pageSize > total;
            }
        },
        methods: {
            getList(pageNow, pageSize) {
                this.$request('withdrawRecord', {
                    page: pageNow,
                    page_size: pageSize
                }).then(response => {
                    const data = response.data.data;
                    const records = data.data;
                    const total = data.total;

                    this.total = total;

                    const statusTexts = ['', '提现中', '提现成功', '提现失败']
                    const list = records.map(item => {
                        return {
                            id: item.id,
                            date: (item.created_at || '').split(' ')[0],
                            time: (item.created_at || '').split(' ')[1],
                            bank: (item.bank_name || '').replace(/\(.*\)/, ''),
                            cardTail: (item.bank_name || '').match(/\((.+?)\)/g, '')[0].replace(/(\(|\))/g, ''),
                            amount: item.actual_amount,
                            status: item.status,
                            statusText: statusTexts[item.status],
                            key: `k-${item.id}`

                        }
                    });

                    this.list.push(...list);

                })
            },
            handleScrollEnd() {
                const { reachEnd } = this;
                if (!reachEnd) {
                    this.pageNow += 1;
                    this.getList(this.pageNow, this.pageSize)
                }
            }
        },
        created() {
            this.getList(this.pageNow, this.pageSize);
        },
    }
</script>
<style lang="scss" scoped>
    .my-withdraw-record {
        .table-title {
            display: flex;
            span {
                width: 25%;
                font-size: 28px;
                text-align: center;
                font-weight: 600;
                line-height: 92px;
            }
        }
        .table {
            .table-item {
                display: flex;
                padding: 22px 0;
                & > div {
                    width: 25%;
                    font-size: 26px;
                    text-align: center;
                    line-height: 30px;

                    &:nth-child(2n) {
                        line-height: 60px;
                    }
                }
            }
        }
    }
</style>
