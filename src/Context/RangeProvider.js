import React, { useState } from "react";
import RangeContext from "./RangeContext";

function RangeProvider(props) {
const [range, setRange] = useState([2022, 2024])

//Change Range
const handleRangeChange =  (newValue) =>{
    setRange([newValue])
    console.log(newValue)
}

  return (
    <RangeContext.Provider value={[range, setRange, handleRangeChange]}>
      {props.children}
    </RangeContext.Provider>
  );
}
export default RangeProvider