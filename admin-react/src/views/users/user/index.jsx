/**
 * 用户中心
 */

import React from "react";
import store from "@v/store";
export const User = () => {

    return (
        <>{store.getState().userReducer.user}</>
    );
};