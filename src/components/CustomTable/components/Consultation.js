import React from "react";
import { Link } from "react-router-dom";

const Consultation = () => {
  return (
    <div>
      <Link to="/Doctor-Desk/Doctor-consultation">
        <div className="">
          <img
            className="mx-auto"
            src={require("assets/icons/desk.svg").default}
          ></img>
        </div>
      </Link>
    </div>
  );
};

export default Consultation;

