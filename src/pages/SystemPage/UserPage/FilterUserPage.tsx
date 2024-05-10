import { Col, Form, Input, Row } from "antd";
import { Button } from "components";
import Content from "layouts/Content";
import React from "react";

const FilterUserPage = () => {
  const onFinish = (values: any) => {
    console.log("values: ", values);
  };

  return (
    <Content>
      <Form
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
        size="small"
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6} className="h-[80px]">
            <Form.Item label="Họ và tên" name="fullName">
              <Input
                allowClear
                size="large"
                placeholder="Họ và tên"
                className="w-full"
              />
            </Form.Item>
          </Col>

          <Col span={6} className="h-[80px]">
            <Form.Item label="Email" name="email">
              <Input
                allowClear
                size="large"
                placeholder="Email"
                className="w-full"
              />
            </Form.Item>
          </Col>

          <Col span={6} className="h-[80px]">
            <Form.Item label="Chức vụ" name="jobTitleCode">
              <Input
                allowClear
                size="large"
                placeholder="Chức vụ"
                className="w-full"
              />
            </Form.Item>
          </Col>

          <Col span={6} className="h-[80px]">
            <Form.Item label="Bộ phận" name="departmentCode">
              <Input
                allowClear
                size="large"
                placeholder="Bộ phận"
                className="w-full"
              />
            </Form.Item>
          </Col>

          <Col span={6} className="h-[80px]">
            <Form.Item label="Chi nhánh" name="plantCode">
              <Input
                allowClear
                size="large"
                placeholder="Chi nhánh"
                className="w-full"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row justify={"end"}>
          <Col>
            <Button title="Tìm kiếm" type="submit" />
          </Col>
        </Row>
      </Form>
    </Content>
  );
};

export default FilterUserPage;
