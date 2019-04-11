<template>
    <frame-view-float :z="120"
                      title="实名认证"
                      class="my-certification">
        <div class="certification-wrapper">
            <div v-if="isCertified===0"
                 class="certification-form"
                 v-theme:background>
                <ck-input v-model="name"
                          placeholder="未填写"
                          tips="真实姓名"
                          maxlength="20"
                          :disabled="nameLocked"
                          space-between></ck-input>
                <ck-input v-model="idNumber"
                          placeholder="未填写"
                          tips="身份证号"
                          space-between
                          maxlength="18"></ck-input>
            </div>
            <div v-if="isCertified===1"
                 class="certification-checked">
                <div class="header"
                     v-theme:color="200">
                    <i class="iconfont icon-status-check"></i>
                </div>
                <div class="title"
                     v-theme:color="200">完成认证</div>
                <div class="description"
                     v-theme:color>恭喜您已完成实名认证</div>
                <div class="info"
                     v-theme:background>
                    <div>
                        <span v-theme:color>姓名</span>
                        <span v-theme:color="2">{{(name.replace(/\s/g,'')||'').replace(/.{1}(.)/,'*$1').replace(/.{2}(.)/,'**$1').replace(/.{3,}(.)/,'***$1')}}</span>
                    </div>
                    <div>
                        <span v-theme:color>身份证号</span>
                        <span v-theme:color="2">{{(idNumber||'').replace(/(\d{3})\d+(\d{4}|\d{3}(X|x))/,'$1***********$2')}}</span>
                    </div>
                </div>
                <service-bottom></service-bottom>
            </div>
        </div>
        <div class="btns"
             slot="btn-bottom">
            <ck-button v-if="isCertified===0"
                       @click="handleSubmitBtnClick">提交认证</ck-button>
        </div>
    </frame-view-float>
</template>
<script>
    export default {
        data() {
            return {
                isCertified: -1,
                name: '',
                idNumber: '',
                nameLocked: false
            };
        },
        methods: {
            getUserInfo() {
                this.$request('userInfo').then(response => {
                    const data = response.data.data;
                    const code = response.data.code;

                    if (data.auth_status === 1) {
                        this.isCertified = 1;
                        this.name = data.name;
                        this.idNumber = data.id_card;
                    } else {
                        if (data.name) {
                            this.name = data.name;
                            this.nameLocked = true;
                        }
                        this.isCertified = 0;
                    }
                });
            },
            handleSubmitBtnClick() {
                const { name, idNumber } = this;

                if (!name) {
                    this.$toast('请输入姓名');
                    return;
                }

                if (!idNumber) {
                    this.$toast('请输入身份证号');
                    return;
                }

                if (!/^(\d{17}(\d|X|x)|\d{15})$/.test(idNumber)) {
                    this.$toast('身份证号格式不正确');
                    return;
                }

                this.$request('certification', {
                    name: name.replace(/\s+/g, ""),
                    id_card: idNumber
                }).then(response => {
                    const data = response.data;
                    const code = data.code;

                    if (code) {
                        //失败
                        const msg = data.msg;
                        this.$toast(msg);
                    } else {
                        //成功
                        this.isCertified = 1;
                    }
                });
            }
        },
        mounted() {
            this.getUserInfo();
        }
    };
</script>
<style lang="scss" scoped>
    .certification-wrapper {
        .certification-checked {
            .header {
                padding: 32px 0;
                text-align: center;
                i {
                    font-size: 282px;
                }
            }

            .title {
                font-size: 36px;
                line-height: 42px;
                font-weight: 600;
                text-align: center;
            }

            .description {
                font-size: 28px;
                line-height: 80px;
                text-align: center;
            }

            .info {
                margin-top: 24px;
                padding: 36px 0;

                & > div {
                    font-size: 28px;
                    line-height: 80px;
                    word-spacing: 24px;
                    padding-left: 20%;

                    span {
                        display: inline-block;
                        &:first-child {
                            width: 20%;
                        }
                    }
                }
            }
        }
    }
</style>
