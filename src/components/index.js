import frameViewFloat from './frame-view-float/frame-view-float.vue';
import buttonInline from './button-inline/button-inline.vue';
import fullscreenDialog from './fullscreen-dialog/fullscreen-dialog.vue';

import ListEnd from './list-end/list-end.vue';
import ListLoading from './list-loading/list-loading.vue';
import NoData from './no-data/no-data.vue'
export default {
    install(Vue, options) {
        Vue.component('frame-view-float', frameViewFloat);
        Vue.component('button-inline', buttonInline);
        Vue.component('fullscreen-dialog', fullscreenDialog);
        Vue.component('list-end', ListEnd)
        Vue.component('list-loading', ListLoading)
        Vue.component('no-data', NoData)
    }
};
