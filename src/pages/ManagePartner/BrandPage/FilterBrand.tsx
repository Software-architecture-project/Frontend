import { Col, Form, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import Content from "layouts/Content";
import React from "react";

export const FilterBrand = () => {
  const [form] = useForm();
  return (
    <Content>
      <Form form={form}>
        <Row gutter={[16, 16]}>
          <Col className="w-72">
            <div className="bg-slate-500 p-2">abc</div>
          </Col>
          <Col className="w-72">
            <div className="bg-slate-500 p-2">abc</div>
          </Col>
          <Col className="w-72">
            <div className="bg-slate-500 p-2">abc</div>
          </Col>
          <Col className="w-72">
            <div className="bg-slate-500 p-2">abc</div>
          </Col>
          <Col className="w-72">
            <div className="bg-slate-500 p-2">abc</div>
          </Col>
          <Col className="w-72">
            <div className="bg-slate-500 p-2">abc</div>
          </Col>
        </Row>
      </Form>
    </Content>
  );
};
