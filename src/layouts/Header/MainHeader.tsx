import React from "react";
import { Header } from "antd/es/layout/layout";
import BreadCrumb from "./BreadCrumb";
import Avatar from "./Avatar";

const MainHeader = () => {
  return (
    <Header className="px-5 py-10 bg-sub flex justify-between items-center">
      <BreadCrumb />
      <Avatar />
    </Header>
  );
};

export default MainHeader;
