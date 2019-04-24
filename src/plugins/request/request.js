//Fix bug of “Undefined Promise" in lower version Exprolor
window.Promise = Promise;

import axios from 'axios';
import api from '@/config/api.js';

const Request = {
    install(Vue, options) {
        const onRequest = [];

        const instance = axios.create({
            timeout: 20000,
            // withCredentials: false,
            headers: {
                'Content-Type': 'text/html; charset=utf-8',
            }
        });
        instance.interceptors.request.use(config => {
            // let token = localStorage.getItem("token");
            // if (token) {
            //     config.headers.Authorization = localStorage.getItem("token");
            //     config.headers.platform = 'lxk';
            //     config.withCredentials = true;
            // }
            return config;
        }, error => {
            return Promise.reject(error);
        });


        Vue.prototype.$request = function (key, data) {
            const request = api[key];
            if (request) {

                if (!onRequest.length) {
                    this.$loading('');
                }

                const type = request.type || 'post';

                let requestUrl = request.url;

                let pathPramFlag = 0;
                if (/:/.test(requestUrl)) {
                    for (let item of Object.keys(data)) {
                        const reg = new RegExp(`:${item}`);
                        if (data[item]) {
                            requestUrl = requestUrl.replace(reg, data[item]);
                        }
                    }
                    pathPramFlag = 1;
                }
                requestUrl = requestUrl.replace(/\/:[0-9a-zA-Z_]*/, '');

                const url = `${request.server}${requestUrl}`;

                const rdm = Math.random().toString().replace(/^0./, '');
                onRequest.push(rdm);

                data = data || {};

                return new Promise((resolve, reject) => {
                    const options = {
                        method: type,
                        url,
                        // headers: {
                        //     Authorization: this.$storage.get('token')
                        // }
                    }
                    if (type === 'post') options.data = data;
                    if (type === 'get' && !pathPramFlag) options.params = data;

                    instance(options).then(result => {
                        if(result.data.status != 200){
                            this.$toast(result.data.message);
                        }
                        resolve(result.data);
                    }).catch(error => {
                        reject(error);
                        this.$toast("网络信号弱，请检查网络设置");
                    }).finally(() => {
                        onRequest.removeItem(rdm);
                        if (!onRequest.length) {
                            this.$loading.clear();
                        }
                    });
                });
            }
        }
    }
}

export default Request;
