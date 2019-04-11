import Vue from 'vue';

import '@/utils/js';

import ComponentFullscreenDialog from '@/components/fullscreen-dialog/fullscreen-dialog.vue';
Vue.component('fullscreen-dialog',ComponentFullscreenDialog);

import PluginStorage from '@/plugins/storage/storage.js'
Vue.use(PluginStorage);

import PluginLoading from '@/plugins/loading/loading.js'
Vue.use(PluginLoading);

import PluginRequest from '@/plugins/request/request.js'
Vue.use(PluginRequest);

import App from './app.vue';

import '@/styles';

let vm = new Vue({
    el: '#app',
    render: h => h(App),
});
