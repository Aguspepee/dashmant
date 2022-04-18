import React, { useEffect, useState } from "react";
import DateContext from "./DateContext";



let months = [
  { Month: "Enero", Num: "1" },
  { Month: "Febrero", Num: "2" },
  { Month: "Marzo", Num: "3" },
  { Month: "Abril", Num: "4" },
  { Month: "Abril", Num: "5" },
  { Month: "Junio", Num: "6" },
  { Month: "Julio", Num: "7" },
  { Month: "Agosto", Num: "8" },
  { Month: "Septiembre", Num: "9" },
  { Month: "Octubre", Num: "10" },
  { Month: "Noviembre", Num: "11" },
  { Month: "Diciembre", Num: "12" },
];

function DateProvider(props) {
  let mes = new Date().getMonth()+1
  //if (mes < 10) {mes = '0' + mes};

  const [month, setMonth] = useState(mes);
  const [year, setYear] = useState(2022);

 
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
