/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * 
 */
let baseUrl = '//www.shijianguanlixueyuan.com';


const requests = {
    'classApi': {
        name: '所有课程',
        type: 'get',
        server: baseUrl,
        url: '/class_api.php'
    },
    'wechartClass': {
        name: '微信',
        type: 'get',
        server: baseUrl,
        url: '/wechart_class.php'
    },
    'wxauth':{
        name: '微信用户信息',
        type: 'get',
        server: baseUrl,
        url: '/wxauth.php'
    },
    'UnifiedOrderApi2':{
        name: '订单信息',
        type: 'post',
        server: baseUrl,
        url: '/wxsdk/example/unifiedOrder_openid2.php'
    },
    'wechartOrdersApi':{
        name: '订单信息',
        type: 'get',
        server: baseUrl,
        url: '/wechartOrders_api.php'
    },
    'wechartClassIndex':{
        name: '推荐列表',
        type: 'get',
        server: baseUrl,
        url: '/wechartClass.php'
    }
}


export default requests
