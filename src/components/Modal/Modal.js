import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import  Button  from "components/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const theme = createTheme({
  components: {
    //   MuiDialogContent: {
    //     styleOverrides: {
    //       root: {
    //         padding: "15px",
    //       },
    //     },
    //   },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: "transparent",
    //     },
    //   },
    // },
    //   MuiDialog: {
    //     styleOverrides: {
    //       root: {
    //         maxHeight: "85vh",
    //         minHeight: "85vh",
    //         marginTop: "6vh"
    //       },
    //     },
    //   },
    //   MuiPaper: {
    //     styleOverrides: {
    //       root: {
    //        height:"100%"
    //         // marginTop: "10vh"
    //       },
    //     },
    //   }
  },
});

const Modal = ({
  open,
  close,
  children,
  isFullWidth,
  minHeight,
  maxWidth,
  title,
  handleConfirmClick,
  buttonAffirmation = "",
  buttonNegation = "",
  isAppbar = false,
  isFullscreen = false,
  showCloseIcon = true,
  showButtons = false,
}) => {
  const handleClose = () => {
    close();
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Dialog
          id="dialog"
          fullScreen={isFullscreen}
          open={open}
          onClose={handleClose}
          fullWidth={isFullWidth}
          TransitionComponent={Transition}
          maxWidth={maxWidth}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {showCloseIcon && (
            <DialogTitle>
              <div className="text-base font-semibold">{title}</div>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
          )}
          {isAppbar && (
            <AppBar sx={{ position: "relative" }} elevation={0}>
              <Toolbar
                className="flex justify-between modal-header"
                style={{ minHeight: "40px" }}
              >
                <div>{title}</div>
                <div>
                  <CloseIcon
                    className="cursor-pointer"
                    edge="end"
                    style={{ color: "black" }}
                    onClick={handleClose}
                    aria-label="close"
                  />
                </div>
              </Toolbar>
            </AppBar>
          )}
          <div>
            {/* <div className="text-base">{!isAppbar && title}</div> */}
          </div>
          <DialogContent dividers style={{ height: minHeight }} className="">
            {children}
            {showButtons && (
              <div className="flex mt-4 space-x-2 justify-center">
                <div>
                  <Button
                    variant="outlined"
                    border="border-blue-light"
                    color="text-blue-light"
                    onClick={handleClose}
                  >
                    {buttonNegation == "" ? "Cancel" : buttonNegation}
                  </Button>
                </div>
                <div>
                  <Button onClick={() => handleConfirmClick()}>
                    {buttonAffirmation == "" ? "Submit" : buttonAffirmation}
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </div>
  );
};

export default Modal;
