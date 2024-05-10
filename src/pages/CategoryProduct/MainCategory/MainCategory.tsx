import React, { useState } from "react";
import {
  FilterMainCategory,
  TableMainCategory,
  ModalCreateMainCategory,
} from "pages";
import { Button, ButtonFilter, FormFilter } from "components";
import { Col, Row } from "antd";
import Content from "layouts/Content";
import { dataTable } from "mock/data";
import { icons } from "utils/icons";

const { PlusOutlined } = icons;

const MainCategory = () => {
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
      {isOpenFilter && <FilterMainCategory />}
      <TableMainCategory data={data} />
      <ModalCreateMainCategory
        open={isOpenModalCreate}
        setOpen={setIsOpenModalCreate}
      />
    </>
  );
};

export default MainCategory;
