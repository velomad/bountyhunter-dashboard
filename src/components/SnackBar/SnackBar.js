import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar({ open, closeSnackBar, message }) {
  const handleClose = () => {
    closeSnackBar();
  };

  return (
    <div>
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
