import React from "react";

const Card = (props) => {
  const {
    classes,
    background = "bg-white",
    children,
    rounded = "rounded-lg",
    hoverBackground,
    hoverColor,
    shadow = "shadow-md",
    padding = "p-4",
    hoverShadow,
    border,
    borderColor,
    hoverBorder,
    hoverBorderColor,
    cursor = false,
    handleClick,
    styles,
    id
  } = props;
  return (
    <div
      id={id}
      onClick={handleClick}
      className={`card-component w-full ${shadow} hover:${hoverBackground} ${background} hover:${hoverShadow}  ${rounded} ${
        cursor && "cursor-pointer"
      }  ${border && "border"}  ${borderColor} hover:${
        hoverBorder && "border"
      }  hover:${hoverBorderColor} ${classes} ${padding}`}
      style={styles}
    >
      <div className={`hover:${hoverColor}`}>{children}</div>
    </div>
  );
};

export default Card;
