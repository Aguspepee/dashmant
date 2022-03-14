import React from "react";
import BigPieChartCart from "../Cards/BigPieChartCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import LineAcumChartCard from "../Cards/LineAcumChartCard";
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";
import BarAcumChartCard from "../Cards/BarAcumChartCard"

function SectionMultiPieContainer(props) {
  //Titulo y subtitulo del bloque
  const Titulo = props.Titulo;
  const Descripcion = props.Descripcion;
  const Zona = props.Zona

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

  let zonas = [
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

  const TotalAnual = (zonas.filter((zonas) => zonas.Zona === Zona))[0].TotalAnual
  console.log("cargó componente");
  return (
    <>
      <div style={{ padding: "1em 1em 1em 1em" }}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={Titulo}
            subheader={Descripcion}
          />
          <CardContent style={{ padding: "0em 1em 0em 1em" }}>
            <Divider light style={{ width: "100%" }} />
          </CardContent>

          <div className="bigPieBar">
            <CardContent>
              <div style={{ padding: "1em 1em 1em 1em", width: "100%" }}>
                <Typography variant="h6" gutterBottom component="div">
                  Resumen
                </Typography>
                <BigPieChartCart
                  zona={Zona}
                  config={config}
                  TotalAnual={TotalAnual}
                ></BigPieChartCart>
              </div>
            </CardContent>
            <CardContent style={{ width: "100%" }}>
              <div style={{ padding: "1em 1em 1em 1em", width: "100%" }}>
                <Typography variant="h6" gutterBottom component="div">
                  Distribucion Anual
                </Typography>
                <Divider light style={{ width: "100%" }} />
                <BarAcumChartCard
                  zona={Zona}
                  config={config}
                  TotalAnual={TotalAnual}
                ></BarAcumChartCard>
                <Divider light style={{ width: "100%" }} />
                <LineAcumChartCard
                  zona={Zona}
                  config={config}
                  TotalAnual={TotalAnual}
                ></LineAcumChartCard>
              </div>
            </CardContent>
            <CardContent style={{ width: "100%" }}>
              <div style={{ padding: "1em 1em 1em 1em", width: "100%" }}>
                <Typography variant="h6" gutterBottom component="div">
                  Indicadores
                </Typography>
                <Divider light style={{ width: "100%" }} />
                <Typography
                  component="div"
                  variant="h4"
                  style={{ fontSize: "2.5em" }}
                >
                  44%
                </Typography>
                <Typography
                  variant="body2"
                  color="text.primary"
                  component="div"
                  style={{ fontSize: "0.9em" }}
                >
                  EJECUTADO
                </Typography>
              </div>
            </CardContent>

          </div>

        </Card>
      </div>
    </>
  );
}
export default SectionMultiPieContainer;
