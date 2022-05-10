import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSwipableDrawer } from "store/slices/appState";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const SwipableDrawer = ({ renderComponent, height }) => {
  const dispatch = useDispatch();

  const isSwipableDrawer = useSelector(
    (state) => state.appState.isSwipableDrawer
  );

  console.log(isSwipableDrawer);

  return (
    <div>
      <Root>
        <SwipeableDrawer
          style={{
            height: `${height}%`,
          }}
          anchor="bottom"
          open={isSwipableDrawer}
          onClose={() => dispatch(toggleSwipableDrawer(false))}
          onOpen={isSwipableDrawer}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding,
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
              visibility: "visible",
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            <Typography sx={{ p: 2, color: "text.secondary" }}>
              51 results
            </Typography>
          </StyledBox>
          <StyledBox
            sx={{
              px: 2,
              pb: 2,
              height: "100%",
              overflow: "auto",
            }}
          >
            {renderComponent}
          </StyledBox>
        </SwipeableDrawer>
      </Root>
    </div>
  );
};

export default SwipableDrawer;
