import React from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  BrandPage,
  ContractPage,
  CustomerPage,
  CustomerReportPage,
  CustomerRoutePage,
  DetailCategoryPage,
  DistributorPage,
  FactoryPage,
  Home,
  MainCategoryPage,
  OrderPage,
  OrderReportPage,
  PalletPage,
  ProductPage,
  ProductPricePage,
  ProductReportPage,
  ProfilePage,
  PromotionPage,
  ProtectedRoute,
  RackPage,
  SignIn,
  SubCategoryPage,
  SupplierPage,
  UnitPage,
  User,
  UserPage,
  WarehousePage,
} from "pages";
import path from "./Path";
import { useUser } from "contexts/UserProvider";
import { Spin } from "antd";

const Router = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <Spin />;
  // const children = user?.role?.includes("nguoi_dat_hang")
  //   ? [
  //       { path: `${path.ROOT}`, element: <Home />, index: true },
  //       { path: `${path.USER}`, element: <UserPage /> },
  //     ]
  //   : user?.role?.includes("cua_hang_truong")
  //   ? [
  //       { path: `${path.ROOT}`, element: <Home />, index: true },
  //       { path: `${path.CONTRACT}`, element: <ContractPage /> },
  //     ]
  //   : [
  //       { path: `${path.ROOT}`, element: <Home />, index: true },
  //       { path: `${path.BRAND}`, element: <BrandPage /> },
  //     ];
  const routes = [
    {
      path: `${path.ROOT}`,
      element: <ProtectedRoute />,
      // children,
      children: [
        // index dùng để vào trang đầu tiên khi truy cập trang web
        { path: `${path.ROOT}`, element: <Home />, index: true },
        { path: `${path.MAIN_CATEGORY}`, element: <MainCategoryPage /> },
        { path: `${path.SUB_CATEGORY}`, element: <SubCategoryPage /> },
        { path: `${path.DETAIL_CATEGORY}`, element: <DetailCategoryPage /> },
        { path: `${path.ORDER}`, element: <OrderPage /> },
        { path: `${path.CONTRACT}`, element: <ContractPage /> },
        { path: `${path.ORDER_REPORT}`, element: <OrderReportPage /> },
        { path: `${path.PRODUCT_REPORT}`, element: <ProductReportPage /> },
        { path: `${path.CUSTOMER_REPORT}`, element: <CustomerReportPage /> },
        { path: `${path.FACTORY}`, element: <FactoryPage /> },
        { path: `${path.UNIT}`, element: <UnitPage /> },
        { path: `${path.PRODUCT}`, element: <ProductPage /> },
        { path: `${path.PROMOTION}`, element: <PromotionPage /> },
        { path: `${path.PRODUCT_PRICE}`, element: <ProductPricePage /> },
        { path: `${path.WAREHOUSE}`, element: <WarehousePage /> },
        { path: `${path.PALLET}`, element: <PalletPage /> },
        { path: `${path.RACK}`, element: <RackPage /> },
        { path: `${path.CUSTOMER}`, element: <CustomerPage /> },
        { path: `${path.CUSTOMER_ROUTE}`, element: <CustomerRoutePage /> },
        { path: `${path.DISTRIBUTOR}`, element: <DistributorPage /> },
        { path: `${path.BRAND}`, element: <BrandPage /> },
        { path: `${path.SUPPLIER}`, element: <SupplierPage /> },
        { path: `${path.USER}`, element: <UserPage /> },
        { path: `${path.PROFILE}`, element: <ProfilePage /> },
      ],
    },
    { path: `${path.SIGNIN}`, element: <SignIn /> },
    { path: `${path.ALL}`, element: <Navigate to={`${path.ROOT}`} /> },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
