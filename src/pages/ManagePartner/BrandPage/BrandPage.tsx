import { Flex, Row, Spin, Table } from "antd";
import { Button, ButtonFilter } from "components";
import React, { useState } from "react";
import { TableBrand } from "./TableBrand";
import { FilterBrand } from "./FilterBrand";

const BrandPage = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  return (
    <Spin spinning={false}>
      <Flex justify={"end"} gap={16}>
        <Button title="Create" />
        <ButtonFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
      </Flex>
      {isOpenFilter && <FilterBrand />}
      <TableBrand />
    </Spin>
  );
};

export default BrandPage;
