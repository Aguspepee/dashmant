import React from "react";
import { Card } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import MultiBarChartCard from "../Cards/MultiBarChartCard";
import MiniLinePieCard from "../Cards/MiniLinePieCard";
import "./gridstyle.css";

function SectionBigBarContainer(props) {

  //Cálculo de día del año
  const Titulo = props.Titulo;
  const Descripcion = props.Descripcion;
  const Tipo = props.Tipo;
  const Mostrar_Anual = props.Mostrar_Anual;
  const Mes = props.Mes;
  const Año = props.Año;
  const Zona = props.Zona;

  //console.log("Lineas", lineas);
  let actividad = props.activity;

  return (
    <>
      <div style={{ padding: "1em 1em 1em 1em" }}>
        <Card
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            //padding: "20px 20px 20px 20px ",
          }}
        >
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
            <div style={{ padding: "0em 0em 1em 0em" }}>
                  <div className="grid-column" >
                    <MiniLinePieCard
                       Zona={Zona.slice(0,2)}
                       Tipo={Tipo}
                       Mostrar_Anual={Mostrar_Anual}
                       Mes={Mes}
                       Año={Año}
                    ></MiniLinePieCard>
                  </div>
            </div>
              <CardContent>
                <div className="grid5f">
        
                    <MultiBarChartCard
                      Zona={Zona.slice(0,2)}
                      Tipo={Tipo}
                      Mostrar_Anual={Mostrar_Anual}
                      Mes={Mes}
                      Año={Año}
                    ></MultiBarChartCard>
          
                </div>
              </CardContent>
           
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SectionBigBarContainer;
