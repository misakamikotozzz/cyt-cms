// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
// const Random = Mock.Random

const userToken = function () {
    let res = {
        message: '获取token成功',
        code: 200,
        data:
        {
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjcwODQ2NjQ5LCJleHAiOjE2NzA5MzMwNDl9.o55Vg3hVUBChqMEiSPH22aIuYmv9c4DeZw8uWv1Y1I8'
        }
    }
    return res
}

// 登录Login接口
Mock.mock('/api/user/login', 'post', userToken)

const listInfo = function () {
    let res = {
        code: 200,
        data: {
            avatar: 'https://ts1.cn.mm.bing.net/th/id/R-C.f3ad5ec5be219adfd8ff944e71437edd?rik=Xx181wPCnlYZDQ',
            name: 'admin',
            roles: [
                'admin'
            ],
            data: [
                'index',
                'order-manage',
                'order-list',
                'product-manage',
                'product-list',
                'review-manage',
                'return-goods',
                'goods',
                'goods-list',
                'goods-classify',
                'permission',
                'user-manage',
                'role-manage',
                'menu-manage'
            ]
        }
    }
    return res
}

// 用户权限信息
Mock.mock('/api/user/info', 'get', listInfo)

const userList = function () {
    let res = {
        code: 200,
        data: [
            {
                id: 169,
                status: 1,
                loginName: 'admin',
                name: 'admin',
                realName: null,
                mobile: '18680343705',
                address: '54@qq.com',
                email: '54@qq.com',
                lastLoginTime: 1561458517000,
                erpMemberRoles: [
                    {
                        id: 17,
                        roleName: '超级管理员'
                    }
                ]
            },
            {
                id: 171,
                status: 1,
                loginName: '蔚蓝寻策科技',
                name: '蔚蓝寻策科技',
                realName: null,
                mobile: '13088888893',
                address: 'aaa@qq.com',
                email: 'aaa@qq.com',
                lastLoginTime: 1552288845000,
                erpMemberRoles: [
                    {
                        id: 17,
                        roleName: '普通用户'
                    }
                ]
            }
        ]
    }
    return res
}

// 用户管理
Mock.mock('/api/user/list', 'get', userList)

const permissionList = function () {
    let res = {
        code: 200,
        data: [
            {
                id: 1,
                permissionName: '首页管理',
                parentId: 0,
                permissionCode: 'home',
                resourceLevel: 1,
                permissionLevel: 1,
                erpMemberPermissions: [
                    {
                        id: 11,
                        permissionName: '首页',
                        permissionLevel: null,
                        parentId: 1,
                        permissionCode: 'home'
                    }
                ]
            },
            {
                id: 2,
                permissionName: '订单管理',
                parentId: 0,
                permissionCode: 'order-manage',
                resourceLevel: 1,
                permissionLevel: 1,
                erpMemberPermissions: [
                    {
                        id: 21,
                        parentId: 2,
                        permissionName: '订单列表',
                        permissionLevel: null,
                        permissionCode: 'order-list'
                    },
                    {
                        id: 22,
                        parentId: 2,
                        permissionName: '生产管理',
                        permissionLevel: null,
                        permissionCode: 'product-manage',
                        erpMemberPermissions: [
                            {
                                id: 221,
                                parentId: 22,
                                permissionName: '生产列表',
                                permissionLevel: null,
                                permissionCode: 'product-list'
                            },
                            {
                                id: 222,
                                parentId: 22,
                                permissionName: '审核管理',
                                permissionLevel: null,
                                permissionCode: 'review-manage'
                            }
                        ]
                    },
                    {
                        id: 23,
                        parentId: 2,
                        permissionName: '退货管理',
                        permissionLevel: null,
                        permissionCode: 'return-goods'
                    }
                ]
            },
            {
                id: 3,
                permissionName: '产品管理',
                parentId: 0,
                permissionCode: 'goods',
                resourceLevel: 1,
                permissionLevel: 1,
                erpMemberPermissions: [
                    {
                        id: 31,
                        permissionName: '产品列表',
                        permissionLevel: null,
                        parentId: 3,
                        permissionCode: 'goods-list'
                    },
                    {
                        id: 32,
                        permissionName: '产品分类',
                        permissionLevel: null,
                        parentId: 3,
                        permissionCode: 'goods-classify'
                    }
                ]
            },
            {
                id: 4,
                permissionName: '权限管理',
                parentId: 0,
                permissionCode: 'permission',
                resourceLevel: 1,
                permissionLevel: 1,
                erpMemberPermissions: [
                    {
                        id: 41,
                        permissionName: '用户管理',
                        permissionLevel: null,
                        parentId: 4,
                        permissionCode: 'user-manage'
                    },
                    {
                        id: 42,
                        permissionName: '角色管理',
                        permissionLevel: null,
                        parentId: 4,
                        permissionCode: 'role-manage'
                    },
                    {
                        id: 43,
                        permissionName: '菜单管理',
                        permissionLevel: null,
                        parentId: 4,
                        permissionCode: 'menu-manage'
                    }
                ]
            }
        ]
    }
    return res
}

Mock.mock('/api/permission/all', 'get', permissionList)

const roleList = {
    code: 200,
    data: [
        {
            id: 1,
            roleName: '超级管理员',
            status: 1,
            erpMemberPermissions: [
                {
                    id: 1,
                    permissionName: '首页管理'
                },
                {
                    id: 11,
                    permissionName: '首页'
                },
                {
                    id: 2,
                    permissionName: '订单管理'
                },
                {
                    id: 21,
                    permissionName: '订单列表'
                },
                {
                    id: 22,
                    permissionName: '生产管理'
                },
                {
                    id: 221,
                    permissionName: '生产列表'
                },
                {
                    id: 222,
                    permissionName: '审核管理'
                },
                {
                    id: 23,
                    permissionName: '退货管理'
                },
                {
                    id: 3,
                    permissionName: '产品管理'
                },
                {
                    id: 31,
                    permissionName: '产品列表'
                },
                {
                    id: 32,
                    permissionName: '产品分类'
                },
                {
                    id: 4,
                    permissionName: '权限管理'
                },
                {
                    id: 41,
                    permissionName: '权限管理'
                },
                {
                    id: 42,
                    permissionName: '权限管理'
                },
                {
                    id: 43,
                    permissionName: '权限管理'
                }
            ]
        },
        {
            id: 1,
            roleName: '普通用户',
            status: 1,
            erpMemberPermissions: [
                {
                    id: 1,
                    permissionName: '首页管理'
                },
                {
                    id: 11,
                    permissionName: '首页'
                },
                {
                    id: 3,
                    permissionName: '产品管理'
                },
                {
                    id: 31,
                    permissionName: '产品列表'
                },
                {
                    id: 32,
                    permissionName: '产品分类'
                },
                {
                    id: 4,
                    permissionName: '权限管理'
                },
                {
                    id: 41,
                    permissionName: '权限管理'
                },
                {
                    id: 42,
                    permissionName: '权限管理'
                },
                {
                    id: 43,
                    permissionName: '权限管理'
                }
            ]
        }
    ]
}

Mock.mock('/api/role/list', 'get', roleList)

const permissionResource = {
    code: 200,
    data: [
        {
            id: 1,
            module: '首页',
            permissionName: '首页',
            permissionCode: 'home',
            resourceLevel: 1,
            permissionLevel: 1
        },
        {
            id: 2,
            module: '订单管理',
            permissionName: '订单管理',
            permissionCode: 'order-manage',
            resourceLevel: 1,
            permissionLevel: 1
        },
        {
            id: 3,
            module: '产品管理',
            permissionName: '产品管理',
            permissionCode: 'goods',
            resourceLevel: 1,
            permissionLevel: 1
        },
        {
            id: 4,
            module: '权限管理',
            permissionName: '权限管理',
            permissionCode: 'permission',
            resourceLevel: 1,
            permissionLevel: 1
        }
    ]
}

Mock.mock('/api/permission/resource', 'get', permissionResource)
