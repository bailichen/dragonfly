
import main from '@/page/main/main'
import detail from '@/page/detail/detail'
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
        name: 'main',
        component: main,
        meta: {
            title: '微信测试'
        },
    },
    {
        path: '/detail',
        name:'detail',
        component: detail,
        meta: {
            title: '微信测试详情'
        },
    }
]