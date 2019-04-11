<template>
    <frame-view-float class="my-about"
                      :z="120"
                      title="关于我们">
        <about-content></about-content>
    </frame-view-float>
</template>
<script>
import ua from 'ua';
import AboutContent from './my-about-content.vue'
export default {
    data() {
        return {
        }
    },
    components: {
        AboutContent
    },
    created() {
    }

}
</script>

