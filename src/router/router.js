
import main from '@/page/main/main'
import detail from '@/page/detail/detail'
import pay from '@/page/pay/pay'
import order from '@/page/order/order'
import success from '@/page/pay/success'
import qrCode from '@/page/pay/qr-code'
import lowPrice from '@/page/low-price/low-price'
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
        name: 'detail',
        component: detail,
        meta: {
            title: '蜻蜓好课商城'
        },
    },
    {
        path: '/order',
        name: 'order',
        component: order,
        meta: {
            title: '会员订单'
        },
    },
    {
        path: '/pay/:id',
        name: 'pay',
        component: pay,
        meta: {
            title: '会员订单'
        },
    },
    {
        path: '/success',
        name: 'success',
        component: success,
        meta: {
            title: '会员订单'
        },
    },
    {
        path: '/qr-code',
        name: 'qr-code',
        component: qrCode,
        meta: {
            title: '二维码'
        },
    },
    {
        path: '/low-price',
        name: 'low-price',
        component: lowPrice,
        meta: {
            title: '限时低价'
        },

    }
]