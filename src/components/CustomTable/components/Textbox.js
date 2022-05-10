import React from "react";

const Textbox = ({ placeholder }) => {
  return (
    <div>
      <input placeholder={placeholder} className="border py-1 px-2" />
    </div>
  );
};

export default Textbox;
