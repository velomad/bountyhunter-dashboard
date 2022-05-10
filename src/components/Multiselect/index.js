import React from "react";
import Select, { components, ControlProps } from "react-select";

const Multiselect = ({ options, controlLabel = "",label ="",isMulti = true}) => {

  // const customStyles = {
  //   option: (provided, state) => ({
  //     ...provided,
  //     borderBottom: '1px dotted pink',
  //     color: state.isSelected ? 'red' : 'blue',
  //     padding: 20,
  //   }),
  //   control: (styles) => ({ ...styles,width:"300px", maxHeight:"20px !important", maxHeight:"20px !important" }),
  //   singleValue: (provided, state) => {
  //     const opacity = state.isDisabled ? 0.5 : 1;
  //     const transition = 'opacity 300ms';
  
  //     return { ...provided, opacity, transition };
  //   }
  // }
  const ControlComponent = (props) => {
    return (
      <div className={`${controlLabel != "" ? " p-1 bg-gray-lightest rounded-lg" : ""}`}>
        <p className={`${controlLabel != "" ? "p-1 text-blue-light font-semibold uppercase" : ""}`}>{controlLabel}</p>
        <components.Control {...props} />
      </div>
    );
  };
  return (
    <div >
      <Select
      // styles={customStyles}
      placeholder={label != "" ? label : 'Select...'}
        isMulti={isMulti}
        options={options}
        components={{
          Control: ControlComponent,
        }}
      />
    </div>
  );
};

export default Multiselect;
