import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleLightbox } from "store/slices/appState";

const View = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="" onClick={() => dispatch(toggleLightbox(true))}>
        <img className="mx-auto" src={require("assets/icons/view_icon.svg").default}></img>
      </div>
    </div>
  );
};

export default View;
