import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  value,
  handleChange,
  label,
  data,
  width,
}) {
  return (
    <div style={{ marginRight: 2 }}>
      <FormControl variant="standard" sx={{ m: 1, width: { width } }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={(value) => handleChange(value.target.value)}
          label={label}
        >
          {data.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value} name={item.name}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
