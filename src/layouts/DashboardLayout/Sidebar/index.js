import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// material-ui
import { useTheme, styled } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import MuiDrawer from "@mui/material/Drawer";
import Tooltip from "@mui/material/Tooltip";

// third-party
import PerfectScrollbar from "react-perfect-scrollbar";
import { BrowserView, MobileView } from "react-device-detect";
import { toggleDrawer } from "store/slices/appState";

import menuItems from "./menu-items";

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
  const [subMenu, setSubMenu] = useState({ isOpen: false, moduleName: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchUpLg = useMediaQuery(theme.breakpoints.up("lg"));

  const handleModuleClick = (module) => {
    if (module?.children) {
      setSubMenu({ isOpen: true, moduleName: module.title });
      dispatch(toggleDrawer({ anchor: "left", open: true }));
    } else {
      navigate(module.url);
    }
  };

  const SidebarContent = () => {
    return (
      <React.Fragment>
        {subMenu.isOpen && (
          <div className="p-4 flex items-center">
            <div
              onClick={() => {
                setSubMenu({ isOpen: false });
                if (matchUpLg) {
                  dispatch(toggleDrawer({ anchor: "left", open: false }));
                }
              }}
              className="cursor-pointer  flex space-x-1 text-blue"
            >
              <div>
                <svg
                  class="h-5 w-5 text-blue"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {drawerOpen && (
              <div className="text-center font-semibold">
                {subMenu.moduleName}
              </div>
            )}
          </div>
        )}

        <hr />

        {menuItems.items.map((menu, index) => {
          return menu.children.map((item, itemIndex) => {
            return (
              <React.Fragment>
                {subMenu.isOpen ? (
                  <React.Fragment>
                    {item?.children?.map((childItem, childIndex) => (
                      <React.Fragment>
                        <div className="flex group items-center space-x-3 mb-4 cursor-pointer hover:bg-gray-light border-l-4 border-transparent hover:border-l-4 hover:border-blue-light ">
                          <div>
                            <div className="p-4">
                              <img src={item.icon} className="mx-auto w-5" />
                            </div>
                          </div>
                          {drawerOpen && (
                            <div key={childIndex}>{childItem.title}</div>
                          )}
                        </div>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ) : (
                  <Tooltip placement="right" title={item.title}>
                    <div
                      onClick={() => handleModuleClick(item)}
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.2, duration: 0.7 }}
                      key={item.id}
                      className="flex group items-center space-x-3 mb-4 cursor-pointer hover:bg-gray-light border-l-4 border-transparent hover:border-l-4 hover:border-blue-light"
                    >
                      <div className="p-4">
                        <img src={item.icon} className="mx-auto w-5" />
                      </div>
                      {drawerOpen && (
                        <div
                          initial={{ x: 0, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2, ease: "easeIn" }}
                          className="group-hover:text-blue-light"
                        >
                          {item.title}
                        </div>
                      )}
                    </div>
                  </Tooltip>
                )}
              </React.Fragment>
            );
          });
        })}
      </React.Fragment>
    );
  };

  const drawer = (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Box sx={{ display: "flex", p: 2, mx: "auto" }}>
          <div className="grid grid-cols-2">
            <div>
              logo
            </div>

            logo
          </div>
          <hr />
        </Box>
      </Box>
      <BrowserView>
        <PerfectScrollbar component="div">
          <SidebarContent />
        </PerfectScrollbar>
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <SidebarContent />
        </Box>
      </MobileView>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Drawer
      container={container}
      variant={matchUpLg ? "permanent" : "temporary"}
      anchor="left"
      open={drawerOpen}
      elevation={2}
      onClose={drawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          boxShadow: "2px 2px 3px lightgray",
          color: theme.palette.text.primary,
          borderRight: "none",
          [theme.breakpoints.up("lg")]: {
            top: "60px",
          },
        },
      }}
      ModalProps={{ keepMounted: true }}
      color="inherit"
    >
      {drawer}
    </Drawer>
  );
};

export default Sidebar;
