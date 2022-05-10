import React from "react";

const InrSymbol = ({ character }) => {
  switch (character) {
    case "shortRupee":
      return <div>&#x20b9;</div>;

    case "rupee":
      return <div>&#x20a8;</div>;

    default:
      return null;
  }
};

export default InrSymbol;
