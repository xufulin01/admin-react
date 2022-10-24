/**
 * 添加部门
 * 
 */
import React, { useEffect, useState } from "react";
import { Button, message, Form, Input } from 'antd';
import './index.scss'
import { additionService } from '@api/department';
/**引入redux的store实例，获取状态 */
import store from "@v/store";
export const Addition = () => {
    // 获取部门的redux管理的数据
    const { department } = store.getState().departmentReducer;
    useEffect(() => {
        console.log(department);
    }, [])
    /**
     * 创建部门
     * @param {values} values 
     */
    const additionData = (values) => {
        additionService(values).then(
            res => {
                message.success("创建成功")
            }
        ).catch(err => {
            message.error("创建失败")
        })
    }
    /**
     * 创建部门提交按钮
     * @param {values} values 
     */
    const onFinish = (values) => {
        additionData(values)
    };
    return (
        <div className="addition-outer">
            <div className="addition">
                <Form
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 20 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="部门名称"
                        name="name"
                        rules={[{ required: true, message: '请填写部门名称！！！' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="联系电话"
                        name="tel"
                        rules={[{ required: true, message: "请填写部联系电话！！！" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="人数"
                        name="number"
                        rules={[{ required: true, message: "请填写部门人数！！！" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="备注"
                        name="rember"
                    >
                        <Input.TextArea rows={6} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 5, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            创建部门
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    );
};  