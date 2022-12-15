/**
 * 用户中心
 */

import React from "react";
import store from "@v/store";
export const User = () => {
    const test = () => {
        const a = Array(10).fill([]);
        a[0].push(1);
        return a[1]
    }
    test()
    return (
        <>{store.getState().userReducer.user}</>
    );
};