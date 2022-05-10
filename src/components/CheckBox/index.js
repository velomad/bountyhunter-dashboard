import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function CustomCheckBox(props) {
  const { label, value, name, labelPlacement, ...rest } = props;

  return (
    <React.Fragment>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          name={name}
          value={value}
          control={<Checkbox inputProps={{
           
          }} sx={{ "& .MuiSvgIcon-root": {  fontFamily:"Source Sans Pro !important" } }} />}
          label={<div className="
          text-sm">{label}</div>}
          {...rest}
          labelPlacement={labelPlacement}
        />
      </FormGroup>
    </React.Fragment>
  );
}
