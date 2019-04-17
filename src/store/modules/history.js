const state = {
    list: [],
};
const mutations={
    setList(state, payload) {
        state.list = payload;
    },
};

const actions={
    change({ state, commit }, path) {
        const result = [...state.list];
        const length = result.length;

        if (path) {
            const index = result.indexOf(path);
            if (index >= 0) {
                result.splice(index + 1, length - index - 1);
            } else {
                result.push(path);
            }
        }

        commit('setList', result);
    },
};

export default {
    namespaced:true,//用于在全局引用此文件里的方法时标识这一个的文件名
    state,
    mutations,
    actions
}