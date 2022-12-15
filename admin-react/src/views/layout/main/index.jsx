/**
 * 
 * 内容区
 */
import React, { Fragment, useState } from "react";
import { Layout } from "antd";
import { LayOutContent } from "../layoutcontent";
import { getUser, deteleCookie } from "@/utils/tokens";
import { DownOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import "./index.scss";
export const Main = () => {
    const { Header, Footer, Sider, Content } = Layout;
    const [isShow, setIsShow] = useState(false);
    const history = useHistory()
    const handleMouseOver = () => {
        setIsShow(true)
    }
    const handleMouseOut = () => {
        setIsShow(false)

    }
    const signOutClick = () => {
        deteleCookie();
        history.replace('/')
    }
    return (

        <Layout>
            <Header className="layout-header">
                <div className="sign-out">
                    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <p><DownOutlined /><span style={{ marginLeft: "10px" }}>{getUser()}</span></p>

                        {isShow ? <em onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} onClick={signOutClick}>退出</em> : null}
                    </div>
                </div>
            </Header>
            <Content ><LayOutContent /></Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};