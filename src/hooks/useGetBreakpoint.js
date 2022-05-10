import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const useGetBreakpoint = (match, breakpoint) => {
  const theme = useTheme();
  const isBreaking = useMediaQuery(theme.breakpoints[match](breakpoint));

  return isBreaking;
};

export default useGetBreakpoint;
