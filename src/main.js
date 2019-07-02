//Utils
import './utils/js';

import Vue from 'vue'

//挂载swiper
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);

import router from './router'
import store from './store'//引入store

//Componets
import Components from './components';
Vue.use(Components);

//Plugins
import Plugins from './plugins';
Vue.use(Plugins);

import './directives/index';

//Flexible
import 'amfe-flexible';

import App from './app'


import vConsole from 'vconsole'
new vConsole() // 初始化

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
