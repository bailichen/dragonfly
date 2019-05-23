
import main from '@/page/main/main'
import detail from '@/page/detail/detail'
import pay from '@/page/pay/pay'
export default [
    {
        path: '/',
        component: main,
        name: 'main',
        meta: {
            title: '蜻蜓好课商场'
        },
    },
    {
        path: '/main',
        name: 'main',
        component: main,
        meta: {
            title: '蜻蜓好课商场'
        },
    },
    {
        path: '/detail',
        name:'detail',
        component: detail,
        meta: {
            title: '详情'
        },
    },
    {
        path: '/pay',
        name:'pay',
        component: pay,
        meta: {
            title: '支付'
        },
    }
]