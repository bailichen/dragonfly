//VueRouter
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';
import store from '@/store';
let vue = new Vue()
Vue.use(VueRouter);
const router = new VueRouter({
    // mode: 'history',
    routes,
});
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    const path = to.fullPath;
    // store.dispatch('history/change', path);
    
    alert(to.query.code)
    if(vue.$storage.get('token')){
        
    }else{
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe5240862be6104be&redirect_uri=http%3A%2F%2Fwww.shijianguanlixueyuan.com%2Fwechart%2Fh5%2F%23%2Fmain&response_type=code&scope=snsapi_userinfo&state=12#wechat_redirect`
    }
    next();
})
export default router