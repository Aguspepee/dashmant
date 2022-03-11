import React from "react";
import { useEffect, useContext } from "react";
import BigPieChartCart from "../Cards/BigPieChartCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListTableCard from "../Cards/ListTableCard";
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

function SectionMultiPieContainer(props) {
  const [expanded, setExpanded] = React.useState(false);
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

  const TotalAnual = (zonas.filter((zonas)=>zonas.Zona === Zona ))[0].TotalAnual
  console.log("cargó componente");
  return (
    <>
      <div style={{ padding: "1em 1em 1em 1em" }}>
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
            <div className="singlepie">
              <div className="grid-column">
                <BigPieChartCart
                  zona={Zona}
                  config={config}
                  TotalAnual={TotalAnual}
                ></BigPieChartCart>
              </div>
            </div>
          </CardContent>
          {/*  <CardActions disableSpacing style={{ padding: "0px 0px 0px 0px" }}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div className="singlepie">
                {dataPie.map((dataPie, index) => (
                  <div className="grid-column" key={dataPie.Zona}>
                    <ListTableCard
                      data={dataPie}
                      dataBar={dataBar[index]}
                    ></ListTableCard>
                  </div>
                ))}
              </div>
            </CardContent>
          </Collapse> */}
        </Card>
      </div>
    </>
  );
}
export default SectionMultiPieContainer;
