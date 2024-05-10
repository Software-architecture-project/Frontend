import { Space, Table, Tooltip } from "antd";
import React, { memo, useState } from "react";
import type { TableColumnsType } from "antd";
import Content from "layouts/Content";
import { dataTable } from "mock/data";
import { icons } from "utils/icons";
import { ModalEditMainCategory, ModalViewMainCategory } from "pages";

interface IProps {
  data: any;
}

const { EditOutlined, EyeOutlined } = icons;

const TableMainCategory = ({ data }: IProps) => {
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalView, setIsOpenModalView] = useState(false);

  const columns: TableColumnsType = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Thao tác",
      fixed: "right",
      align: "center",
      width: 100,
      render: (_: any, record: any) => {
        return (
          <Space size={"middle"} className="text-lg ">
            <Tooltip placement="top" title={"Chỉnh sửa"}>
              <EditOutlined
                onClick={() => {
                  // setCurrentUser(record);
                  // setIsPermissionModalVisible(true);
                  setIsOpenModalEdit((prev) => !prev);
                }}
                className="cursor-pointer text-[#00538f]"
              />
            </Tooltip>
            <Tooltip placement="top" title={"Xem chi tiết"}>
              <EyeOutlined
                onClick={() => {
                  // setCurrentUser(record);
                  // setIsPermissionModalVisible(true);
                  setIsOpenModalView((prev) => !prev);
                }}
                className="cursor-pointer text-[#00538f]"
              />
            </Tooltip>
          </Space>
        );
      },
    },
  ];
  return (
    <Content>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        scroll={{ x: 1000 }}
        dataSource={data}
        size="middle"
        // loading={getUsersLoading}
        // pagination={{
        //   current: page,
        //   pageSize: page_size,
        //   total: data?.total,
        //   showSizeChanger: true,
        //   pageSizeOptions: ["10", "20", "50"],
        //   onChange: HocChangePagination(history),
        // }}
      />
      <ModalEditMainCategory
        open={isOpenModalEdit}
        setOpen={setIsOpenModalEdit}
      />
      <ModalViewMainCategory
        open={isOpenModalView}
        setOpen={setIsOpenModalView}
      />
    </Content>
  );
};
export default memo(TableMainCategory);
