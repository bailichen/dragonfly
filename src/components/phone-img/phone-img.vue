<template>
    <div class="phone-img">
        <img src="@/assets/images/lmg_phone@2x.png"
             alt="" />
        <p v-if="phoneNum">{{phoneNum}}</p>
    </div>
</template>
<script>
export default {
    props: {
        phoneNum: {
            type: String,
            default:''
        }
    }
}
</script>
<style lang="scss" scoped>
.phone-img {
    padding:50px 0 30px;
    img {
        display: block;
        width: 108px;
        height: 108px;
        margin: 0 auto;
    }
    p {
        display: block;
        font-size:34px;
        width: 100%;
        text-align: center;
        margin-top: 25px;
    }
}
</style>
