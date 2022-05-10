import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedRow } from "store/slices/customTableSlice";
import Delete from "./Delete";
import Edit from "./Edit";
import View from "./View";
import Consultation from "./Consultation";
import Sms from "./Sms";
import Upload from "./Upload";
import Download from "./Download";

const TypeSelector = ({
  id,
  label,
  value,
  options,
  fieldLabel,
  navigationPath,
  readOnly,
}) => {
  const dispatch = useDispatch();
  const selectedGridRow = useSelector(
    (state) => state.customTableReducer.selectedRow
  );

  const handleRadioChange = (e) => {
    dispatch(setSelectedRow(e.target.value));
  };

  switch (label) {
    case "radio":
      return (
        <input
          type="radio"
          name="rowSelection"
          value={id}
          checked={selectedGridRow == id}
          onChange={handleRadioChange}
        />
      );
    case "text":
      return <p className="text-medium">{value}</p>;
    case "checkbox":
      return (
        <input type="checkbox" value={id} style={{ textAlign: "center" }} />
      );
    case "input":
      return (
        <React.Fragment>
          <label className="text-regular">{fieldLabel}</label>
          <input
            style={{ height: "25px" }}
            type="input"
            value={value}
            className={` ${
              readOnly && "disabled focus:outline-none"
            } disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 border w-full px-2 focus:outline-none text-regular`}
          />
        </React.Fragment>
      );
    case "textarea":
      return (
        <React.Fragment>
          <label className="text-regular">{fieldLabel}</label>
          <textarea
            style={{ height: "25px" }}
            className="border w-full px-2 focus:outline-none text-regular "
          />
        </React.Fragment>
      );
    case "select":
      return (
        <React.Fragment>
          <div className="text-medium">
            <label className="font-semibold">{fieldLabel}</label>
            <select
              className="w-full border focus:outline-none text-regular"
              style={{ height: "25px" }}
            >
              {options && options?.map((option, index) => (
                <option key={index} value="A">
                  {option}
                </option>
              ))}
            </select>
          </div>
        </React.Fragment>
      );
    case "edit":
      return <Edit />;
    case "delete":
      return <Delete />;
    case "view":
      return <View />;
    case "consultation":
      return <Consultation />;
    case "sms":
      return <Sms navigationPath={navigationPath} />;
    case "upload":
      return <Upload />;
    case "download":
      return <Download />;

    default:
      return null;
  }
};

export default TypeSelector;
