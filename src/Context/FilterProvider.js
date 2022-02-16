import React, { useEffect, useState } from "react";
import FilterContext from "./FilterContext";
var data = require("../Data/dataJan.json");

let months = [
  { Month: "Enero", Num: "01" },
  { Month: "Febrero", Num: "02" },
  { Month: "Marzo", Num: "03" },
  { Month: "Abril", Num: "04" },
  { Month: "Abril", Num: "05" },
  { Month: "Junio", Num: "06" },
  { Month: "Julio", Num: "07" },
  { Month: "Agosto", Num: "08" },
  { Month: "Septiembre", Num: "09" },
  { Month: "Octubre", Num: "10" },
  { Month: "Noviembre", Num: "11" },
  { Month: "Diciembre", Num: "12" },
];

function FilterProvider(props) {
  const [pieChartData, setPieChartData] = useState([]);
  const [month, setMonth] = useState("01");
  const [monthNum, setMonthNum] = useState(1);
  const [year, setYear] = useState("2022");
  const [dataBruta, setDataBruta] = useState(data);
  const [dataNormalizada, setDataNormalizada] = useState(data); //por ahora es data
  const [dataFiltrada, setDataFiltada] = useState([]);

  const normalizeData = () => {};

  const filterDataByVarious = () => {
    console.log("varios");
  };

  const filterDataByDate = () => {
    setDataFiltada(
      dataNormalizada.filter((dataNormalizada) => {
        return (
          (year === dataNormalizada["Inicio program."].slice(6, 10))
        );
      })
    );
    setPieChartData(
      dataNormalizada.filter((dataNormalizada) => {
        return (
          (month + "/" + year === dataNormalizada["Inicio program."].slice(3, 10))
        );
      })
    );
  };

  const handleMonthChange = (monthValue) => {
    setMonth(monthValue);
    normalizeData(); //se normaliza la base de datos
    filterDataByDate();
  };

  const handleYearChange = (yearValue) => {
    setYear(yearValue);
    normalizeData(); //se normaliza la base de datos
    filterDataByDate();
  };

  return (
    <FilterContext.Provider
      value={[
        pieChartData,
        setPieChartData,
        year,
        setYear,
        handleYearChange,
        month,
        setMonth,
        handleMonthChange,
        dataBruta,
        setDataBruta,
        dataNormalizada,
        setDataNormalizada,
        dataFiltrada,
        setDataFiltada,
        normalizeData,
        filterDataByVarious,
        filterDataByDate,
      ]}
    >
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
