import React from "react";
import { useLocation } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const BreadCrumb = ({ link }) => {
  const location = useLocation();
  const pathArry = location.pathname.split("/");

  return (
    <div>
      <div>
        <div className="flex items-center">
          {pathArry.slice(1, pathArry.length).map((path, index) => (
            <div key={index}>
              <div className="flex items-center text-regular">
                <div className="text-regdivar capitalize">
                  {path.replace(/-/g, " ")}
                </div>
                <div
                  className={`${
                    pathArry.length && index == pathArry.length - 2
                      ? "hidden"
                      : "block"
                  }`}
                >
                  <ArrowRightIcon
                    style={{ color: "#145da1" }}
                    fontSize="small"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
