import React, { useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import AddCategory from "../pages/Category/AddCategory";

const Home = React.lazy(() => import("pages/Home"))
const Category = React.lazy(() => import("pages/Category"))

const DashboardLayoutRoutes = {
  path: "/",
  element: <DashboardLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/categories",
      element: <Category />,
    },
    {
      path: "/add-category",
      element: <AddCategory />,
    }
  ],

};

export default DashboardLayoutRoutes;
