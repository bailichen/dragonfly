<template>
    <frame-view-float class="task"
                      :z="120"
                      title="任务详情">
        <div class="task-wrapper">
            <div class="upper"
                 v-theme:background>
                <div class="title"
                     v-theme:color>{{title}}</div>
                <div class="labels">
                    <span v-for="(label,index) of labels"
                          :key="`k-${label}-${index}`"
                          v-theme:border.all
                          v-theme:color="2">{{label}}</span>
                </div>
                <div class="company-name"
                     v-theme:color="2">{{companyName}}</div>
                <div class="date"
                     v-theme:color="2"
                     v-if="date">发布时间：{{date}}</div>
            </div>
            <div class="lower"
                 v-theme:background>
                <div class="description-title"
                     v-theme:color>任务说明</div>
                <div class="description"
                     v-html="description"
                     v-theme:color="2"></div>
            </div>
            <div class="lower"
                 v-theme:background>
                <div class="description-title"
                     v-theme:color>项目管理员</div>
                <div class="mamager-info">
                    <div class="avator">
                        <img src="@/assets/images/lmg_tx@2x.png">
                    </div>
                    <div class="info">
                        <div class="company">{{companyName}}</div>
                        <div class="manager">{{manager.name?`${manager.name} `:''}}{{manager.mobile}}</div>
                    </div>
                </div>
                <div class="tips">
                    如果想了解任务的具体要求，或者遇到佣金结算问题等，请直接电话联系项目管理员。
                </div>
            </div>
        </div>
        <div class="btns"
             slot="btn-bottom-custom">
            <!-- <ck-button v-if="status===0"
                       @click="handleEnrollBtnClick">立即报名</ck-button>
            <ck-button v-else-if="status===1"
                       disabled>已报名</ck-button>
            <ck-button v-else-if="status===2"
                       @click="handleSignBtnClick(1)">去签开工协议</ck-button>
            <ck-button v-else-if="status===3"
                       disabled>已开工</ck-button>
            <ck-button v-else-if="status===4"
                       @click="handleSignBtnClick(2)">去签完工协议</ck-button>
            <ck-button v-else-if="status===5"
                       disabled>已完工</ck-button>
            <ck-button v-else-if="status===7"
                       disabled>报名已取消</ck-button>
            <ck-button v-else-if="status===8"
                       disabled>审核未通过</ck-button> -->
            <button class="btn-call"
                    v-theme:color="12"
                    @click="handlePhonecallBtnClick"><img src="@/assets/images/but_phone@2x.png" />拨打电话</button>
            <button class="btn-sign"
                    :disabled="btnDisabled"
                    v-theme:color="0"
                    v-theme:background="12"
                    @click="handleSignBtnClick()"><img src="@/assets/images/but_bm@2x.png" />{{btnText}}</button>
        </div>
        <router-view></router-view>
    </frame-view-float>
</template>
<script>
    import ua from 'ua';

    export default {
        data() {
            return {
                title: '',
                labels: [],
                date: '',
                description: '',
                //0初始 1待审核 2去签开工协议 3已开工 4去签完工协议 5已完工 7报名已取消 8审核未通过
                status: -1,
                companyName: '',
                requestEnrollId: '',
                //开通创客星状态 0未开通 1已开通
                studioStatus: '',
                manager: {
                    name: '',
                    mobile: ''
                }
            };
        },
        computed: {
            taskId() {
                return this.$route.params.taskId;
            },
            enrollId() {
                return this.$route.params.enrollId;
            },
            btnText() {
                const { status } = this;

                const map = {
                    0: '立即报名',
                    1: '已报名',
                    2: '去签开工协议',
                    3: '已开工',
                    4: '去签完工协议',
                    5: '已完工',
                    7: '报名已取消',
                    8: '审核未通过'
                }

                return map[status];
            },
            btnDisabled() {
                const list = [1, 3, 5, 7, 8];
                const { status } = this;

                return list.indexOf(status) >= 0;
            }
        },
        methods: {
            enroll() {
                const { taskId, enrollId } = this;
                this.$request('taskEnroll', {
                    taskId
                }).then(response => {
                    const data = response.data.data;
                    const code = response.data.code;
                    const msg = response.data.msg;

                    if (code) {
                        this.$status(
                            this,
                            0,
                            '报名结果',
                            '报名失败',
                            msg,
                            '我知道了'
                        );
                    } else {
                        this.$status(
                            this,
                            1,
                            '报名结果',
                            '报名成功',
                            '稍后将短信通知审核结果<br>请在审核通过后签订开工协议',
                            '完成'
                        );
                    }
                });
            },
            sign(type) {
                const { enrollId, requestEnrollId, studioStatus } = this;

                const id = enrollId || requestEnrollId;

                if (studioStatus === 0) {
                    this.$guide('开通提醒', '请去开通创客星', '立即开通').then(
                        () => {
                            if (ua.isIosApp) {
                                window.webkit.messageHandlers.goToPage.postMessage(
                                    'studio'
                                );
                            }

                            if (ua.isAndroidApp) {
                                window.control.goToPage('studio');
                            }
                        }
                    );
                } else if (studioStatus === 1) {
                    this.$request('taskSign', {
                        taskId: id,
                        type
                    }).then(response => {
                        const data = response.data.data;
                        const code = response.data.code;
                        const msg = response.data.msg;

                        if (code) {
                            this.$status(
                                this,
                                0,
                                `${type === 1 ? '开' : '完'}工协议`,
                                '签署失败！',
                                msg,
                                '我知道了'
                            );
                        } else {
                            if (ua.isIosApp) {
                                window.webkit.messageHandlers.assistiveTouch.postMessage(
                                    '1'
                                );
                            }
                            if (ua.isAndroidApp) {
                                window.control.assistiveTouch('1');
                            }
                            window.location.href = data;
                        }
                    });
                } else {
                    this.$toast('获取数据失败，请稍后重试');
                }
            },
            handlePhonecallBtnClick() {
                if (ua.isIosApp) {
                    window.webkit.messageHandlers.phoneCall.postMessage(this.manager.mobile);
                }
                else if (ua.isAndroidApp) {
                    window.control.phoneCall(this.manager.mobile);
                }
            },
            handleSignBtnClick() {
                switch (this.status) {
                    case 0: this.enroll(); break;
                    case 2: this.sign(1); break;
                    case 4: this.sign(2); break;
                    default: break;
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                if (ua.isIosApp) {
                    window.webkit.messageHandlers.assistiveTouch.postMessage('0');
                }
                if (ua.isAndroidApp) {
                    window.control.assistiveTouch('0');
                }
            });
        },
        created() {
            const { taskId, enrollId } = this;
            this.$request('taskDetail', {
                taskId,
                enrollId
            }).then(response => {
                const data = response.data.data;

                const status = data.user_task_status;

                const title = data.name;
                const labels = [];
                labels.push(data.type_child_name);

                const description = data.content;
                const date = (data.published_at || '').split(' ')[0];

                const companyName = data.company_name;
                const enrollId = data.user_task_id;

                this.status = status;
                this.title = title;
                this.labels = labels;
                this.description = description;
                this.date = date;
                this.companyName = companyName;
                this.requestEnrollId = enrollId;

                this.manager.name = data.company_user_name;
                this.manager.mobile = data.company_user_mobile;
            });

            this.$request('memberStatus').then(response => {
                const data = response.data.data;
                const code = response.data.code;
                const msg = response.data.msg;

                const studioStatus = data.studio_status;

                this.studioStatus = studioStatus;
            });
        },
        activated() {
            if (ua.isIosApp) {
                window.webkit.messageHandlers.assistiveTouch.postMessage('0');
            }
            if (ua.isAndroidApp) {
                window.control.assistiveTouch('0');
            }
        }
    };
</script>
<style lang="scss" scoped>
    @import "~utils-scss";

    .task {
        box-sizing: border-box;
        /deep/ .frame-view-float-content {
            height: calc(100% - 110px);
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch;
        }
        /deep/ .frame-view-btn-bottom {
            margin: 0;
        }
        .task-wrapper {
            padding-bottom: 48px;
            .upper {
                margin-bottom: 20px;
                padding: 18px 28px;
                @include clearfix();

                .title {
                    float: left;
                    width: 100%;
                    font-size: 30px;
                    line-height: 68px;
                    font-weight: 600;
                }

                $date-width: 340px;
                $height: 68px;
                .labels {
                    float: left;
                    width: 100%;
                    height: $height;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    overflow: hidden;
                    line-height: $height;
                    span {
                        font-size: 20px;
                        line-height: 20px;
                        padding: 6px 12px;
                        vertical-align: middle;
                        margin-right: 8px;
                        border-radius: 8px;
                        border-width: 1px; /*no*/
                    }
                }
                .company-name {
                    float: left;
                    width: calc(#{"100% - #{$date-width}"});
                    height: $height;
                    font-size: 20px;
                    line-height: $height;
                }
                .date {
                    float: left;
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    width: $date-width;
                    height: $height;
                    font-size: 20px;
                    line-height: $height;
                }
            }

            .lower {
                padding: 18px 28px;
                margin-bottom: 24px;

                .description-title {
                    font-size: 30px;
                    font-weight: 600;
                    line-height: 64px;
                }

                .description {
                    font-size: 20px;
                    line-height: 54px;
                    /deep/ p {
                        margin: 0 16px;
                    }

                    &:empty::before {
                        content: "（暂无说明）";
                        color: rgba(#000, 0.32);
                    }
                }

                .mamager-info {
                    display: flex;
                    .avator {
                        flex: 0 0 auto;
                        width: 193px;
                        height: 193px;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;

                        img {
                            width: 137px;
                            height: 137px;
                        }
                    }

                    .info {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        justify-content: center;
                        color: #48484d;

                        .company {
                            font-size: 30px;
                            line-height: 64px;
                            font-weight: 800;
                        }

                        .manager {
                            font-size: 30px;
                            line-height: 64px;
                        }
                    }
                }

                .tips {
                    font-size: 20px;
                    line-height: 40px;
                    color: #818181;
                }
            }
        }

        .btns {
            display: flex;
            justify-content: space-between;

            .btn-call {
                border: 1px #f05962 solid; /* no */
                height: 80px;
                width: 232px;
                border-radius: 8px;

                img {
                    width: 30px;
                    vertical-align: bottom;
                    margin-right: 8px;
                }
            }

            .btn-sign {
                width: 452px;
                border-radius: 8px;

                img {
                    width: 30px;
                    vertical-align: bottom;
                    margin-right: 8px;
                }

                &[disabled] {
                    background: #ccc;
                }
            }
        }
    }
</style>


