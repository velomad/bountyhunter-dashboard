import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";

export default function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Appointment From Date"
        endText="Appointment To Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <div className="muiLabel">
              <TextField
                InputProps={{
                  style: {
                    height: 30,
                    borderRadius: 0,
                    borderColor: "#145DA1",
                  },
                }}
                inputProps={{
                  style: {
                    fontSize: 12,
                    padding: "16px 14px 12px 14px",
                  },
                }}
                {...startProps}
              />
            </div>
            <Box sx={{ mx: 2 }} className="text-regular">
              {" "}
              to{" "}
            </Box>
            <div className="muiLabel">
              <TextField
                InputProps={{
                  style: {
                    height: 28,
                    borderRadius: 0,
                    borderColor: "#145DA1",
                  },
                }}
                inputProps={{
                  style: {
                    fontSize: 12,
                    padding: "16px 14px 12px 14px",
                  },
                }}
                {...endProps}
              />
            </div>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
