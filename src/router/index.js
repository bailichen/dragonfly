import Vue from 'vue'
import Router from 'vue-router'
import routes from './router';
import axios from 'axios';
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
    if (vue.$storage.get('code')) {
        // 拿token
            axios.get(`https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxe5240862be6104be&secret=b0eeffb584c43f6168b0e68fc71bc424&code=${vue.$storage.get('code')}&grant_type=authorization_code`).then(res => {
                if (res.access_token) {
                    alert(res.access_token)
                    vue.$storage.set('access_token', res.access_token)
                    axios.get(`https://api.weixin.qq.com/sns/userinfo?access_token=${res.access_token}&openid=${res.openid}&lang=zh_CN`).then(res =>{
                        if(res.openid){
                            alert(res.openid)
                            store.dispatch('userInfo/getUserInfoActive', res);
                        }else{
                            alert(res.errcode+'errcode')
                        }
                    })
                } else {
                    alert(res.errcode+'errcode')
                    vue.$toast('登录超时，请重新授权登录！')
                    vue.$storage.clear()
                    setTimeout(()=>{
                        window.location.reload()
                    },2000)
                }
            })

        next()
    } else {
        let url = 'http://www.shijianguanlixueyuan.com/wechart'
        let redirectUrl = encodeURIComponent(url, 'utf-8')
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe5240862be6104be&redirect_uri=${redirectUrl}&response_type=code&scope=snsapi_userinfo&state=12#wechat_redirect`
    }
    next();
})
export default router