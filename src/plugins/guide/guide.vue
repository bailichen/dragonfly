<template>
    <fullscreen-dialog class="ck-guide"
                       v-if="isActive">
        <div class="guide-wrapper">
            <div class="btn-close"
                 v-theme:color="0"
                 @click="handleDeceline">
                <i>×</i>
            </div>
            <div v-theme:color
                 class="guide-title">
                {{title}}
            </div>
            <div v-theme:color="2"
                 class="guide-content">
                {{content}}
            </div>
            <div class="guide-btn">
                <ck-button @click="handleAccept">{{buttonText}}</ck-button>
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
                buttonText: '',
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
            guide(title, content, declineText, acceptText) {
                return new Promise((reslove, reject) => {
                    this.isActive = true;
                    this.title = title;
                    this.content = content;
                    this.buttonText = declineText || '确定';

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
    .ck-guide {
        $width: 548px;
        .guide-wrapper {
            position: relative;
            width: $width;
            padding: 8px 0 24px;

            $line-height: 24px;
            .btn-close {
                position: absolute;
                top: -48 - $line-height;
                right: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 48px;
                width: 48px;
                text-align: center;
                border-radius: 50%;
                border: 1px solid #fff; /*no*/

                i {
                    display: inline-block;
                    width: 44px;
                    height: 44px;
                    font-size: 50px;
                    line-height: 44px;
                    font-weight: 100;
                    font-style: normal;
                    text-align: center;
                }

                &::after {
                    content: '';
                    position: absolute;
                    display: block;
                    width: 1px; /*no*/
                    height: $line-height + 2px;
                    background: #fff;
                    bottom: -1 * $line-height - 2px;
                    left: 22px;
                }
            }

            .guide-title {
                font-size: 38px;
                line-height: 38px + 29px * 2;
                text-align: center;
            }

            .guide-content {
                font-size: 28px;
                line-height: 40px;
                padding: 40px 24px;
                min-height: 120px;
                text-align: center;
            }

            .guide-btn {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                height: 100px;
                line-height: 100px;
                padding: 0 72px;
                text-align: right;
            }
        }
    }
</style>