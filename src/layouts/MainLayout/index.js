import React, { useContext, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer"

function MainLayout({ children, withFooter }) {
  return (
    <div className="">
      <div className="sticky top-0" style={{zIndex:999 }}>
        <Header />
      </div>

      <div  className="relative"  >
        <Outlet />
      </div>

      <div><Footer /></div>
    </div>
  );
}

export default MainLayout;
