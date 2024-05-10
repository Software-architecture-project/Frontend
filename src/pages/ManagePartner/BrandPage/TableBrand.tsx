import { Table, TableColumnsType } from "antd";
import Content from "layouts/Content";

const data = [
  {
    key: "1",
    name: "John Brown",
    status: 32,
    desc: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    status: 2,
    desc: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    status: 2,
    desc: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Disabled User",
    status: 1,
    desc: "Sydney No. 1 Lake Park",
  },
];

export const TableBrand = () => {
  const columns: TableColumnsType = [
    {
      title: "STT",
      dataIndex: "stt",
      render: (__, _, index) => <a>{index + 1}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (value: any) => <a>{value}</a>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },
    {
      title: "Mô tả",
      dataIndex: "desc",
    },
  ];

  return (
    <Content>
      <Table
        rowKey={(record) => record.key}
        columns={columns}
        scroll={{ x: 958 }}
        dataSource={data}
        pagination={{
          className: "flex items-center",
          current: 1,
          pageSize: 10,
          total: 50,
          showSizeChanger: true,
          //   pageSizeOptions: ["10", "20", "50"],
          //   onChange: HocChangePagination(history),
        }}
      />
    </Content>
  );
};
