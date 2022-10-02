import React, { useEffect } from "react";
import "./index.scss";
import { Button, Form, Input, message } from "antd";
import { loginService } from '../../service/loginService'
export const LoginForm = (props) => {

    const onFinish = (values) => {
        console.log('Success:', values);
        loginService({ username: values.username, password: values.password }).then(res => {
            console.log(res, 9999999999999999);
            if (res.data.result === true) {
                message.success("登录成功")
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