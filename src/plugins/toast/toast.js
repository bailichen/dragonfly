import myToast from './toast.vue';

const Toast = {
    install(Vue, options) {
        let tpl = Vue.extend(myToast);

        const myTpl = new tpl().$mount();
        document.body.appendChild(myTpl.$el);

        Vue.prototype.$toast = (text) => {
            return myTpl.toast(text);
        }
    }
}

export default Toast;
