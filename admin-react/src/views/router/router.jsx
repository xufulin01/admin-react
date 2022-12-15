

import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

/**
 * 
 * 左侧导航路由
 */
export const RouterMenuItem = [
    {
        key: "/home/network",
        icon: <AppstoreOutlined />,
        label: "控制中心",
        path: "/home/network",
    }, {
        key: "/home/users",
        icon: <DesktopOutlined />,
        label: "用户管理",
        path: "/home/users",

        children: [
            {
                key: "/home/users/user",
                icon: <ContainerOutlined />,
                label: "用户中心",
                path: "/home/users/user",

            },
            {
                key: "/home/users/adduser",
                icon: <ContainerOutlined />,
                label: "用户添加",
                path: "/home/users/adduser",

            }
        ]

    }, {
        key: "/home/leave",
        icon: <MailOutlined />,
        label: "请假",
        path: "/home/leave",

    }, {
        key: "/home/attendance",
        icon: <MenuFoldOutlined />,
        label: "考勤管理",
        path: "/home/attendance",
    }, {
        key: "/home/department",
        icon: <MenuUnfoldOutlined />,
        label: "部门管理",
        path: "/home/department",
        children: [
            {
                key: "/home/department/addition",
                icon: <ContainerOutlined />,
                label: "部门添加",
                path: "/home/department/addition",

            }, {
                key: "/home/department/list",
                icon: <ContainerOutlined />,
                label: "部门列表",
                path: "/home/department/list",

            }]
    },
    {
        key: "/home/position",
        icon: <MailOutlined />,
        label: "职位管理",
        path: "/home/position",
        children: [
            {
                key: "/home/position/addposition",
                icon: <ContainerOutlined />,
                label: "职位添加",
                path: "/home/position/addposition",

            }, {
                key: "/home/position/positionlist",
                icon: <ContainerOutlined />,
                label: "职位列表",
                path: "/home/position/positionlist",

            }]
    },
]