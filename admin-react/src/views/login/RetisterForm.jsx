/**
 * 注册页面
 */
import React, { useEffect } from "react";
import "./index.scss";
import { Button, Form, Input, message } from "antd";
import { retisterService } from '@api/loginService'
export const RetisterFrom = (props) => {
    /**
     * 注册按钮
     * @param {values} values 
     */
    const onFinish = (values) => {
        console.log("Success:", values);
        retisterService({ username: values.username, password: values.password }).then(res => {
            if (res.resulte) {
                message.success("注册成功")
            } else {
                message.error("注册失败")
            }
        }
        ).catch((err) => {
            message.error("注册失败")
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    /**
     * 
     * 点击切换登录页面
     */
    const handlelinkClick = () => {
        console.log("登陆");
        props.handelState();
    };

    return (
        <div className="login-outer">
            <div className="login">
                <div className="login-title">
                    <p>注册账号</p>
                    <Button type="link" onClick={handlelinkClick}>
                        登陆
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
                        rules={[
                            { required: true, message: "密码不能为空" },
                            { min: 6, message: "密码不能小于6位" },
                            { max: 20, message: "密码不能大于20位" },
                            ({ getFieldsValue }) => ({
                                validator(_, value) {
                                    if (getFieldsValue().resume) {
                                        if (value === getFieldsValue().resume) {
                                            return Promise.resolve();
                                        } else {
                                            return Promise.reject("密码不一致请确认");
                                        }
                                    } else {
                                        return Promise.resolve();
                                    }
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="password" />
                    </Form.Item>
                    <Form.Item
                        name="resume"
                        rules={[
                            { required: true, message: "确定密码不能为空" },
                            ({ getFieldsValue }) => ({
                                validator(_, value) {
                                    if (value === getFieldsValue().password) {
                                        return Promise.resolve();
                                    } else {
                                        return Promise.reject("密码不一致请确认");
                                    }
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder=" resume load password " />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            注册账号
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
