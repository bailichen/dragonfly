import frameViewFloat from './frame-view-float/frame-view-float.vue';
import frameViewSub from './frame-view-sub/frame-view-sub.vue';
import fullscreenDialog from './fullscreen-dialog/fullscreen-dialog.vue';

import ckTabbar from './tab-bar/tab-bar.vue';
import ckButton from './button/button.vue';
import ckButtonInline from './button-inline/button-inline.vue';
import ckRadio from './radio/radio.vue';
import ckCheckbox from './checkbox/checkbox.vue';
import ckInput from './input/input.vue';
import ckInputCash from './input-cash/input-cash.vue';
import ckInputCaptcha from './input-captcha/input-captcha.vue';

import reachEnd from './reach-end/reach-end.vue';
import nullData from './null-data/null-data.vue';
import serviceBottom from './service-bottom/service-bottom.vue';

import phoneImg from './phone-img/phone-img.vue';
import passwordInput from './password-input/password-input.vue';
export default {
    install(Vue, options) {
        Vue.component('frame-view-float', frameViewFloat);
        Vue.component('frame-view-sub', frameViewSub);
        Vue.component('fullscreen-dialog', fullscreenDialog);

        Vue.component('ck-button', ckButton);
        Vue.component('ck-tab-bar', ckTabbar);
        Vue.component('ck-button-inline', ckButtonInline);
        Vue.component('ck-radio', ckRadio);
        Vue.component('ck-checkbox', ckCheckbox);
        Vue.component('ck-input', ckInput);
        Vue.component('ck-input-cash', ckInputCash);
        Vue.component('ck-input-captcha', ckInputCaptcha);

        Vue.component('reach-end', reachEnd);
        Vue.component('null-data', nullData);
        Vue.component('service-bottom', serviceBottom);

        Vue.component('phone-img', phoneImg);
        Vue.component('password-input', passwordInput);
    }
};
