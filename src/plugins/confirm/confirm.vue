<template>
    <fullscreen-dialog class="ck-confirm"
                       v-if="isActive">
        <div class="confirm-wrapper">
            <div v-theme:color
                 class="confirm-title">
                {{title}}
            </div>
            <div v-theme:color="2"
                 class="confirm-content">
                {{content}}
            </div>
            <div class="confirm-btns">
                <button v-theme:color
                        @click="handleDeceline">{{declineText}}</button>
                <button @click="handleAccept"
                        v-theme:color="11">{{acceptText}}</button>
            </div>
        </div>

    </fullscreen-dialog>
</template>
<script>
    const vcomp = {
        data() {
            return {
                isActive: false,
                title: '',
                content: '',
                declineText: '',
                acceptText: '',
                onAccept: null,
                onDecline: null
            }
        },
        methods: {
            handleAccept() {
                this.isActive = false;
                this.onAccept();
            },
            handleDeceline() {
                this.isActive = false;
                this.onDecline();
            },
            decline() {
                this.isActive = false;
                this.onDecline();
            },
            accept() {
                typeof (this.onAccept) === 'function' && this.onAccept();
            },
            confirm(title, content, declineText, acceptText) {
                return new Promise((reslove, reject) => {
                    this.isActive = true;
                    this.title = title;
                    this.content = content;
                    this.declineText = declineText || '取消';
                    this.acceptText = acceptText || '确认';

                    this.onAccept = () => {
                        reslove();
                    }
                    this.onDecline = () => {
                        reject();
                    }
                });
            }
        }
    }
    export default vcomp;
</script>
<style lang="scss" scoped>
    .ck-confirm {
        $width: 548px;
        .confirm-wrapper {
            width: $width;
            padding: 8px 0;
            .confirm-title {
                font-size: 38px;
                line-height: 38px + 29px * 2;
                text-align: center;
            }

            .confirm-content {
                font-size: 28px;
                line-height: 40px;
                padding: 40px 24px;
                min-height: 120px;
                text-align: center;
            }

            .confirm-btns {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                height: 100px;
                line-height: 100px;
                padding-right: 20px;
                text-align: right;

                button {
                    width: 140px;
                    height: 60px;
                    font-size: 28px;
                    vertical-align: middle;
                }
            }
        }
    }
</style>