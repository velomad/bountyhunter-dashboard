import React from "react";
import { Link } from "react-router-dom";

const Sms = ({navigationPath}) => {
  return (
    <Link to={navigationPath}>
      <div>
        <svg
          class="h-5 w-5 mx-auto text-gray"
          fill="none"
          viewBox="0 0 24 24"
          stroke="gray"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Sms;
