<template>
    <frame-view-float class="my-star-agreement"
                      :z="130"
                      title="合作协议">
        <cooperate-content></cooperate-content>
    </frame-view-float>
</template>

<script>
import CooperateContent from './my-star-cooperate-content.vue'
    export default {
        components: {
            CooperateContent
        },
        mounted() {

        }
    }
</script>

