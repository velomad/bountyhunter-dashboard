import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { makeStyles } from "@mui/styles";
import {
  MenuItem,
  TextField,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Checkbox,
  Autocomplete,
} from "@mui/material";
import { Field, ErrorMessage } from "formik";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  root: {
    height: 30,
    borderRadius: 4,
    backgroundColor: "#fff",
    borderColor: "#145DA1",
  },
  select: {
    "& li": {
      fontSize: 12,
    },
  },
  size: {
    height: 30,
  },
}));

const CustomSelect = (props) => {
  const classes = useStyles();

  const {
    label,
    value,
    name,
    options,
    type,
    handleChange,
    isSearchable,
    isMandatory,
    disabled,
    showErrorMessage,
    ...rest
  } = props;
  return (
    <div className="relative">
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => {
          handleChange && handleChange(values.status);
          return (
            <React.Fragment>
              {!isSearchable ? (
                <div className="muiSelect">
                  <FormControl fullWidth size="small">
                    <InputLabel size="small" error={meta.touched && meta.error}>
                      {`${label} ${isMandatory ? "*" : " "} `}
                    </InputLabel>

                    <Select
                      inputProps={{
                        style: {
                          fontSize: 12,
                          textTransform: "capitalize",
                        },
                      }}
                      className={classes.root}
                      MenuProps={{
                        classes: { paper: classes.select },
                      }}
                      // labelId="demo-simple-select-label"
                      // id="demo-simple-select"
                      fullWidth
                      {...field}
                      // MenuProps={{ classes: { paper: classes.menuPaper } }}
                      autoComplete="off"
                      error={meta.touched && meta.error}
                      name={name}
                      size="small"
                      label={label}
                      variant="outlined"
                      type={type}
                      value={values[name]}
                      handleChange={value}
                      disabled={disabled}
                    >
                      {options?.map((name) => (
                        <MenuItem key={name} value={name}>
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                    {/* {meta.touched && (
                      <FormHelperText
                        style={{
                          color: "#D84949",
                          marginLeft: 2,
                          textTransform: "capitalize",
                        }}
                        className="text-red"
                      >
                        {typeof showErrorMessage !== "undefined"
                          ? null
                          : meta.error}
                      </FormHelperText>
                    )} */}
                  </FormControl>
                </div>
              ) : (
                <div className="autocomplete">
                  <Autocomplete
                    disabled={disabled}
                    multiple
                    limitTags={4}
                    ChipProps={{
                      style: {
                        height: 18,
                        fontSize: 10,
                        margin: 4,
                      },
                    }}
                    classes={{ input: classes.size }}
                    options={options}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option}
                    renderOption={(props, option, { selected }) => (
                      <li style={{ fontSize: 12 }} {...props}>
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 4, padding: 0 }}
                          checked={selected}
                        />
                        {option}
                      </li>
                    )}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
              )}
            </React.Fragment>
          );
        }}
      </Field>

      <div className="absolute">
        <ErrorMessage name={name}>
          {(msg) => (
            <div className="text-red-dark font-semibold text-xs">{msg}</div>
          )}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default CustomSelect;
