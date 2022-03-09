import React from "react";
import MiniNumberCard from "../Cards/MiniNumberCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import filterData from "../../Services/estaciones";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import { useEffect, useContext } from "react";
import FilterContext from "../../Context/FilterContext";
import axios from 'axios';

function SectionMultiNumContainer(props) {
  const [
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
  ] = useContext(FilterContext);

  const [expanded, setExpanded] = React.useState(false);
  const activity = props.activity;
  const title = props.title;
  const bar = props.bar;
  const filters = props.filters;
  const description = props.description;
  const Month = props.Month;
  const Year = props.Year;
  const Cl_actividad_PM = props.Cl_actividad_PM;
  const Clase_de_orden = props.Clase_de_orden;
  const Pto_tbjo_resp = props.Pto_tbjo_resp;
  const Texto_breve = props.Texto_breve;
  const BorrarDuplicados= props.BorrarDuplicados;
  const Operacion = props.Operacion

  useEffect(() => {
    filterDataRealByDate();
  }, [dataBaseEstaciones, month, year]);

  function uploadFiles(Zona) {
    axios.get(`http://localhost:9000/saps/filterGeneral/${Month}-${Year}-${Cl_actividad_PM}-${Clase_de_orden}-${Zona}-${Texto_breve}-${Pto_tbjo_resp}-${Operacion}-${BorrarDuplicados}`)
      .then(res => {
        const results = res.data;
        console.log("Results", results)
      })
  }
  let zonas = [{ "Zona": "ZN1" },
  { "Zona": "ZS1" },
  { "Zona": "ZO1" },
  { "Zona": "ZA1" }]

  zonas.map((zonas, index) => { uploadFiles(zonas.Zona) })


  //Hacer que sea un estado
  let calcularAcumulado = true;
  const data = filterData(activity, dataRealMonth, dataProgMonth, filters, calcularAcumulado);
  
  //console.log("correctivas",data)

  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <CardContent>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={title}
              subheader={description}
            />
            <div className="gridnumber">
              {data.map((data) => (
                <div className="grid-column" key={data.Zona}>
                  <MiniNumberCard data={data}></MiniNumberCard>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default SectionMultiNumContainer;
