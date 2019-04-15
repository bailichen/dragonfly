export default [
    {
        path: '/main',
        name: 'main',
        meta: {
            title: 'main'
        },
        component: () =>
            import( /* webpackChunkName: "modules/main" */ '@/views/main/main.vue'),
    },

];
