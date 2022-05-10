import React from "react";

const FieldSet = ({ icon, label, children }) => {
  return (
    <div className="w-full">
      <fieldset className="border-2 border-blue-light px-4 pb-2 rounded-lg w-full">
        <legend className="flex space-x-2 items-center px-1">
          <img src={icon} />
          <label>{label}</label>
        </legend>
        {children}
      </fieldset>
    </div>
  );
};

export default FieldSet;
