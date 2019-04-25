import Vue from 'vue'
import Router from 'vue-router'
import routes from './router';
import store from '../store'
let vue = new Vue()
Vue.use(Router)
const router = new Router({
    base: '/wechart/',
    mode: 'history',
    routes,
    strict: process.env.NODE_ENV !== 'production',
})
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    const path = to.fullPath;
    // store.dispatch('history/change', path);
    
    // alert(to.query.code)
    if (to.query.code) {
        vue.$storage.set('code', to.query.code)
    }
    
    next();
    
})
export default router