<template>
    <div class="swiper-img">
        <swiper :options="swiperOption"
                ref="mySwiper"
                class="my-swiper">
            <swiper-slide class="my-swiper-slide"
                          v-for="(item,index) in swiperDate"
                          :key="index">
                <div @click="handleClick(item)">
                    <img :src="item.class_banner"
                         alt="" />
                </div>

            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
    props: {
        swiperDate: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        swiperOption() {
            return {
                observer: true,
                observeParents: true,
                autoplay: true,
            }
        }
    },
    data() {
        return {
        }
    },
    mounted() {

    },
    methods: {
        handleClick(item) {
            window.location.href = item.class_url
        }
    },
}
</script>
<style lang="less" scoped>
.swiper-img {
    width: 700px;
    height: 340px;
    margin: 0 auto;
    .my-swiper {
        height: 340px;
        overflow: hidden;
        .my-swiper-slide {
            width: 100%;
            height: 340px;
            img {
                display: block;
                width: 100%;
                height: 340px;
            }
        }
    }
}
</style>