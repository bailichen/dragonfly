//VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';
import store from '@/store';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes,
});
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    const path = to.fullPath;
    store.dispatch('history/change', path);
    next()
})
export default router