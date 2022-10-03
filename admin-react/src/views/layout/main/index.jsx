/**
 * 
 * 内容区
 */
import React, { Fragment } from "react";
import { Layout } from "antd";
import { LayOutContent } from "../layoutcontent";
import "../index.scss";
export const Main = () => {
    const { Header, Footer, Sider, Content } = Layout;

    return (

        <Layout>
            <Header className="layout-header">Header</Header>
            <Content ><LayOutContent /></Content>
            <Footer>Footer</Footer>
        </Layout>
    );
};