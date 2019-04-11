import myStatus from './status.vue';

const Confirm = {
    install(Vue, options) {
        let tpl = Vue.extend(myStatus);

        const myTpl = new tpl().$mount();
        document.body.appendChild(myTpl.$el);

        Vue.prototype.$status = (caller, state, title, mainTips, subTips, btnText, slot) => {
            return myTpl.status(caller, state, title, mainTips, subTips, btnText, slot);
        }
    }
}

export default Confirm;
