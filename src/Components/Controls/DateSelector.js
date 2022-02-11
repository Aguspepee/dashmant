import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



export default function DateSelector(props) {
  const [value, setValue] = useState("");
  const data = props.data;
  const type = props.type;
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value)
  };
  
  return (
    <Box sx={{ width: "100%", minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={type}
          onChange={handleChange}
        >
         {data.map(data=>{return(<MenuItem key={data} value={data}>{data}</MenuItem>)})}
        </Select>
      </FormControl>
    </Box>
  );
}
