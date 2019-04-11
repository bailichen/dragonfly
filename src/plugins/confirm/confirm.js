import myConfirm from './confirm.vue';

const Confirm = {
    install(Vue, options) {
        let tpl = Vue.extend(myConfirm);

        const myTpl = new tpl().$mount();
        document.body.appendChild(myTpl.$el);

        Vue.prototype.$confirm = (title, content, declineText, acceptText) => {
            return myTpl.confirm(title, content, declineText, acceptText);
        }
    }
}

export default Confirm;