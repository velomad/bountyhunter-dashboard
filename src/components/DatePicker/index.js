import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { FormControl, InputAdornment } from "@mui/material";
import { Field } from "formik";
import DatePicker from "@mui/lab/DatePicker";

export default function MaterialUIPickers(props) {
  const { label, value, name, isSelect, disabled, options, type, ...rest } =
    props;

  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleChange = (newValue) => {
    setSelectedDate(newValue);
  };

  return (
    <Field name={name}>
      {({
        field, // { name, value, onChange, onBlur }
        form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
        meta,
      }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disabled={disabled}
              {...field}
              InputProps={{
                style: {
                  height: 30,
                  borderRadius: 4,
                  backgroundColor: "#fff",
                  borderColor: "#145DA1",
                },
              }}
              inputProps={{
                style: {
                  fontSize: 12,
                  padding: "16px 14px 12px 14px",
                },
              }}
              label={label}
              name={name}
              value={selectedDate}
              onChange={(value) => {
                form.setFieldValue(name, value);
                handleChange(value);
              }}
              renderInput={(params) => (
                <TextField
                  inputProps={{
                    style: {
                      fontSize: 12,
                    },
                  }}
                  className="muiLabel"
                  fullWidth
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        );
      }}
    </Field>
  );
}
