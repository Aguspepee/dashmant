import React from "react";
import { useEffect, useContext } from "react";
import MiniDistributionCard from "../Cards/MiniDistributionCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./gridstyle.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";

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
      TotalAnual: [{ "RPM": 249, "RSP": 76, "MUA": 87 }]
    },
    {
      Zona: "ZS1",
      Nombre: "ZONA SUR",
      TotalAnual: [{ "RPM": 368, "RSP": 174, "MUA": 135 }]
    },
    {
      Zona: "ZO1",
      Nombre: "ZONA OESTE",
      TotalAnual: [{ "RPM": 41, "RSP": 24, "MUA": 60 }]
    },
    {
      Zona: "ZA1",
      Nombre: "ZONA AUSTRAL",
      TotalAnual: [{ "RPM": 53, "RSP": 20, "MUA": 14 }]
    },
  ];
  console.log("cargó Distribucion");

  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        <Card
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <CardContent>
            <CardHeader
              action={
                <IconButton aria-label="settings" >
                  <MoreVertIcon />
                </IconButton>
              }
              title={Titulo}
              subheader={Descripcion}
            />
            <div className="gridpie">
              {zonas.map((zonas, index) => (
                <div className="grid-column" key={zonas.Zona}>
                  <MiniDistributionCard
                    key={zonas.Zona}
                    zona={zonas.Zona}
                    nombre={zonas.Nombre}
                    config={config}
                  ></MiniDistributionCard>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default SectionDistributionContainer;
