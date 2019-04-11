<template>
    <frame-view-sub class="my-withdraw-award-record"
                    :z="132"
                    title="提现明细"
                    v-model="currentValue">
        <div class="table">
            <div class="table-title">
                <span>提现资金来源</span>
                <span>金额(元)</span>
                <span>状态</span>
            </div>
            <div class="table-content"
                 v-theme:background>
                <div class="table-row"
                     v-for="(item,idx) of list"
                     :key="idx">
                    <span class="channel">{{item.channel_desc}}</span>
                    <span class="amount">{{item.amount}}</span>
                    <span class="status">{{item.status_desc}}</span>
                </div>
            </div>
        </div>
        <div class="tips">
            <p>说明</p>
            <p>1、由于银行处理机制问题，您的一笔提现会在不同时间段分批到账，可能出现部分批次处理失败。</p>
            <p>2、提现处理失败的资金一般在2小时内会回退到账户余额，您可以重新发起提现。</p>
        </div>
    </frame-view-sub>
</template>
<script>
    import Twoway from 'two-way';

    export default {
        mixins: [Twoway],
        props: ['id'],
        data() {
            return {
                total: 0,
                pageNow: 1,
                pageSize: 10,
                list: []
            }
        },
        computed: {
            reachEnd() {
                const { total, pageNow, pageSize } = this;

                return pageNow * pageSize > total;
            }
        },
        methods: {
            getData() {
                const { id } = this;
                this.$request('withdrawRecordAwardDetail', { service_id: id }).then(({ data }) => {
                    this.list = data.data;
                })
            }
        },
        mounted() {
            this.getData();
        }
    }
</script>
<style lang="scss" scoped>
    .my-withdraw-award-record {
        .table {
            margin: 16px 24px;
            font-size: 28px;
            border-radius: 10px;
            box-shadow: 2px 2px 15px rgba(#000, 0.24);

            .table-title {
                display: flex;
                line-height: 96px;
                padding: 0 24px;
            }

            .table-content {
                padding: 16px 24px;
                border-radius: 0 0 10px 10px;
                overflow: hidden;
                .table-row {
                    display: flex;
                    line-height: 72px;

                    &:not(:last-child) {
                        border-bottom: 1px solid #ccc;
                    }
                }
            }

            .table-title,
            .table-content .table-row {
                span {
                    width: 1 / 4 * 100%;

                    &:first-child {
                        width: 2 / 4 * 100%;
                    }
                }
            }
        }

        .tips {
            padding: 24px;
            font-size: 26px;
            line-height: 48px;
        }
    }
</style>
