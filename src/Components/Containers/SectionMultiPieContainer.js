import React from "react";
import { useContext } from "react";
import MiniPieChartCart from "../Cards/MiniPieChartCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import FilterContext from "../../Context/FilterContext";
import axios from "axios";

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

const SectionMultiPieContainer = React.memo(function SectionMultiPieContainer(props){
  const [expanded, setExpanded] = React.useState(false);

  //Titulo y subtitulo del bloque
  const Titulo = props.Titulo;
  const Descripcion = props.Descripcion;

  //Configuración y filtros
  const config = {  
    "Mostrar_Anual" : props.Mostrar_Anual,
    "Descripcion" : props.Descripcion,
    "Mes" : props.Mes,
    "Año" : props.Año,
    "Cl_actividad_PM" : props.Cl_actividad_PM,
    "Clase_de_orden" : props.Clase_de_orden,
    "Pto_tbjo_resp" : props.Pto_tbjo_resp,
    "Texto_breve" : props.Texto_breve,
    "BorrarDuplicados" : props.BorrarDuplicados,
    "Operacion" : props.Operacion
  }

  /* async function uploadFiles(Zona) {
    try {
      const res = await axios.get(
        `http://localhost:9000/saps/filterGeneral/${Month}-${Year}-${Cl_actividad_PM}-${Clase_de_orden}-${Zona}-${Texto_breve}-${Pto_tbjo_resp}-${Operacion}-${BorrarDuplicados}`
      );
      await console.log(res.data);
      return await res.data;
    } catch (e) {
      console.log(e);
    }
  } */
  let zonas = [
    { Zona: "ZN1", Nombre:"ZONA NORTE"},
    { Zona: "ZS1", Nombre:"ZONA SUR"},
    { Zona: "ZO1", Nombre:"ZONA OESTE"},
    { Zona: "ZA1", Nombre:"ZONA AUSTRAL"},
  ];

  console.log("cargó componente");
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
            <div className="gridpie">
              {zonas .map((zonas , index) => (
                <div className="grid-column" key={zonas.Zona}>
                  <MiniPieChartCart
                    zona = {zonas.Zona}
                    nombre = {zonas.Nombre}
                    config = {config}
                  ></MiniPieChartCart>
                </div>
              ))}
            </div>
          </CardContent>
          {/* <CardActions disableSpacing style={{ padding: "0px 0px 0px 0px" }}>
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
              <div className="gridpie">
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
});
export default SectionMultiPieContainer;
