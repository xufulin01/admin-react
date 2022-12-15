/**
 * 部门列表
 *
 */
import React, { useEffect, useState } from "react";
import { Form, Button, Input, Table, Popconfirm, message, Modal } from "antd";
import { departmentListService, departmentDeleteService, departmentUpdataService, departmentDetialService } from "@api/department";
import "./index.scss";

export const List = () => {
    const [dataSource, setDataSource] = useState([]);
    const [form] = Form.useForm();
    const [id, setId] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * 表格表头数据、、定义列
     */
    const columns = [
        {
            title: "部门名称",
            dataIndex: "name",
            key: "name",
            align: "center",
            width: 250
        },
        {
            title: "电话",
            dataIndex: "tel",
            key: "tel",
            align: "center",
            width: 250
        },
        {
            title: "人数",
            dataIndex: "number",
            key: "number",
            align: "center",
            width: 150
        },
        {
            title: "备注",
            dataIndex: "rember",
            key: "rember",
            align: "center",

        },
        {
            title: "操作",
            dataIndex: "action",
            key: "action",
            align: "center",
            width: 250,
            render: (_, recode) => {
                return (
                    <>
                        <Popconfirm
                            title="确定要删除么?"
                            onConfirm={() => handleDeteleClick(recode)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <Button type="link" >
                                删除
                            </Button>
                        </Popconfirm>
                        <Button type="link" onClick={() => { editClick(recode.id) }} >
                            编辑
                        </Button>
                    </>
                );
            },
        },
    ];
    /**
     * 初始化获取列表数据
     */
    useEffect(() => {
        getList();
    }, []);
    /**
     * 查询数据接口，有name为搜索借口
     * @param {name?} params 
     */
    const getList = (params) => {
        departmentListService(params).then((res) => {
            console.log(res.data);
            setDataSource(res.data);
        });
    };
    /**
         * 重新编辑部门数据接口
         * @param {value} values 
         */
    const updataList = (value) => {
        departmentUpdataService(value).then(res => {
            getList();
            message.success("编辑成功")
        }).catch(err => {
            message.success("编辑失败")
        })
    }
    /**
     * 编辑部门按钮事件
     * @param {recode} reocde 
     */
    const editClick = (id) => {
        setId(id)
        departmentDetialService({ id: id }).then(res => {
            form.setFieldsValue(res.data[0])
        })
        setIsModalOpen(true);
    }
    /**
     * 编辑确认按钮
     */
    const handleOk = () => {
        setIsModalOpen(false);
        updataList({ ...form.getFieldsValue(), id: id })

    };
    /**
     * 关闭模态框
     */
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    /**
     * 表格删除确认按钮
     * @param {recode} recode
     */
    const handleDeteleClick = (recode) => {
        departmentDeleteService({ id: recode.id }).then((res) => {
            message.success("删除成功")
            getList()
        }).catch(err => {
            message.error("删除失败")
        })
        console.log(recode);
    };
    /**
     * 搜索Form数据提交
     * @param {value} value
     */
    const onFinish = (value) => {
        console.log(value);
        getList(value)
    };
    /**
     * 重置页面数据
     */
    const handleResect = () => {
        getList();
    };

    return (
        <div className="list-outer">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                layout="inline"
            >
                <Form.Item label="部门名称" name="name">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        搜索
                    </Button>
                </Form.Item>
                <Button type="primary" onClick={handleResect}>
                    重置
                </Button>
            </Form>
            <div style={{ marginTop: "30px" }}>
                <Table rowKey={"id"} bordered columns={columns} dataSource={dataSource}></Table>
            </div>
            <Modal
                title="部门编辑"
                okText="确认"
                cancelText="取消"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}>
                <div className="edit">
                    <Form
                        name="basic"
                        form={form}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 20 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="部门名称"
                            name="name"
                        >
                            <Input disabled />
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

                    </Form>
                </div>
            </Modal>
        </div>
    );
};
