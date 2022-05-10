import React from "react";
import Select from "components/Select";
import DatePicker from "components/DatePicker";
import DateTimePicker from "components/DateTimePicker";
import TextField from "components/TextField";
import TextArea from "components/TextArea";
import CustomCheckBox from "components/CheckBox";
import RadioButtons from "components/CustomRadioButton";
import CustomFileUpload from "components/CustomFileUpload";

const FormikControl = (props) => {
  const { control, isSelect, options, designType, ...rest } = props;
  switch (control) {
    case "input":
      return <TextField {...rest} />;
    case "file":
      return <CustomFileUpload {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    case "select":
      return <Select isSelect={isSelect} options={options} {...rest} />;
    case "radio":
      return <RadioButtons options={options} {...rest} />;
    case "checkbox":
      return <CustomCheckBox {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "dateTime":
      return <DateTimePicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
