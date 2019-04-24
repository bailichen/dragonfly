//Utils
import './utils/js';

import Vue from 'vue'

import router from './router'
import store from './store'//引入store

//Componets
import Components from './components';
Vue.use(Components);

//Plugins
import Plugins from './plugins';
Vue.use(Plugins);

//Flexible
import 'amfe-flexible';

import App from './App'
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
