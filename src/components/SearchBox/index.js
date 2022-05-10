import React from "react";

const SearchBox = ({ placeholder = "Search..", borderFull, rounded }) => {
  return (
    <div className="flex relative items-center ">
      <input
        type="text"
        className={`focus:outline-none pb-2 group p-2 ${
          borderFull ? "border" : "border-b-2"
        } ${rounded && "rounded-lg"} border-gray w-full`}
        placeholder={placeholder}
      />
      <div className="absolute right-2 ">
        <svg
          class="h-6 w-6 text-gray group-hover:text-blue-light"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBox;
