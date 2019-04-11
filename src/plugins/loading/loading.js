import myLoading from './loading.vue';

const Confirm = {
    install(Vue, options) {
        let tpl = Vue.extend(myLoading);

        const myTpl = new tpl().$mount();
        document.body.appendChild(myTpl.$el);

        Vue.prototype.$loading = (text) => {
            return myTpl.active(text);
        }

        Vue.prototype.$loading.clear = () => {
            myTpl.disband();
        }
    }
}

export default Confirm;
