<template>
    <frame-view-float class="my-config"
                      :z="120"
                      title="设置">
        <section class="config-content">
            <div class="config-item"
                 @click="changePassword">
                <span class="config-left">登录密码</span>
                <span class="config-right">
                    <i>{{loginPassword}}</i>
                    <img src="../../assets/images/but_next@2x.png"
                         alt="" />
                </span>
            </div>
            <div v-if="hasWxStatus"
                 class="config-item"
                 @click="wxClick">
                <span class="config-left">微信登录</span>
                <span class="config-right">
                    <img :src="wxImg"
                         alt=""
                         v-if="wxLogin != '未绑定' && wxImg"
                         class="wx-img" />
                    <i>{{wxLogin}}</i>

                    <img src="../../assets/images/but_next@2x.png"
                         alt="" />
                </span>
            </div>
        </section>
        <section class="config-content">
            <div class="config-item"
                 v-for="item in configData"
                 :key="item.id"
                 @click="clickConfig(item.id)">
                <span class="config-left">{{item.title}}</span>
                <span class="config-right">
                    <i>{{item.versions}}</i>
                    <img src="../../assets/images/but_next@2x.png"
                         alt="" />
                </span>
            </div>
        </section>
        <frame-view-sub slot="sub"
                        v-if="aboutUs"
                        v-model="aboutUs"
                        :z="140"
                        title="关于我们">
            <about-content></about-content>
        </frame-view-sub>
        <pop-agument slot="sub"
                     v-if="popStatus"
                     v-model="popStatus"
                     @handlePopClick="handlePopClick"></pop-agument>
        <frame-view-sub slot="sub"
                        v-if="aggrementShown"
                        v-model="aggrementShown"
                        :z="140"
                        :title="aggreTitle">
            <login-aggrement v-if="aggressId === '1'"></login-aggrement>
            <agreement-content v-if="aggressId === '2'"></agreement-content>
            <cooperate-content v-if="aggressId === '3'"></cooperate-content>
            <privacy-policy v-if="aggressId === '4'"></privacy-policy>
        </frame-view-sub>
        <frame-view-sub slot="sub"
                        v-if="changePasswordStatus"
                        v-model="changePasswordStatus"
                        :z="140"
                        title="修改登录密码">
            <change-password :myTel="myTel"
                             @bankConfig="changePasswordStatus = false"></change-password>
        </frame-view-sub>
        <div class="btn-bottom">
            <ck-button @click="handleExitBtnClick">安全退出</ck-button>
        </div>
    </frame-view-float>
</template>
<script>
import ua from '@/_config/ua.js';
import PopAgument from './pop-agument.vue'
import AboutContent from './my-about-content.vue'
import AgreementContent from './my-star-agreement-content.vue'
import CooperateContent from './my-star-cooperate-content.vue'
import LoginAggrement from '../login/login-aggrement-content.vue'
import PrivacyPolicy from './my-privacy-policy.vue'
import ChangePassword from '../password/change-password.vue'
export default {
    components: {
        PopAgument,
        AboutContent,
        CooperateContent,
        AgreementContent,
        LoginAggrement,
        PrivacyPolicy,
        ChangePassword
    },
    data() {
        return {
            aggreTitle: '',
            aggressId: '',
            myTel: '',
            aggrementShown: false,
            aboutUs: false, // 关于我们
            popStatus: false,
            appVersion: '',
            loginPassword: '未设置',
            wxLogin: '未绑定',
            wxImg: '',
            changePasswordStatus: false,
            hasWxStatus: true,
            configData: [
                {
                    id: '1',
                    title: '用户服务协议'
                },
                {
                    id: '2',
                    title: '关于我们'
                }
            ]
        }
    },
    created() {

    },
    mounted() {
        if (ua.isIosApp) {
            window.webkit.messageHandlers.request_version.postMessage('');
            window.set_version = version => {
                this.appVersion = version;
                this.getVerSion()
            };
        } else if (ua.isAndroidApp) {
            const uaString = ua.ua;
            const version = uaString.replace(/.*\/android_ck_app\/(\d+\.\d+\.?\d*)\/.*/, '$1');
            this.appVersion = version;
        }
        this.$route.params.id == 1 ? this.hasWxStatus = true : this.hasWxStatus = false
        this.getVerSion();
        this.getMe();
    },
    methods: {
        getVerSion() {
            if (this.appVersion && this.appVersion.length > 0) {
                this.configData.push({
                    id: '3',
                    title: '检查更新',
                    versions: `V${this.appVersion}`
                })
            }
        },
        handlePopClick(id) {
            this.aggressId = id;
            this.popStatus = false;
            this.aggrementShown = true;
            if (id === '1') {
                this.aggreTitle = '口諀创客用户注册协议'
            } else if (id === '2') {
                this.aggreTitle = '个人工作室注册协议'
            } else if (id === '3') {
                this.aggreTitle = '合作协议'
            } else if (id === '4') {
                this.aggreTitle = '隐私政策'
            }
        },
        handleExitBtnClick() {
            this.$confirm('退出登录', '您确定退出登录吗？', '再想想', '确定')
                .then(() => {
                    if (ua.isIosApp) {
                        window.webkit.messageHandlers.logout.postMessage('');
                    }

                    if (ua.isAndroidApp) {
                        window.control.logout();
                    }
                })
                .catch(msg => {

                })
        },
        clickConfig(id) {
            if (id === '1') {
                this.popStatus = true;
            } else if (id === '2') {
                this.aboutUs = true
            } else if (id === '3') {
                if (ua.isIosApp) {
                    window.webkit.messageHandlers.checkForUpdates.postMessage('');
                }
                if (ua.isAndroidApp) {
                    window.control.checkForUpdates();
                }
            }
        },
        changePassword() {
            if (this.loginPassword == '已设置') {
                this.changePasswordStatus = true;
            } else {
                if (ua.isIosApp) {
                    window.webkit.messageHandlers.setPassword.postMessage('');
                }
                if (ua.isAndroidApp) {
                    window.control.setPassword();
                }
            }
        },
        wxClick() {
            if (this.wxLogin == '未绑定') {
                if (ua.isIosApp) {
                    window.webkit.messageHandlers.bindWx.postMessage('');
                }
                if (ua.isAndroidApp) {
                    window.control.bindWx();
                }
            } else {
                this.$confirm('解绑微信', '您确定解绑微信？', '取消', '确定')
                    .then(() => {
                        console.log('解绑微信');
                        this.$request('wechatUnbind', {
                            business_type: 5
                        }).then(({ data }) => {
                            if (data.code === 0) {
                                this.$toast('解绑成功');
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1000)

                            } else {
                                this.$toast(data.msg);
                            }
                        })
                    })
                    .catch(msg => {

                    })
            }
        },
        getMe() {
            this.$request('usersMe', {
                business_type: 5
            }).then(({ data }) => {
                if (data.code === 0) {
                    let { wechat_name, wechat_avatar, is_set_password, mobile } = data.data
                    this.wxLogin = wechat_name ? wechat_name : '未绑定'
                    this.wxImg = wechat_avatar;
                    this.loginPassword = is_set_password ? '已设置' : '未设置';
                    this.myTel = mobile;
                } else {
                    this.$toast(data.msg);
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
@import "~utils-scss";
@import "~@/assets/style/mixin.scss";
.my-config {
    .config-content {
        padding-top: 30px;
        .config-item {
            @include between;
            font-size: 30px;
            padding: 28px 20px;
            border-bottom: 2px solid #f2f2f2;
            background: #fff;
            .config-left {
                display: block;
                color: #48484d;
                height: 42px;
                line-height: 46px;
            }
            .config-right {
                font-size: 26px;
                color: #bcbcbc;

                @include right;
                img {
                    display: block;
                    width: 12px;
                    height: 23px;
                    margin-left: 24px;
                }
                .wx-img {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    margin-right: 10px;
                }
                i {
                    display: block;
                    font-style: normal;
                    height: 42px;
                    line-height: 46px;
                }
            }
        }
    }
    .btn-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 16px;
    }
}
</style>
