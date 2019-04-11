<template>
    <frame-view-float class="login-agreement"
                      :z="120"
                      title="口諀创客用户注册协议">
        <login-aggrement></login-aggrement>
    </frame-view-float>
</template>
<script>
import LoginAggrement from './login-aggrement-content.vue'
export default {
    components: {
        LoginAggrement
    },
    mounted() {

    }
}
</script>

