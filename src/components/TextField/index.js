import * as React from "react";
import TextField from "@mui/material/TextField";
import { ErrorMessage, Field } from "formik";
import { fontSize } from "@mui/system";
import { FormControl, InputAdornment } from "@mui/material";
import { logValidationErrors } from "../../utils/logValidationError";
import Tooltip from "../ToolTip";
export default function CustomTextField(props) {
  const {
    label,
    value,
    name,
    isSelect,
    onChange,
    options,
    multiline,
    type,
    tooltipData,
    isSearchBtn,
    isMandatory,
    isPhoneNumber = false,
    isDisplayTooltip = false,
    disabled,
    onClick,
    startAdornmentValue,
    showErrorMessage,
    variant = "standard",
    ...rest
  } = props;

  return (
    <React.Fragment>
      <div className="relative">
        <Field name={name}>
          {({
            field, // { name, value, onChange, onBlur }
            form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
            meta,
          }) => {
            if (process.env.ISREQUIREDLOGS === "true") {
              if (meta.touched && meta.error) {
                logValidationErrors(meta.error);
              }
            }

            return (
              <div className="muiLabel ">
                <div>
                  <TextField
                    disabled={disabled}
                    className="muiLabel w-full bg-white"
                    FormHelperTextProps={{
                      style: {
                        marginLeft: 2,
                        textTransform: "capitalize",
                      },
                    }}
                    fullWidth
                    {...field}
                    multiline={multiline}
                    id="outlined-basic"
                    InputLabelProps={{ style: { textTransform: "capitalize" } }}
                    autoComplete="off"
                    label={`${label}  ${isMandatory ? "*" : " "} `}
                    rows={4}
                    InputProps={{
                      style: {
                        height: 30,
                        borderRadius: 4,
                        borderColor: "#145DA1",
                        paddingRight: 0,
                      },
                      startAdornment: startAdornmentValue && (
                        <InputAdornment position="start">
                          <div className="text-sm mt-0.5">
                            {startAdornmentValue}
                          </div>
                        </InputAdornment>
                      ),
                      endAdornment: isSearchBtn ? (
                        <button
                          type="button"
                          onClick={onClick}
                          className="px-4 bg-gray-light flex items-center text-regular focus:outline-none"
                          style={{ height: 30 }}
                        >
                          <div>
                            <img
                              src={require("assets/icons/search.svg").default}
                            />
                          </div>
                        </button>
                      ) : meta.touched && meta.error ? (
                        <div>
                          <svg
                            className="h-6 w-6 text-red-dark pr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      ) : null,
                    }}
                    inputProps={{
                      style: {
                        fontSize: "12px",
                        padding: startAdornmentValue
                          ? "16px 14px 12px 0px"
                          : "16px 14px 12px 14px",
                      },
                    }}
                    onInput={(e) => {
                      isPhoneNumber &&
                        (e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 10));
                      onChange(e.target.value);
                    }}
                    error={meta.touched && meta.error}
                    name={name}
                    // helperText={
                    //   typeof showErrorMessage !== "undefined"
                    //     ? null
                    //     : meta.touched && meta.error
                    // }
                    variant={variant}
                    type={type}
                  />
                  {isDisplayTooltip && (
                    <Tooltip label={tooltipData} placement="right">
                      <div className="absolute top-1.5 cursor-pointer -right-1 text-gray-dark  ">
                        <span className="absolute -top-1 text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </span>
                      </div>
                    </Tooltip>
                  )}
                </div>
                <div></div>
              </div>
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
    </React.Fragment>
  );
}
