export default {
    install(Vue, options) {

        const storage = {
            get(name) {
                let result;

                if (typeof (name) === 'string') {
                    result = window.localStorage.getItem(name);
                }
                if (name instanceof Array) {
                    result = [];
                    for (let item of name) {
                        result.push(window.localStorage.getItem(item));
                    }
                }
                return result;
            },
            set(obj, value) {
                if (typeof (obj) === 'string') {
                    window.localStorage.setItem(obj, value);
                }
                if (typeof (obj) === 'object') {
                    for (let item of Object.keys(obj)) {
                        window.localStorage.setItem(item, obj[item]);
                    }
                }
            },
            remove(name){
                if (typeof (name) === 'string') {
                    result = window.localStorage.removeItem(name);
                }
            },
            clear() {
                window.localStorage.clear();
            }
        }

        Vue.prototype.$storage = storage;

    }
}
