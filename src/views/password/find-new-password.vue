<template>
    <frame-view-float class="find-new-password"
                      :z="120"
                      title="找回登录密码">
            <find-password></find-password>
    </frame-view-float>
</template>
<script>
import FindPassword from './find-password'
export default {
    components: {
        FindPassword
    },
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
