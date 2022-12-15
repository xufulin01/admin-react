/**
 * 用户添加
 */

import React, { useEffect, useState } from "react";
import store from "@v/store";
import { Button, Input, Table } from "antd";
import { dispatchMethods } from '@v/store/reducer/user'
export const Adduser = () => {

    const { getState, dispatch } = store;
    const [changeValue, setChangeValue] = useState();
    const [value, setValue] = useState(getState().userReducer.user)
    useEffect(() => {
        console.log(getState().userReducer);

    }, [getState().userReducer.user])
    // store.subscribe(() => {
    //     setValue(getState())
    // })
    const handleClick = () => {
        dispatch({
            type: dispatchMethods.CHANGE_VALUE,
            payload: changeValue
        })
        setValue(getState().userReducer.user)
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
            <p>{value}</p>
            {/* <p>{value}</p> */}
            {/* <Table rowKey={"id"} bordered columns={columns} dataSource={dataSource}></Table> */}

        </>
    );
};