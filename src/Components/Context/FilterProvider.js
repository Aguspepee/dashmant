import React, { useState } from "react";
import FilterContext from "./FilterContext";
var data = require("../../Data/dataJan.json");

//const data=[ "hola", "hola","hola"]

const filterRPM = [
  {
    "Status denominacion": "En Ejecución",
    "Status usuario": "EJEC",
  },
  {
    "Status denominacion": "Cerrada Técnicamente",
    "Status usuario": "CTEC",
  },
  {
    "Status denominacion": "Cerrada Técnicamente No Ejecutado",
    "Status usuario": "CTEC CENE",
  },
];

const zones = [
  {
    "Grupo planif.": "ZN1",
    Zona: "Zona Norte",
    "Unidades de Mantenimiento": 249,
  },
  {
    "Grupo planif.": "ZS1",
    Zona: "Zona Sur",
    "Unidades de Mantenimiento": 368,
  },
  {
    "Grupo planif.": "ZO1",
    Zona: "Zona Oeste",
    "Unidades de Mantenimiento": 41,
  },
  {
    "Grupo planif.": "ZA1",
    Zona: "Zona Austral",
    "Unidades de Mantenimiento": 53,
  },
];

function FilterProvider(props) {
  const [pieChartData, setPieChartData] = useState([]);
  const [month, setMonth] = useState("Enero");
  const [year, setYear] = useState("2022");
  let pieChartData1 = [];
  const filterData = (actividad) => {
    let listValues = [];

    for (let j = 0; j < zones.length; j++) {
      listValues = [];
      for (let i = 0; i < 3; i++) {
        let data_filter = data.filter(
          (data) =>
            data["Cl.actividad PM"] === actividad &&
            data["Status usuario"] === filterRPM[i]["Status usuario"] &&
            data["Grupo planif."] === zones[j]["Grupo planif."]
        );
        listValues[i] = {
          Tipo: filterRPM[i]["Status denominacion"],
          Cantidad: data_filter.length,
        };
      }
      //console.log( {Zona: zones[j]["Grupo planif."],ZonaNombre:zones[j]["Zona"], UnidadadesMantenimientoCant:zones[j]["Unidades de Mantenimiento"], Lista: listValues })
      pieChartData1[j] = {
        Zona: zones[j]["Grupo planif."],
        ZonaNombre: zones[j]["Zona"],
        UnidadadesMantenimientoCant: zones[j]["Unidades de Mantenimiento"],
        Lista: listValues,
      };
      //setPieChartData([{ Zona: zones[j]["Grupo planif."],ZonaNombre:zones[j]["Zona"], UnidadadesMantenimientoCant:zones[j]["Unidades de Mantenimiento"], Lista: listValues }])
    }

    return pieChartData1;
  };

  return (
    <FilterContext.Provider value={[year,setYear, month,setMonth, pieChartData,setPieChartData, filterData]}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
