import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import MultiBarChartCard from "../Cards/MultiBarChartCard";
import MiniLinePieCard from "../Cards/MiniLinePieCard";
import "./gridstyle.css";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { MonthToWord } from "../../Utils/Functions";

function SectionBigBarContainer(props) {
  //Cálculo de día del año
  const Titulo = props.Titulo;
  const Descripcion = props.Descripcion;
  const Tipo = props.Tipo;
  const Mostrar_Anual = props.Mostrar_Anual;
  const Mes = props.Mes;
  const Año = props.Año;
  const Zona = props.Zona;
  const Mes_Nombre = MonthToWord(Mes);
  const Descripcion_Barras = props.Descripcion_Barras;

  //console.log("Lineas", lineas);
  let actividad = props.activity;

  return (
    <>
      <div style={{ padding: "0.5em 0.5em 0.5em 0.5em" }}>
        <Card
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            //padding: "20px 20px 20px 20px ",
          }}
        >
          <CardContent>
            <Stack direction="row" spacing={1}>
              <Typography variant="h5" component="div">
                {Titulo}
                <Chip
                  label={`${Mes_Nombre} ${Año}`}
                  size="small"
                  style={{ marginBottom: "4px", marginLeft: "15px" }}
                />
              </Typography>
            </Stack>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {Descripcion}
            </Typography>
            <div style={{ padding: "0em 0em 1em 0em" }}>
              <div className="grid-column">
                <MiniLinePieCard
                  Zona={Zona.slice(0, 2)}
                  Tipo={Tipo}
                  Mostrar_Anual={Mostrar_Anual}
                  Mes={Mes}
                  Año={Año}
                  Mes_Nombre={Mes_Nombre}
                ></MiniLinePieCard>
              </div>
            </div>
            <CardContent>
              <div className="grid5f">
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {Descripcion_Barras}
                </Typography>
                <MultiBarChartCard
                  Zona={Zona.slice(0, 2)}
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
