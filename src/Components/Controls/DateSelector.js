import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



export default function DateSelector(props) {
  const [value, setValue] =useState(props.value)
  //const value = props.value
  const data = props.data;
  const type = props.type;
  const changeValue = props.change1
  const changeValue2 = props.change2
//  const setValue = setValue.props
  const handleChange = (event) => {
    changeValue(event.target.value)
    console.log("target",event.target.value)
    setValue(event.target.value);
    changeValue2(event.target.value)
    
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
