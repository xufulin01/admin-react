/**
 * 用户添加
 */

import React, { useEffect, useState } from "react";
import store from "@v/store";
import { Button, Input } from "antd";
import { dispatchMethods } from '@v/store/reducer/user'
export const Adduser = () => {

    const { getState, dispatch } = store;
    const [changeValue, setChangeValue] = useState();
    const [value, setValue] = useState()
    useEffect(() => {
        console.log(getState().userReducer);

    }, [])
    store.subscribe(() => {
        setValue(getState())
    })
    const handleClick = () => {
        dispatch({
            type: dispatchMethods.CHANGE_VALUE,
            payload: changeValue
        })
    }
    const handleChnage = (e) => {

        setChangeValue(e.target.value);
    }
    return (
        <>
            <div style={{ display: "flex" }}>
                <Input style={{ width: 150 }} onChange={handleChnage} />
                <Button type="primary" onClick={handleClick}>改变</Button>

            </div>
            <p>{getState().userReducer.user}</p>
            {/* <p>{value}</p> */}
        </>
    );
};