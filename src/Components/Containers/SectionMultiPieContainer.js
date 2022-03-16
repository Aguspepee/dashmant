import React from "react";
import MiniPieChartCart from "../Cards/MiniPieChartCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import "./gridstyle.css";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { MonthToWord } from "../../Utils/Functions";

const SectionMultiPieContainer = React.memo(function SectionMultiPieContainer(
  props
) {
  //Titulo y subtitulo del bloque
  const Titulo = props.Titulo;
  const Descripcion = props.Descripcion;
  const Help = props.Help;

  //Configuración y filtros
  const config = {
    Mostrar_Anual: props.Mostrar_Anual,
    Descripcion: props.Descripcion,
    Mes: props.Mes,
    Año: props.Año,
    Cl_actividad_PM: props.Cl_actividad_PM,
    Clase_de_orden: props.Clase_de_orden,
    Pto_tbjo_resp: props.Pto_tbjo_resp,
    Texto_breve: props.Texto_breve,
    BorrarDuplicados: props.BorrarDuplicados,
    Operacion: props.Operacion,
  };
    const Mes_Nombre = MonthToWord(config.Mes)

  const zonas = [
    {
      Zona: "ZN1",
      Nombre: "ZONA NORTE",
      TotalAnual: [{ RPM: 249, RSP: 76, MUA: 87 }],
    },
    {
      Zona: "ZS1",
      Nombre: "ZONA SUR",
      TotalAnual: [{ RPM: 368, RSP: 174, MUA: 135 }],
    },
    {
      Zona: "ZO1",
      Nombre: "ZONA OESTE",
      TotalAnual: [{ RPM: 41, RSP: 24, MUA: 60 }],
    },
    {
      Zona: "ZA1",
      Nombre: "ZONA AUSTRAL",
      TotalAnual: [{ RPM: 53, RSP: 20, MUA: 14 }],
    },
  ];

  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <CardContent>
            <Stack direction="row" spacing={1}>
              <Typography variant="h5" component="div">
                {Titulo}<Chip label={`${Mes_Nombre} ${config.Año}`}  size="small" style={{ marginBottom: "4px",marginLeft:"15px" }} />
              </Typography>
            </Stack>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {Descripcion}
            </Typography>
            <div className="gridpie">
              {zonas.map((zonas, index) => (
                <div className="grid-column" key={zonas.Zona}>
                  <MiniPieChartCart
                    key={zonas.Zona}
                    zona={zonas.Zona}
                    nombre={zonas.Nombre}
                    config={config}
                    TotalAnual={zonas.TotalAnual}
                  ></MiniPieChartCart>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
});
export default SectionMultiPieContainer;
