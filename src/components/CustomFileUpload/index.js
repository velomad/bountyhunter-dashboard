import * as React from "react";

export default function CustomTextField(props) {
  const { onChange, label, id } = props;


  return (
    <React.Fragment>
      <label htmlFor={id}>
        <input
          id={id}
          className="hidden"
          accept="image/*"
          type="file"
          onChange={onChange}
        />
        <div className="bg-blue px-2 py-1 text-white text-regular text-center capitalize w-20">
          {label}
        </div>
      </label>
    </React.Fragment>
  );
}
