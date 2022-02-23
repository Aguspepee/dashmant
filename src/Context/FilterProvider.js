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
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("2022");
  const [dataBaseEstaciones, setDataBaseEstaciones] = useState(data);
  const [dataProgMonth, setDataProgMonth] = useState([]);
  const [dataProgYear, setDataProgYear] = useState([]);
  const [dataRealMonth, setDataRealMonth] = useState([]);
  const [dataRealYear, setDataRealYear] = useState([]);

  //const normalizeData = () => {};
  const filterDataProgByDate = () => {
    setDataProgYear(
      dataBaseEstaciones.filter((dataBaseEstaciones) => {
        return year === dataBaseEstaciones["Inicio program."].slice(6, 10);
      })
    );
    setDataProgMonth(
      dataBaseEstaciones.filter((dataBaseEstaciones) => {
        return (
          month + "/" + year ===
          dataBaseEstaciones["Inicio program."].slice(3, 10)
        );
      })
    );
  };
  const filterDataRealByDate = () => {
    setDataRealYear(
      dataBaseEstaciones.filter((dataBaseEstaciones) => {
        return year === dataBaseEstaciones["Fecha ref."].slice(6, 10);
      })
    );
    setDataRealMonth(
      dataBaseEstaciones.filter((dataBaseEstaciones) => {
        return (
          month + "/" + year ===
          dataBaseEstaciones["Fecha ref."].slice(3, 10)
        );
      })
    );
  };

  const handleMonthChange = (monthValue) => {
    setMonth(monthValue);
    filterDataProgByDate();
  };

  const handleYearChange = (yearValue) => {
    setYear(yearValue);
    filterDataProgByDate();
  };

  return (
    <FilterContext.Provider
      value={[
        filterDataProgByDate,
        filterDataRealByDate,
        year,
        setYear,
        handleYearChange,
        month,
        setMonth,
        handleMonthChange,
        dataBaseEstaciones,
        setDataBaseEstaciones,
        dataProgMonth,
        setDataProgMonth,
        dataProgYear,
        setDataProgYear,
        dataRealMonth,
        setDataRealMonth,
        dataRealYear,
        setDataRealYear,
      ]}
    >
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
