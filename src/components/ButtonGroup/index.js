import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ButtonGroup = ({ buttons, getCurrentKey, currentKey }) => {
  const handleButtonClick = (key) => {
    getCurrentKey(key);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center  ">
        {buttons.map((button, index) => (
          <div
            className={`px-2 py-2 capitalize w-full text-center cursor-pointer  text-gray `}
            onClick={() => handleButtonClick(button.key)}
          >
            {button.label}

            {currentKey === button.key && (
              <motion.div
                className="border-blue-light border-b-2"
                layoutId="underline"
              />
            )}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ButtonGroup;
