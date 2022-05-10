import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSignInModal } from "store/slices/appState";
import { Collapse } from "@mui/material";
import { Link } from "react-router-dom";
import { Translation } from "react-i18next";
import Button from "components/Button";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [enableDropDown, setEnableDropDown] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const isSignInModalOpen = useSelector(
    (state) => state.appState.isSignInModalOpen
  );

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (enableDropDown && ref.current && !ref.current.contains(e.target)) {
        setEnableDropDown(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [enableDropDown]);

  const handleSignInModal = () => {
    dispatch(toggleSignInModal(!isSignInModalOpen));
  };

  return (
    <React.Fragment>
      <Translation ns="common">
        {(t) => (
          <nav
            className={`${
              scrollPosition > 200
                ? "text-black bg-white shadow-md"
                : "text-white bg-transparent"
            } duration-700  items-center justify-between px-6 `}
          >
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full flex justify-between items-center md:w-auto md:static md:block md:justify-start">
                <Link to="/">
                  <div>
                    logo
                  </div>
                </Link>
                <div className="sm:hidden">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`md:flex md:justify-end flex-grow items-center ${
                  navbarOpen ? " flex" : " hidden"
                }`}
              >
                <ul className=" md:flex items-center space-x-12 font-medium capitalize text-regular py-4">
                  {/* <Link to=""> */}
                  {/* <Link to="big-calender" onClick={() => setNavbarOpen(false)}>
                  <li>Schedule Appointment</li>
                  </Link> */}

                  {/* </Link> */}
                  {/* <Link
                    to="/things-to-know"
                    onClick={() => setNavbarOpen(false)}
                  >
                    <li>link item</li>
                  </Link> */}
                  <Link to="#" onClick={() => setNavbarOpen(false)}>
                    <li>About</li>
                  </Link>
                  <Link to="#" onClick={() => setNavbarOpen(false)}>
                    <li>Partners</li>
                  </Link>
                  <Link to="#" onClick={() => setNavbarOpen(false)}>
                    <li>Support</li>
                  </Link>
                  <li>
                    <Button
                      onClick={handleSignInModal}
                      variant="outlined"
                      color={`${
                        scrollPosition > 200 ? "text-black" : "text-white"
                      }`}
                      border={`${
                        scrollPosition > 200 ? "border-black" : "border-white"
                      }`}
                    >
                      Sign In
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )}
      </Translation>
    </React.Fragment>
  );
};

export default Header;
