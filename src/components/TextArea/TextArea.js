import * as React from "react";
import { makeStyles } from "@mui/styles";

import TextField from "@mui/material/TextField";
import { Field } from "formik";

const useStyles = makeStyles({});
export default function CustomTextArea(props) {
  const classes = useStyles();

  const {
    label,
    value,
    name,
    multiline,
    disabled,
    type,
    isMandatory,
    ...rest
  } = props;

  return (
    <React.Fragment>
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => {
          return (
            <div className="muiTextArea">
              <TextField
                {...field}
                disabled={disabled}
                multiline={true}
                id="outlined-basic"
                autoComplete="off"
                label={`${label}  ${isMandatory ? "*" : " "} `}
                rows={2}
                InputProps={{ style: { borderRadius: "4px" } }}
                inputProps={{ style: { fontSize: 12 } }}
                error={meta.touched && meta.error}
                className="w-full "
                margin="none"
                name={name}
                size="small"
                helperText={meta.touched && meta.error}
                variant="outlined"
                type={type}
              />
            </div>
          );
        }}
      </Field>
    </React.Fragment>
  );
}
