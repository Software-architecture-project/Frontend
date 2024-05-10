import { Col, Row } from "antd";
import { Button, ButtonFilter } from "components";
import React, { useState } from "react";
import { FilterUserPage, TableUserPage } from "pages";
import ModalCreateUser from "./ModalCreateUser";
import { icons } from "utils/icons";
import { dataTable } from "mock/data";

const { PlusOutlined } = icons;

const UserPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);
  const [dataUser, setDataUser] = useState(dataTable);
  return (
    <>
      <Row gutter={[8, 16]} align={"middle"} justify={"end"}>
        <Col>
          <Button
            iconBefore={<PlusOutlined />}
            handleOnclick={() => setIsOpenModalCreate((prev) => !prev)}
            title="Tạo tài khoản"
          />
        </Col>
        <Col>
          <ButtonFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
        </Col>
      </Row>
      {isOpenFilter && <FilterUserPage />}
      <TableUserPage data={dataUser} />
      <ModalCreateUser
        open={isOpenModalCreate}
        setOpen={setIsOpenModalCreate}
      />
    </>
  );
};

export default UserPage;
