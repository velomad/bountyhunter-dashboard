import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSchedulerDrawer } from "store/slices/schedulerSlice";
import { useOutsideClick } from "../../hooks";
const CustomDrawer = ({ drawerWidth, children }) => {
  const [drawerHeight, setDrawerHeight] = useState(0);

  useLayoutEffect(() => {
    const element = document.getElementsByClassName("rbc-time-view");
    setDrawerHeight(element[0].clientHeight + 5);
  }, []);

  const dispatch = useDispatch();
  const schedulerDrawer = useSelector(
    (state) => state.schedulerReducer.schedulerDrawer
  );
  const ref = useRef();
  useOutsideClick(ref, () =>
    dispatch(toggleSchedulerDrawer({ sanchor: "left", isOpen: false }))
  );
  return (
    <React.Fragment>
      <div class="flex ">
        <div
          style={{ maxWidth: Number(drawerWidth), height: drawerHeight }}
          className={`mt-10 shadow-2xl  absolute  z-20 bg-white border-r h-full ${
            schedulerDrawer.open && "border-2 border-blue-light"
          }`}
        >
          <div className=" transition-all ease-in-out duration-400 ">
            {schedulerDrawer.open && children}
          </div>
        </div>
        <div
          ref={ref}
          className={` mt-10  absolute  z-10 transition-all ease-in-out duration-400 ${
            schedulerDrawer.open ? "block w-full" : "w-0"
          }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            height: drawerHeight,
          }}
        ></div>
      </div>
    </React.Fragment>
  );
};

export default CustomDrawer;
