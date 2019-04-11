<template>
    <frame-view-float class="my-star-agreement"
                      :z="130"
                      title="个人工作室注册协议">
        <agreement-content></agreement-content>
    </frame-view-float>
</template>
<script>
    import AgreementContent from './my-star-agreement-content.vue'

    export default {
        components: {
            AgreementContent
        },
        mounted() {

        }
    }
</script>

