import { display } from "@mui/system";
import React from "react";

const Button = ({
  onClick,
  children,
  background = "bg-blue",
  color = `text-white`,
  size = "base",
  type,
  variant,
  hoverColor = "",
  border = "border-blue-light",
  disabled = false,
  id,
  displayArrow = false,
  form,
  classes,
}) => {
  return (
    <button
      type={type}
      id={id}
      disabled={disabled}
      form={form}
      onClick={onClick}
      style={{ minWidth: "8rem" }}
      className={`
      ${classes}
       hover:shadow-lg py-2 px-2 rounded-md ${
         size === "small"
           ? "text-small"
           : size === "regular"
           ? "text-regular"
           : size === "large"
           ? "text-base"
           : "text-regular"
       }
      ${
        variant !== "outlined" && !disabled
          ? background
          : disabled
          ? "bg-gray-light"
          : `border bg-transparent  ${border}`
      }
       ${  color}`}
    >
      {children} {displayArrow && "→"}
    </button>
  );
};

export default Button;
