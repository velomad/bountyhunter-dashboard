import React from "react";
import { useDispatch } from "react-redux";
import { togglePreviewModal } from "store/slices/appState";

const Upload = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(togglePreviewModal({ isOpen: true }));
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <div onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 cursor-pointer mx-auto file-upload"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      </div>
    </div>
  );
};

export default Upload;
