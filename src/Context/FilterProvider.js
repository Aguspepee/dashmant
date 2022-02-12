import React, { useState } from "react";
import FilterContext from "./FilterContext";
var data = require("../Data/dataJan.json");

let months = [
  { "Month": "Enero", "Num": 1 },
  { "Month": "Febrero", "Num": 2 },
  { "Month": "Marzo", "Num": 3 },
  { "Month": "Abril", "Num": 4 },
  { "Month": "Junio", "Num": 6 },
  { "Month": "Julio", "Num": 7 },
  { "Month": "Agosto", "Num": 8 },
  { "Month": "Septiembre", "Num": 9 },
  { "Month": "Octubre", "Num": 10 },
  { "Month": "Noviembre", "Num": 11 },
  { "Month": "Diciembre", "Num": 2 },
];

function FilterProvider(props) {
  const [pieChartData, setPieChartData] = useState([]);
  const [month, setMonth] = useState("Enero");
  const [monthNum, setMonthNum] = useState(1)
  const [year, setYear] = useState("2022");
  const [dataBruta, setDataBruta] = useState(data);


  const normalizeData = () => {

  }


  const filterDataByVarious = () => {
    console.log("varios")
  }


  const filterDataByDate = () => {
    let dataNormalizada = data
    setDataBruta(dataNormalizada.filter((dataNormalizada) => {
      return (month === parseInt(dataNormalizada["Inicio program."].slice(3, 5), 10))
    }))
    //setDataBruta( )
    console.log(dataBruta)
  }

  const handleMonthChange = (monthValue) => {
    setMonth(monthValue)
    //setMonthNum(months.filter((months) => { return (months.Month === monthValue) })[0].Num)
    filterDataByDate()
  }

  const handleYearChange = (yearValue) => {
    setYear(yearValue)
    filterDataByDate()
  }

  return (
    <FilterContext.Provider value={[year, handleYearChange, month, handleMonthChange, pieChartData, setPieChartData, filterDataByDate, filterDataByVarious, dataBruta]}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
