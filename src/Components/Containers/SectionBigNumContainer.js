import React from "react";
import BigNumberCard from "../Cards/BigNumberCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import "./gridstyle.css";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { MonthToWord } from "../../Utils/Functions";

function SectionBigNumContainer(props) {
 
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

  const Mes_Nombre = MonthToWord(config.Mes)
   

  return (
    <>
      <div style={{ padding: "0.5em 0.5em 0.5em 0.5em"}}>
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
            <Divider light style={{ width: "100%" }} />
            </CardContent>
            
            <CardContent>
            <div className="gridnumber" style={{alignItems:"center",justifyItems: "center"}}>
                <div className="grid-column" style={{alignItems:"center",justifyItems: "center"}}>
                  <BigNumberCard 
                  
                  zona={Zona}
                  config={config}>
                    </BigNumberCard>
                </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default SectionBigNumContainer;
