import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import VerticalBarCard from "./VerticalBarCard";
import { NovedadesDetalle } from "../../Services/lineasNovedadesService"

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
        const res = await NovedadesDetalle(Mes, Año, Zona, Tipo)
        setList(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    update();
  }, [setList, Año]);

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
        <VerticalBarCard list={list} factor={factor} max={max} />

      </div>
    </>
  );
}

export default MultiBarChartCard;
