import React, { useContext, useRef, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import docAPI from "../../utils/docAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleDrawer,
  // TOGGLE_NOTIOFICATION_PANEL,
} from "store/slices/appState";

// material-ui
import { styled, useTheme } from "@mui/material/styles";
import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout({ children, withFooter }) {
  const theme = useTheme();

  // Handle left drawer
  const drawer = useSelector((state) => state.appState.drawer);
  const dispatch = useDispatch();

  const handleLeftDrawerToggle = (value) => {
    dispatch(toggleDrawer({ anchor: "left", open: !drawer.open }));
  };

  const data = docAPI({ test: "test" })
    .collection("posts")
    .read({ data: "data" })
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));

  return (
    <Box sx={{ display: "flex" }}>
      <div>
        <AppBar
          enableColorOnDark
          position="fixed"
          color="inherit"
          elevation={0}
          sx={{
            bgcolor: theme.palette.background.default,
            transition: drawer.open
              ? theme.transitions.create("width")
              : "none",
          }}
        >
          <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
        </AppBar>
      </div>

      <div>
        <Sidebar
          drawerOpen={drawer.open}
          drawerToggle={handleLeftDrawerToggle}
        />
      </div>

      <div style={{ marginTop: "60px", width: "100%" }}>
        <Outlet />
      </div>
    </Box>
  );
}

export default DashboardLayout;
