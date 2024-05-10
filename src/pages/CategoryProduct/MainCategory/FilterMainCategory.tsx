import { Col, Form, Input, Layout, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { ButtonFilter } from "components";
import Content from "layouts/Content";
import React, { memo, useState } from "react";

const FilterMainCategory = () => {
  const [form] = useForm();

  const onFinish = (values: any) => {
    console.log("values: ", values);
  };

  return (
    <Content>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        size="small"
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="" span={6}>
            <Form.Item
              name="pof_code"
              label="Mã danh mục"
              className="mb-1.5"
              labelCol={{ style: { paddingBottom: "5px" } }}
            >
              <Input
                placeholder="Nhập mã danh mục"
                style={{ padding: "9px 16px" }}
              />
            </Form.Item>
          </Col>
          <Col className="" span={6}>
            <Form.Item
              name="pof_code"
              label="Mã danh mục"
              className="mb-1.5"
              labelCol={{ style: { paddingBottom: "5px" } }}
            >
              <Input
                placeholder="Nhập mã danh mục"
                style={{ padding: "9px 16px" }}
              />
            </Form.Item>
          </Col>
          <Col className="" span={6}>
            <Form.Item
              name="pof_code"
              label="Mã danh mục"
              className="mb-1.5"
              labelCol={{ style: { paddingBottom: "5px" } }}
            >
              <Input
                placeholder="Nhập mã danh mục"
                style={{ padding: "9px 16px" }}
              />
            </Form.Item>
          </Col>
          <Col className="" span={6}>
            <Form.Item
              name="pof_code"
              label="Mã danh mục"
              className="mb-1.5"
              labelCol={{ style: { paddingBottom: "5px" } }}
            >
              <Input
                placeholder="Nhập mã danh mục"
                style={{ padding: "9px 16px" }}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Content>
  );
};

export default memo(FilterMainCategory);
