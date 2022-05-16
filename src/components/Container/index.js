import React from "react";

const Container = ({ children, title, endAdornment }) => {
  return (
    <div
      className="px-4 "
      style={{
        backgroundColor: "#f2f8fb",
      }}
    >
      <div className="py-2 flex  items-center justify-between">
        <div className="text-blue-light font-semibold uppercase ">{title}</div>
        {endAdornment && <div className="">{endAdornment}</div>}
      </div>
      {children}
    </div>
  );
};

export default Container;
