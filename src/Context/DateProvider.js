import React, { useEffect, useState } from "react";
import DateContext from "./DateContext";



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

function DateProvider(props) {
  let mes = new Date().getMonth()+1
  if (mes < 10) {mes = '0' + mes};

  const [month, setMonth] = useState(mes);
  const [year, setYear] = useState("2022");

 
  const handleMonthChange = (monthValue) => {
    setMonth(monthValue);
  };

  const handleYearChange = (yearValue) => {
    setYear(yearValue);
  };

  return (
    <DateContext.Provider
      value={[
        year,
        setYear,
        month,
        setMonth,
      ]}
    >
      {props.children}
    </DateContext.Provider>
  );
}

export default DateProvider;
