const domain = process.env.domain || 'local';
const host = process.env.host || 'default';

const devHosterName = host === 'default' ? 'ci' : process.env.host;
const testHosterName = host === 'default' ? 'st1' : process.env.host;

let server = {};
switch (domain) {
    case 'local':
        {
            server = {
                BASE_URL: `//shijianguanlixueyuan.com`,
            }
            break;
        };
    case 'development':
        {
            server = {
                BASE_URL: `//shijianguanlixueyuan.com`,
            }
            break;
        };
    case 'test':
        {
            server = {
                BASE_URL: `//shijianguanlixueyuan.com`,
            }
            break;
        };
    case 'production':
        {
            server = {
                BASE_URL: `//shijianguanlixueyuan.com`,
            }
            break;
        }
    case 'demo':
        {
            server = {
                BASE_URL: `//shijianguanlixueyuan.com`,
            }
            break;
        }
    default:
        {
            break;
        }
};


const requests = {
    'classApi': {
        name: '所有课程',
        type: 'get',
        server: server.BASE_URL,
        url: '/class_api.php'
    },
}


export default requests;
