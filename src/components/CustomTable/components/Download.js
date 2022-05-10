import React from "react";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div>
        <div className="">
          <img
            className="mx-auto"
            src={require("assets/icons/download.svg").default}
          ></img>
        </div>
    </div>
  );
};

export default Download;

