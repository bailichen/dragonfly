<template>
    <div class="lxk-tab-bar">
        <div v-for="item of computedList"
             :class="['lxk-tab-item']"
             :key="`ky-${item.key}`"
             @click="handleItemClick(item)">
            <div class="icons">
                <img v-if="!item.isActive"
                     :src="item.icon.normal">
                <img v-else
                     :src="item.icon.active">
            </div>
            <div class="text">{{item.text}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['list'],
        computed: {
            computedList() {
                return this.list.map(item => {
                    item['key'] = Math.random().toString().replace(/^0\./, '');
                    return item;
                })
            }
        },
        data() {
            return {}
        },
        methods: {
            handleItemClick(item) {
                const { router, link } = item;
                if (router) {
                    this.$router.replace({ path: router });
                }
                else if (link) {
                    window.open(link);
                }

            }
        }

    }
</script>
<style lang="scss" scoped>
    .lxk-tab-bar {
        z-index: 110;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 98px;
        -webkit-transform: translateZ(0);
        background: #fff;

        .lxk-tab-item {
            height: 100%;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .icons {
                width: 34px;
                height: 34px;
                line-height: 34px;

                img {
                    width: 100%;
                    vertical-align: top;
                }
            }
            .text {
                text-align: center;
                font-size: 18px;
                line-height: 36px;
            }
        }
    }
</style>
