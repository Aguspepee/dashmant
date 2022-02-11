import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import FilterContext from "../Context/FilterContext";

function PruebaComponent(props) {
  const [
    year,
    setYear,
    month,
    setMonth,
    pieChartData,
    setPieChartData,
    filterData,
  ] = useContext(FilterContext);


  //setMonth("hola")
  return <>HOLAasdafasdgasgasfhadhha</>;
}

export default PruebaComponent;
