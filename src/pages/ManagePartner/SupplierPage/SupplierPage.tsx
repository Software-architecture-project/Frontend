import { Col, Row } from "antd";
import { Button, ButtonFilter } from "components";
import { dataTable } from "mock/data";
import React, { useState } from "react";
import { icons } from "utils/icons";
import {
  ModalCreateSupplierPage,
  FilterSupplierPage,
  TableSupplierPage,
} from "pages";

const { PlusOutlined } = icons;

const SupplierPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [data, setData] = useState(dataTable);
  return (
    <>
      <Row gutter={[8, 16]} align={"middle"} justify={"end"}>
        <Col>
          <Button
            iconBefore={<PlusOutlined />}
            handleOnclick={() => setIsOpenModalCreate((prev) => !prev)}
            title="Tạo danh mục"
          />
        </Col>
        <Col>
          <ButtonFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
        </Col>
      </Row>
      {isOpenFilter && <FilterSupplierPage />}
      <TableSupplierPage data={data} />
      <ModalCreateSupplierPage
        open={isOpenModalCreate}
        setOpen={setIsOpenModalCreate}
      />
    </>
  );
};

export default SupplierPage;
