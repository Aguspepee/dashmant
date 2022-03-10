import React from "react";
import MiniNumberCard from "../Cards/MiniNumberCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import filterData from "../../Services/estaciones";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import { useEffect } from "react";
import axios from 'axios';

function SectionMultiNumContainer(props) {

  //Titulo y subtitulo del bloque
  const Titulo = props.Titulo;
  const Descripcion = props.Descripcion;

  //Configuración y filtros
  const config = {
    "Mostrar_Anual": props.Mostrar_Anual,
    "Descripcion": props.Descripcion,
    "Mes": props.Mes,
    "Año": props.Año,
    "Cl_actividad_PM": props.Cl_actividad_PM,
    "Clase_de_orden": props.Clase_de_orden,
    "Pto_tbjo_resp": props.Pto_tbjo_resp,
    "Texto_breve": props.Texto_breve,
    "BorrarDuplicados": props.BorrarDuplicados,
    "Operacion": props.Operacion
  }

  const zonas = [
    {
      Zona: "ZN1",
      Nombre: "ZONA NORTE",
    },
    {
      Zona: "ZS1",
      Nombre: "ZONA SUR",
    },
    {
      Zona: "ZO1",
      Nombre: "ZONA OESTE",
    },
    {
      Zona: "ZA1",
      Nombre: "ZONA AUSTRAL",
    },
  ];


  console.log("cargó Numero");

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
              title={Titulo}
              subheader={Descripcion}
            />
            <div className="gridnumber">
              {zonas.map((zonas, index) => (
                <div className="grid-column" key={zonas.Zona}>
                  <MiniNumberCard
                    key={zonas.Zona}
                    zona={zonas.Zona}
                    nombre={zonas.Nombre}
                    config={config}
                  ></MiniNumberCard>
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
