import myGuide from './guide.vue';

const Confirm = {
    install(Vue, options) {
        let tpl = Vue.extend(myGuide);

        const myTpl = new tpl().$mount();
        document.body.appendChild(myTpl.$el);

        Vue.prototype.$guide = (title, content, buttonText) => {
            return myTpl.guide(title, content, buttonText);
        }
    }
}

export default Confirm;
