import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";
import VerticalBarCard from "./VerticalBarCard";

function MultiBarChartCard(props) {
  const Zona = props.Zona;
  const Nombre = props.Nombre;
  const Mes = props.Mes;
  const Año = props.Año;
  const Tipo = props.Tipo;

  const [list, setList] = useState([]);
    //Previo a renderizar el componente se consulta la API
    useEffect(() => {
      const update = async () => {
        try {
          const res = await axios.get(
            //Para desarrollo
            `http://localhost:9000/lineasBase/novedadesDetalle/${Mes}-${Año}-${Zona}-${Tipo}`
  
            //Para producción
            //`http://localhost:9000/lineasBase/novedadesResumen/${Mes}-${Año}-${Zona}-${Tipo}`
          );
        //  console.log(res.data)
          setList(res.data);
        } catch (e) {
          console.log(e);
        }
      };
      update();
    }, [setList, Mes, Año]);

  let factor;
  let max;
  if (Tipo === "PINT") {
    factor = 2;
    max = 2000;
  } else if (Tipo === "PINM") {
    factor = 0.25;
    max = 250;
  }
  return (
    <>
      <div >
        <Typography
          variant="button"
          color="text.primary"
          component="div"
          style={{
            fontSize: "1.4em",
            paddingLeft: "0.3em",
            paddingBottom: "0px",
          }}
        >
          {Nombre}
        </Typography>
        <VerticalBarCard list={list} factor={factor} max={max}/>

      </div>
    </>
  );
}

export default MultiBarChartCard;
