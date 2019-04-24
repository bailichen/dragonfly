import Confirm from './confirm/confirm.js';
import Guide from './guide/guide.js';
import Request from './request/request.js';
import Loading from './loading/loading.js';
import Toast from './toast/toast.js';
import Status from './status/status.js';
import Storage from './storage/storage.js';

export default {
    install(Vue, options) {
        Vue.use(Confirm);
        Vue.use(Guide);
        Vue.use(Request);
        Vue.use(Loading);
        Vue.use(Toast);
        Vue.use(Status);
        Vue.use(Storage);
    }
}
