<template>
    <frame-view-sub class="my-withdraw-award-record"
                    :z="131"
                    title="提现记录"
                    @scrollEnd="handleScrollEnd"
                    v-model="currentValue">
        <div class="table">
            <div class="table-item"
                 v-for="item of list"
                 :key="item.id"
                 v-theme:background
                 v-theme:color="2"
                 @click="handleItemClick(item.id)">
                <div class="time"><span v-theme:background>{{item.c_time}}</span></div>
                <div class="line">
                    <span class="bank">{{item.bank_name}} {{item.bank_account_No}}</span>
                    <span class="status"
                          v-theme:color="calcStatusColor(item.status)">{{item.status_desc}}</span>
                </div>
                <div class="line">
                    <span class="amount">提现金额：{{item.amount}}元</span>
                </div>
                <div class="line">
                    <span class="actual">实际到账金额：{{item.actual_amount}}元</span><i class="iconfont icon-back"></i>
                </div>
            </div>
            <reach-end v-if="list.length >0 && reachEnd">已加载完成</reach-end>
            <null-data v-if="list.length == 0"></null-data>
        </div>
        <record-detail slot="sub"
                       :id="detailId"
                       v-if="detail"
                       v-model="detail"></record-detail>
    </frame-view-sub>
</template>
<script>
    import RecordDetail from './my-withdraw-award-record-detail.vue';
    import Twoway from 'two-way';

    export default {
        components: {
            RecordDetail
        },
        mixins: [Twoway],
        data() {
            return {
                total: 0,
                pageNow: 1,
                pageSize: 10,
                list: [],
                detailId: 0,
                detail: false
            }
        },
        computed: {
            reachEnd() {
                const { total, pageNow, pageSize } = this;

                return pageNow * pageSize > total;
            }
        },
        methods: {
            getData(pageNow, pageSize) {
                this.$request('withdrawRecordAward', { page_size: pageSize, page: pageNow }).then(({ data }) => {
                    const d = data.data;

                    this.total = d.total;
                    const list = d.data.map(item => {
                        item.bank_account_No = item.bank_account_No.replace(/^\(/, '').replace(/\)$/, '');
                        return item
                    })

                    this.list.push(...list);
                })
            },
            handleScrollEnd() {
                const { reachEnd } = this;
                if (!reachEnd) {
                    this.pageNow += 1;
                    this.getData(this.pageNow, this.pageSize);
                }
            },
            calcStatusColor(status) {
                let result = 0;
                status == 1 && (result = 1);
                status == 2 && (result = 200);
                status == 3 && (result = 300);
                status == 4 && (result = 400);
                return result;
            },
            handleItemClick(id) {
                this.detailId = id;
                this.detail = true;
            }
        },
        mounted() {
            this.getData(this.pageNow, this.pageSize);
        },
        watch: {
            detail(newVal) {
                !newVal && (this.detailId = 0);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .my-withdraw-award-record {
        .table {
            .table-item {
                padding: 0 24px 16px 24px;
                font-size: 26px;
                .time {
                    position: relative;
                    text-align: center;
                    line-height: 88px;
                    span {
                        position: relative;
                        z-index: 50;
                        padding: 0 64px;
                    }
                    &::after {
                        content: "";
                        display: block;
                        height: 1px; /* no */
                        width: 100%;
                        position: absolute;
                        top: 50%;
                        background: #f1f1f1;
                        z-index: 49;
                    }
                }

                .line {
                    display: flex;
                    justify-content: space-between;
                    line-height: 48px;

                    i {
                        font-size: 16px;
                        transform: rotate(180deg);
                    }
                }
            }
        }
    }
</style>
