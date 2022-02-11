import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const months = [
  { Month: "Enero", FistDate: "01/01", LastDate: "01/01" },
  { Month: "Febrero", FistDate: "01/02", LastDate: "01/02" },
  { Month: "Marzo", FistDate: "01/03", LastDate: "01/03" },
  { Month: "Abril", FistDate: "01/04", LastDate: "01/04" },
  { Month: "Mayo", FistDate: "01/05", LastDate: "01/05" },
  { Month: "Junio", FistDate: "01/06", LastDate: "01/06" },
  { Month: "Julio", FistDate: "01/07", LastDate: "01/07" },
  { Month: "Agosto", FistDate: "01/08", LastDate: "01/08" },
  { Month: "Septiembre", FistDate: "01/09", LastDate: "01/09" },
  { Month: "Octubre", FistDate: "01/10", LastDate: "01/10" },
  { Month: "Noviembre", FistDate: "01/11", LastDate: "01/11" },
  { Month: "Diciembre", FistDate: "01/12", LastDate: "01/12" }
];

export default function DateSelector(props) {
  const [age, setAge] = useState("");
  const data = props.data;
  const type = props.type;
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return (
    <Box sx={{ width: "100%", minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={type}
          onChange={handleChange}
        >
         {months.map(months=>{return(<MenuItem value={months.Month}>{months.Month}</MenuItem>)})}
        </Select>
      </FormControl>
    </Box>
  );
}
