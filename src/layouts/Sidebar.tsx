import { Button, Layout, Menu, MenuProps, Space } from "antd";
import { logo_pnj_logIn } from "assets/images";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import path from "routes/Path";
import { icons } from "utils/icons";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
) => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

const {
  PieChartOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  WarningOutlined,
  ProductOutlined,
  PercentageOutlined,
  DropboxOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
} = icons;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider } = Layout;
  const location = useLocation();
  const navigate = useNavigate();

  const items: MenuItem[] = [
    getItem("Dashboard", `${path.ROOT}`, <PieChartOutlined />),
    getItem("Danh mục sản phẩm", "category", <ProductOutlined />, [
      getItem("Danh mục chính", `${path.MAIN_CATEGORY}`),
      getItem("Danh mục phụ", `${path.SUB_CATEGORY}`),
      getItem("Chi tiết danh mục", `${path.DETAIL_CATEGORY}`),
    ]),
    getItem("Quản lý đơn hàng", "manage-order", <ShoppingCartOutlined />, [
      getItem("Đơn hàng", `${path.ORDER}`),
      getItem("Hợp đồng", `${path.CONTRACT}`),
    ]),
    getItem("Báo cáo", "report", <WarningOutlined />, [
      getItem("Báo cáo đơn hàng", `${path.ORDER_REPORT}`),
      getItem("Báo cáo sản phẩm", `${path.PRODUCT_REPORT}`),
      getItem("Báo cáo khách hàng", `${path.CUSTOMER_REPORT}`),
    ]),
    getItem(
      "Sản phẩm - khuyến mãi",
      "promotion-product",
      <PercentageOutlined />,
      [
        getItem("Ngành hàng", `${path.FACTORY}`),
        getItem("Đơn vị đo lường", `${path.UNIT}`),
        getItem("Sản phẩm", `${path.PRODUCT}`),
        getItem("Khuyến mãi", `${path.PROMOTION}`),
        getItem("Cập nhật giá sản phẩm", `${path.PRODUCT_PRICE}`),
      ]
    ),
    getItem("Quản lý kho vận", "manage-inventory", <DropboxOutlined />, [
      getItem("Quản lý kho", `${path.WAREHOUSE}`),
      getItem("Quản lý pallet", `${path.PALLET}`),
      getItem("Quản lý kệ trong kho", `${path.RACK}`),
    ]),
    getItem("Quản lý khách hàng", "manage-customer", <UserOutlined />, [
      getItem("Khách hàng", `${path.CUSTOMER}`),
      getItem("Cập nhật tuyển khách hàng", `${path.CUSTOMER_ROUTE}`),
    ]),
    getItem("Quản lý đối tác", "manage-partner", <UsergroupAddOutlined />, [
      getItem("Nhà phân phối", `${path.DISTRIBUTOR}`),
      getItem("Đối tác", `${path.BRAND}`),
      getItem("Nhà cung cấp", `${path.SUPPLIER}`),
    ]),
    getItem("System", "system", <SettingOutlined />, [
      getItem("Quản lý tài khoản", `${path.USER}`),
    ]),
  ];

  return (
    <Sider
      width={262}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="flex items-center justify-center py-5">
        <img
          src={logo_pnj_logIn}
          width={60}
          height={60}
          alt="logo"
          className="cursor-pointer"
          onClick={() => navigate(`${path.ROOT}`)}
        />
      </div>
      <Menu
        theme="dark"
        defaultOpenKeys={location.state?.key ? [location.state.key] : []}
        selectedKeys={[location.pathname]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
        onSelect={(e) => {
          navigate(e.keyPath[0], {
            state: { key: e.keyPath.length > 1 ? e.keyPath[1] : undefined },
          });
        }}
      />
    </Sider>
  );
};

export default Sidebar;
