export default [
    {
        path: '',
        name: 'main',
        meta: {
            title: '微信测试'
        },
        component: () =>
            import( /* webpackChunkName: "modules/main" */ '@/views/main/main.vue'),
    },

];
