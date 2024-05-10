import React from "react";
import ProtectedRoute from '../pages/Root';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import {
  Home,
  SignIn,
  RegisterCourse
} from "pages";
import path from "./Path";
import { useUser } from "contexts/UserProvider";
import { Spin } from "antd";

const Router = () => {
  const { user, isLoading } = useUser();
  if (isLoading) return <Spin />; 
  const routes = [
    {
      path: `${path.ROOT}`,
      element: <ProtectedRoute />,
      // children,
      children: [
        // index dùng để vào trang đầu tiên khi truy cập trang web
        { path: `${path.ROOT}`, element: <Home />, index: true },
        { path: `${path.RegisterCourse}`, element: <RegisterCourse /> },
      ],
    },
    { path: `${path.SIGNIN}`, element: <SignIn /> },
    { path: `${path.ALL}`, element: <Navigate to={`${path.ROOT}`} /> },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Router;
