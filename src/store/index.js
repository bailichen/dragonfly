import Vue from 'vue';
import Vuex from 'vuex';
import userInfo from './modules/userInfo'
import history from './modules/history'
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        userInfo,
        history
   }
});
 
export default store;