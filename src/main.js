//Utils
import './utils/js';

//Vue
import Vue from 'vue';
import store from './store'//引入store
//VueRouter
// import VueRouter from 'vue-router';
import router from './routes';
// Vue.use(VueRouter);
// const router = new VueRouter({
//     mode: 'history',
//     routes,
// });

//iconfont
import '@/assets/iconfonts/ck-app-icon/iconfont.scss';
import '@/assets/style/global.scss';


//Componets
import Components from './components';
Vue.use(Components);

//Directives
import Directives from './directives';
Vue.use(Directives);

//Plugins
import Plugins from './plugins';
Vue.use(Plugins);
// import './_config'

//GlobalMixins
import RouterFrom from './mixins/router-from/router-from.js';
Vue.mixin(RouterFrom);

//Styles
import './styles';

//Flexible
import 'amfe-flexible';

//AppEntry
import App from './app.vue';



let vm = new Vue({
    el: '#app',
    router,
    store,//使用store
    render: h => h(App)
});
