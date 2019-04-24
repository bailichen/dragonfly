const main = r => require.ensure([], () => r(require('@/page/main/main')), 'main');
const detail = r => require.ensure([], () => r(require('@/page/detail/detail')), 'detail');
export default [
    {
        path: '/',
        component: main,
        name: 'main',
        meta: {
            title: '微信测试'
        },
    },
    {
        path: '/main',
        component: main,
        meta: {
            title: '微信测试'
        },
    },
    {
        path: '/detail',
        component: detail,
        meta: {
            title: '微信测试详情'
        },
    }
]