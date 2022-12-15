import React, { Fragment } from "react";
import { Layout } from "antd";
import { Asider } from './asider/index';
import { Main } from './main/index'

import "./index.scss";
export const Layouts = () => {
    const { Header, Footer, Sider, Content } = Layout;

    return (
        <Layout className="layout-outer">
            <Asider />
            <Main />
        </Layout>
    );
};
