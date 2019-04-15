import Vue from 'vue';
import Vuex from 'vuex';
import demo from './modules/demo'
import history from './modules/history'
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        demo,
        history
   }
});
 
export default store;