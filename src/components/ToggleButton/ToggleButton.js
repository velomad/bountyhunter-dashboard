import React, { useEffect, useState } from "react";

const ToggleButton = ({ btns, getToggledValue,toggleForm }) => {

  const [currentState, setCurrentState] = useState(toggleForm);
  

useEffect(()=>{
  setCurrentState(toggleForm)
})

  const handleClick = (val) => {
    getToggledValue(val);
    setCurrentState(val);
  };

  return (
    <React.Fragment>
      <div className="flex space-x-0.5">
        {btns?.map((btn, idx) => (
          <div
            key={idx}
            onClick={() => handleClick(btn.btnName)}
            className={`w-36 p-2 cursor-pointer text-center text-large ${
              currentState === btn.btnName
                ? "border-b-2 border-blue text-blue"
                : "hover:bg-gray-light rounded-tl-lg rounded-tr-lg"
            } border-b-2`}
          >
            {btn.btnText}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ToggleButton;
