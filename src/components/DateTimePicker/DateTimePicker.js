import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { FormControl, InputAdornment } from "@mui/material";
import { Field } from "formik";

export default function MaterialUIPickers(props) {
  const {
    label,
    value,
    name,
    isSelect,
    options,
    type,
    disabled,
    initialState,
    ...rest
  } = props;
  const [selectedDate, setSelectedDate] = React.useState(null);

  React.useEffect(() => {
    setSelectedDate(initialState);
  }, [initialState]);

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
            <DateTimePicker
              disabled={disabled}
              forma
              {...field}
              InputProps={{
                style: {
                  height: 30,
                  borderRadius: 4,
                  borderColor: "#145DA1",
                  fontSize:12
                },
              }}
              inputFormat="dd/MM/yyyy hh:mm a"
              
              inputProps={{
                style: {
                  fontSize: 12,
                  padding: "16px 14px 12px 14px",
                },
              }}
             // emptyLabel="dd-mm-yyyy"
              label={label}
              name={name}
              value={selectedDate}
              onChange={(value) => {
                form.setFieldValue(name, value);
                handleChange(value);
              }}
              renderInput={(params) => (
                <TextField className="muiLabel" fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
        );
      }}
    </Field>
  );
}
