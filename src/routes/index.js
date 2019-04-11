export default [{
        path: '/login',
        name: 'login',
        component: () =>
            import( /* webpackChunkName: "modules/login" */ '@/views/login/login.vue'),

        children: [{
                path: 'agreement',
                name: 'login-agreement',
                component: () =>
                    import( /* webpackChunkName: "modules/login-agreement" */ '@/views/login/login-aggrement.vue')
            },
            {
                path: 'foget-password',
                name: 'foget-password',
                component: () =>
                    import( /* webpackChunkName: "modules/login-agreement" */ '@/views/password/find-new-password.vue')
            },
        ]
    },
    {
        path: '/my',
        name: 'my',
        component: () =>
            import( /* webpackChunkName: "modules/my" */ '@/views/my/my.vue'),

        children: [{
                path: 'withdraw',
                name: 'my-withdraw',
                component: () =>
                    import( /* webpackChunkName: "modules/my" */ '@/views/my/my-withdraw.vue')
            },
            {
                path: 'config/:id',
                name: 'my-config',
                component: () =>
                    import( /* webpackChunkName: "modules/my" */ '@/views/my/my-config.vue')
            },
            {
                path: 'bills',
                name: 'my-bills',
                component: () =>
                    import( /* webpackChunkName: "modules/my" */ '@/views/my/my-bills.vue')
            },
            {
                path: 'certification',
                name: 'my-certification',
                component: () =>
                    import( /* webpackChunkName: "modules/my" */ '@/views/my/my-certification.vue')
            },
            {
                path: 'about',
                name: 'my-about',
                component: () =>
                    import( /* webpackChunkName: "modules/my" */ '@/views/my/my-about.vue')
            },
            {
                path: 'manager',
                name: 'my-mamager',
                component: () =>
                    import( /* webpackChunkName: "modules/my" */ '@/views/my/my-manager.vue')
            },
            {
                path: 'star',
                name: 'my-star',
                component: () =>
                    import( /* webpackChunkName: "modules/my" */ '@/views/my/my-star.vue'),
                children: [{
                        path: 'agreement',
                        name: 'my-star-agreement',
                        component: () =>
                            import( /* webpackChunkName: "modules/my-agreement" */ '@/views/my/my-star-agreement.vue')
                    },
                    {
                        path: 'status/:status',
                        name: 'my-star-status',
                        component: () =>
                            import( /* webpackChunkName: "modules/my" */ '@/views/my/my-star-status.vue')
                    },
                    {
                        path: 'cooperate',
                        name: 'my-star-cooperate',
                        component: () =>
                            import( /* webpackChunkName: "modules/my-cooperate" */ '@/views/my/my-star-cooperate.vue')
                    }
                ]
            }
        ]
    },
    {
        path: '/task/:taskId',
        name: 'task',
        component: () =>
            import( /* webpackChunkName: "modules/task" */ '@/views/task/task.vue')
    },
    {
        path: '/task/:taskId/:enrollId',
        name: 'task-enrolled',
        component: () =>
            import( /* webpackChunkName: "modules/task" */ '@/views/task/task.vue')
    },
    {
        path: '/task/sign/success/:type',
        name: 'task-sign-success',
        component: () =>
            import( /* webpackChunkName: "modules/task" */ '@/views/task/task-sign-success.vue')
    },
    {
        path: '/reward/agreement',
        name: 'reward-agreement',
        component: () =>
            import( /* webpackChunkName:'reward-agreement' */ '@/views/reward/agreement/index.vue'),
        children: [{
            path: 'detail/:id',
            name: 'reward-agreement-detail',
            component: () =>
                import( /* webpackChunkName:'reward-agreement' */ '@/views/reward/agreement/agreement-detail.vue')
        }]
    }
];
