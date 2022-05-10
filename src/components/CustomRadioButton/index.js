import * as React from "react";

import { ErrorMessage, Field } from "formik";
import TextError from "../TextError";

export default function RadioButtons(props) {
  const { label, name, options, onChange, selectedValue, classes, ...rest } =
    props;
  return (
    <React.Fragment>
      <div className={classes}>
        <Field name={name} {...rest}>
          {({
            field, // { name, value, onChange, onBlur }
          }) => {
            return (
              <div className="flex space-x-4">
                {options.map((option) => (
                  <div className="flex space-x-1 items-center" key={option.key}>
                    <div className="mt-1">
                      <input
                        type="radio"
                        id={option.value}
                        {...field}
                        value={option.value}
                        onChange={onChange}
                        checked={selectedValue == option.value}
                      />
                    </div>
                    <div>
                      <label className="" htmlFor={option.value}>
                        {option.key}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            );
          }}
        </Field>
        <ErrorMessage name={name} component={TextError} />
      </div>
    </React.Fragment>
  );
}
