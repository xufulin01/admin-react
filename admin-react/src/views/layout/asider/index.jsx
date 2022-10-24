/**
 * 
 * 左侧导航栏
 */

import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu, Layout } from 'antd';
import "../index.scss";
import { RouterMenuItem } from '@v/router/router';
import { setParamsMethod } from "@/utils/methods";
export const Asider = () => {
    const { Sider } = Layout;
    const history = useHistory()
    const [openKeys, setOpenKeys] = useState();
    const [selectedKeys, setSelectedKeys] = useState(['/home/network'])
    useEffect(() => {
        setOpenKeys([setParamsMethod(history.location.pathname)])
        setSelectedKeys([history.location.pathname ? history.location.pathname : '/home/network'])
    }, [])
    /**
     * 左侧导航点击事件
     * @param {item} params
     */
    const handleOpenKey = ({ item }) => {
        history.replace(item.props.path)
        setSelectedKeys([item.props.path])

    }
    const onOpenChange = (openKeys) => {
        setOpenKeys(openKeys)
    }
    return (
        <Sider className="layout-sider">
            <h1 className="logo">
                <span>
                    {/* <img src="https://i.postimg.cc/W33CYm3B/logo1.png" alt="" /> */}
                    <img src="" alt="" />
                </span>
            </h1>
            <Menu
                selectedKeys={selectedKeys}
                openKeys={openKeys}
                mode="inline"
                theme="dark"
                onClick={handleOpenKey}
                onOpenChange={onOpenChange}
                items={RouterMenuItem}
            />
        </Sider>
    );
};