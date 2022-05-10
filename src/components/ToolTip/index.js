import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function CustomTooltip({ label, children, placement="right", isArrow=true }) {
  return (
    <Tooltip
      title={label}
      placement={placement}
      arrow={isArrow}
    >
      {children}
    </Tooltip>
  );
}
