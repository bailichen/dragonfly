export default [
    {
        path: '/main',
        name: 'main',
        component: () =>
            import( /* webpackChunkName: "modules/main" */ '@/views/main/main.vue'),
    },
    
];
