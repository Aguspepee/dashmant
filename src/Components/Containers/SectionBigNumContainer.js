import React from "react";
import BigNumberCard from "../Cards/BigNumberCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import AlertDialog from "../User/AlertDialog"

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
  

  return (
    <>
      <div style={{ padding: "1em 1em 1em 1em"}}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <CardContent>
            <CardHeader
              action={
                <AlertDialog Titulo={Titulo} Help={props.Help}></AlertDialog>
              }
              title={Titulo}
              subheader={Descripcion}
            />
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
