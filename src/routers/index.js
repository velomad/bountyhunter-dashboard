import { useRoutes, useMatch, useLocation } from "react-router-dom";

// routes
import MinimalLayoutRoutes from "./MinimalLayoutRoutes";
import DashboardLayoutRoutes from "./DashboardLayoutRoutes";
import { useEffect } from "react";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const location = useLocation();

  return useRoutes([
    MinimalLayoutRoutes,
    DashboardLayoutRoutes,
  ]);
}
