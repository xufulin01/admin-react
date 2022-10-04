/***
 * 登录页面
 */
import React, { useEffect } from "react";
import "./index.scss";
import { Button, Form, Input, message } from "antd";
import { loginService } from '@api/loginService';
import { useHistory } from "react-router-dom";
import { setToken, setUser, setTokenTime } from "@/utils/tokens";
export const LoginForm = (props) => {
    const history = useHistory()
    /***
     * 提交按钮
     */
    const onFinish = (values) => {
        console.log('Success:', values);
        loginService({ username: values.username, password: values.password }).then(res => {
            if (res.result === true) {
                setToken(res.data)
                setUser(values.username)
                setTokenTime()
                message.success("登录成功")
                history.push("/home")
            } else {
                message.error("账号或者密码有误")
            }
        }).catch((err) => {
            message.error("接口调用失败")
            console.log(err);
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    /***
     * 点击切换注册
     */
    const handlelinkClick = () => {
        console.log("注册账号");
        props.handelState()
        console.log(props);
    }

    return (
        <div className="login-outer">

            <div className="login">
                <div className="login-title">
                    <p>登陆</p>
                    <Button type="link" onClick={handlelinkClick}>
                        注册账号？
                    </Button>
                </div>
                <Form
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input placeholder="username" />
                    </Form.Item>
                    <Form.Item
                        name="password"

                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password placeholder="password" />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" block>
                            登陆
                        </Button>

                    </Form.Item>

                </Form>
            </div>
        </div>
    );
};