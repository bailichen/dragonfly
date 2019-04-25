/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * 
 */
let baseUrl = '//shijianguanlixueyuan.com';


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
    }
}


export default requests
