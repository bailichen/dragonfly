<template>
    <frame-view-float class="my-manager"
                      :z="120"
                      title="项目管理员">
        <div class="manager-item"
             v-for="(item,index) of list"
             v-theme:background
             :key="index">
            <div class="avator">
                <img src="@/assets/images/lmg_tx@2x.png">
            </div>
            <div class="info">
                <div class="company">{{item.short_name}}</div>
                <div class="manager">{{item.name}} {{item.mobile}}</div>
            </div>
            <div class="btns">
                <button v-theme:color="12"
                        @click="makePhonecall(item.mobile)"><img src="@/assets/images/but_phone@2x.png" />拨打电话</button>
            </div>
        </div>
    </frame-view-float>
</template>
<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        methods: {
            getData() {
                this.$request('myManager', { page: 1, page_size: 99 }).then(({ data }) => {
                    this.list = data.data.list;
                })

            },
            makePhonecall(mobile) {
                if (ua.isIosApp) {
                    window.webkit.messageHandlers.phoneCall.postMessage(mobile);
                }
                else if (ua.isAndroidApp) {
                    window.control.phoneCall(mobile);
                }
            },
        },
        mounted() {
            this.getData();
        }
    }
</script>
<style lang="scss" scoped>
    .manager-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 29px 0;
        width: 100%;

        .avator {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 195px;
            height: 195px;

            img {
                width: 137px;
                height: 137px;
                border-radius: 50%;
                overflow: hidden;
            }
        }

        .info {
            flex-grow: 1;
            color: #48484d;
            .company {
                font-size: 30px;
                line-height: 64px;

                font-weight: 600;
            }
            .manager {
                font-size: 28px;
                line-height: 48px;
            }
        }

        .btns {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 213px;

            button {
                width: 157px;
                height: 59px;
                border: 1px #f05962 solid; /* no */
                font-size: 22px;
                border-radius: 8px;

                img {
                    width: 20px;
                    // vertical-align: bottom;
                    margin-right: 4px;
                }
            }
        }
    }
</style>

