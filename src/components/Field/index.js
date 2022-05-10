import React from "react";
import TextField  from "../TextField";
import { Field, ErrorMessage } from "formik";

const FormikField = (props) => {
  const { label, name, placeholder, RenderComponent, mandatory, ...rest } =
    props;

  return (
    <div>
      <Field
        placeholder={placeholder}
        id={name}
        name={name}
        label={label}
        {...rest}
      />
    </div>
  );
};

export default FormikField;
