import React, { Profiler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  toggleProfileModal,
  toggleChangePasswordModal,
  toggleSwipableDrawer,
} from "store/slices/appState";

import {
  toggleDrawer,
  // TOGGLE_NOTIOFICATION_PANEL,
} from "store/slices/appState";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import Menu from "../../../components/Menu";
import TextEditor from "../../../components/TextEditor";

const AccountMenu = () => {
  return (
    <div className="flex space-x-2 items-center">
      <div>Dr. John Smith</div>
      <div>
        <svg class="h-5 w-5 text-gray" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

const Header = ({ handleLeftDrawerToggle }) => {
  const dispatch = useDispatch();

  const [showSearch, setSearch] = useState(false);

  const { isProfileModalOpen, isChangePasswordModalOpen } = useSelector(
    (state) => state.appState
  );

  const handleClick = () => {
    dispatch(toggleProfileModal(!isProfileModalOpen));
  };

  const handleSearchClick = () => {
    console.log("clicked");
    dispatch(toggleSwipableDrawer(true));
  };

  const theme = useTheme();
  const navigate = useNavigate();

  const [isSearchFocused, setSearchFocus] = useState(false);

  return (
    <React.Fragment>
      <div className=" px-4 flex items-center justify-between shadow-md z-20">
        <Box
          className="space-x-4 flex items-center"
          sx={{
            height: "60px",
            [theme.breakpoints.down("md")]: {
              width: "auto",
            },
          }}
        >
          <div onClick={() => handleLeftDrawerToggle()}>
            <svg
              className="h-6 w-6 text-gray cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <div className="flex items-center lg:flex hidden">
            <div>
              logo
            </div>

            <div>
              logo
            </div>
          </div>

          <div className="lg:hidden" onClick={handleSearchClick}>
            <svg
              className="h-8 w-8 text-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </Box>

        <div className="flex items-center space-x-4">

          <div className="mr-8">
            <div className="relative">
              <div
              >
                logo
              </div>

              <div
                style={{ top: "42px" }}
              >
              </div>
            </div>
          </div>
          <div>
            <Menu
              MenuComponent={AccountMenu}
              menuItems={[
                { label: "Profile", clickHandler: handleClick },
                {
                  label: "Change Password",
                  clickHandler: () =>
                    dispatch(
                      toggleChangePasswordModal(!isChangePasswordModalOpen)
                    ),
                },
                { label: "Logout", clickHandler: () => navigate("/") },
              ]}
            />
          </div>
          <div>
           logo
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
