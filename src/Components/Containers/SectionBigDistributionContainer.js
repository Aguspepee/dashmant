import React from "react";
import BigDistributionCard from "../Cards/BigDistributionCard";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import CardHeader from "@mui/material/CardHeader";
import AlertDialog from "../User/AlertDialog"

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function SectionDistributionContainer(props) {
  //Titulo y subtitulo del bloque
  const Titulo = props.Titulo;
  const Descripcion = props.Descripcion;
  const Zona = props.Zona;
  const Help = props.Help;

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

  return (
    <>
      <div style={{ padding: "1em 1em 1em 1em" }}>
        <Card
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}>
            <CardHeader
              action={
                <AlertDialog Titulo={Titulo} Help={props.Help}></AlertDialog>
              }
              title={Titulo}
              subheader={Descripcion}
            />
                <BigDistributionCard
                  zona={Zona}
                  config={config}
                ></BigDistributionCard>
        </Card>
      </div>
    </>
  );
}
export default SectionDistributionContainer;
