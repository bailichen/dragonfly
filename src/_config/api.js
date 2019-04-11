const domain = process.env.domain || 'local';
const host = process.env.host || 'default';

const devHosterName = host === 'default' ? 'ci' : process.env.host;
const testHosterName = host === 'default' ? 'st1' : process.env.host;

let server = {};
switch (domain) {
    case 'local':
    case 'development':
        {
            server = {
                ck: `http://ck-api.${devHosterName}.dev.lanxinka.com/1.0`,
                member: `http://member-api.ci.dev.lanxinka.com/1.0`
            }
            break;
        };
    case 'test':
        {
            server = {
                ck: `http://ck-api.${testHosterName}.test.lanxinka.com/1.0`,
                member: `http://member-api.${testHosterName}.test.lanxinka.com/1.0`
            }
            break;
        };
    case 'production':
        {
            server = {
                ck: `http://ck-api.koubeigongzuo.com/1.0`,
                member: `http://member-api.lanxinka.com/1.0`
            }
            break;
        }
    case 'demo':
        {
            server = {
                ck: `http://demo-ck-api.koubeigongzuo.com/1.0`,
                member: `http://demo-member-api.lanxinka.com/1.0`
            }
            break;
        }
    default:
        {
            break;
        }
};


const requests = {
    'certification': {
        name: '实名认证',
        type: 'post',
        server: server.ck,
        url: '/user/real_name'
    },
    'login': {
        name: '登录',
        type: 'post',
        server: server.member,
        url: '/users/login'
    },
    'captchaSend': {
        name: '发送短信验证码',
        type: 'post',
        server: server.member,
        url: '/captcha/send'
    },
    'usersMe': {
        name: '个人信息',
        type: 'post',
        server: server.member,
        url: '/users/me'
    },
    'wechatUnbind': {
        name: '微信解绑',
        type: 'post',
        server: server.member,
        url: '/users/wechat/unbind'
    },
    usersPasswordChange: {
        name: '修改密码',
        type: 'post',
        server: server.member,
        url: '/users/password/change'
    },
    usersPasswordForget: {
        name: '',
        type: 'post',
        server: server.member,
        url: '/users/password/forget'
    },
    'userInfo': {
        name: '用户信息',
        type: 'get',
        server: server.ck,
        url: '/user/info'
    },
    'memberStatus': {
        name: '开工状态',
        type: 'get',
        server: server.ck,
        url: '/user/member/checkMemberList'
    },
    'taskDetail': {
        name: '任务详情',
        type: 'get',
        server: server.ck,
        url: '/user/task/view/:taskId/:enrollId'
    },
    'taskEnroll': {
        name: '任务报名',
        type: 'post',
        server: server.ck,
        url: '/user/task/apply/:taskId'
    },
    'taskSign': {
        name: '签署协议',
        type: 'post',
        server: server.ck,
        url: '/user/task/signingContract'
    },
    'bills': {
        name: '账单列表',
        type: 'post',
        server: server.ck,
        url: '/user/member/getBillList'
    },
    'withdrawInfo': {
        name: '提现信息',
        type: 'get',
        server: server.ck,
        url: '/user/bill/init'
    },
    'withdrawCaptcha': {
        name: '提现验证码',
        type: 'post',
        server: server.ck,
        url: '/user/bill/getSignMsg'
    },
    'withdrawRequest': {
        name: '提现申请',
        type: 'post',
        server: server.ck,
        url: '/user/bill/request'
    },
    'withdrawRecord': {
        name: '提现记录',
        type: 'post',
        server: server.ck,
        url: '/user/bill/getList'
    },
    'getDownloadUrl': {
        name: '下载地址',
        type: 'get',
        server: server.ck,
        url: '/user/app_url'
    },
    'bankBankcardList': {
        name: '绑定的银行卡列表',
        type: 'get',
        server: server.ck,
        url: '/user/bank/bankcard/list'
    },
    'bankUnbind': {
        name: '解绑银行卡',
        type: 'post',
        server: server.ck,
        url: '/user/bank/unbind'
    },
    'withdrawRecordAward': {
        name: '劳务费提现记录',
        type: 'get',
        server: server.ck,
        url: '/user/bill/serviceWdList'
    },
    'withdrawRecordAwardDetail': {
        name: '劳务费提现详情',
        type: 'get',
        server: server.ck,
        url: '/user/bill/serviceWdDetail'
    },
    'serviceWithdraw': {
        name: '劳务费提现',
        type: 'post',
        server: server.ck,
        url: '/user/bill/serviceWithdraw'
    },
    'myManager': {
        name: '我的项目管理员',
        type: 'get',
        server: server.ck,
        url: '/user/get_company_user'
    }
}


export default requests;
