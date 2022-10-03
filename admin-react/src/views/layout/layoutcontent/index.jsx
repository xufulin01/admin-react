/**
 *
 * 主体内容区路由匹配
 */

import React from "react";
import { Switch } from "react-router-dom";
import { PerRoute } from "../../../perRouter";
/**
 * 工程自动化引入路由组件
 */
import { routerList } from "../../../utils/methods"
export const LayOutContent = () => {
    return (
        /**
         * 渲染路由信息
         */
        <Switch>
            {
                routerList && routerList.map(item => {
                    return <PerRoute path={item.path} key={item.path} exact component={item.component}></PerRoute>

                })
            }
        </Switch>
    );
};
