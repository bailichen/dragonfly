const state={
    userInfoDetail:{},  //初始化一个colects数组
};
const mutations={
     getUserInfo(state,items){ //如何变化collects,插入items
        state.userInfoDetail = Object.assign({},items)
     }
 };
const actions={
    getUserInfoActive({ state, commit },item){ //触发mutations里面的pushCollects ,传入数据形参item 对应到items
        commit('getUserInfo',item);
    }
};
export default {
     namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
     state,
    //  getters,
     mutations,
     actions
}