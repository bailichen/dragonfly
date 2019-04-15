import frameViewFloat from './frame-view-float/frame-view-float.vue';
import buttonInline from './button-inline/button-inline.vue';
export default {
    install(Vue, options) {
        Vue.component('frame-view-float', frameViewFloat);
        Vue.component('button-inline', buttonInline);
    }
};
