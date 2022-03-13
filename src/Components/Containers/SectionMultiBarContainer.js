import React from "react";
//import { useEffect, useContext } from "react";
import { Card } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import MultiBarChartCard from "../Cards/MultiBarChartCard";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import MiniLinePieCard from "../Cards/MiniLinePieCard";

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

function SectionMultiBarContainer(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //Titulo y subtitulo del bloque
  const Titulo = props.Titulo;
  const Descripcion = props.Descripcion;
  const Tipo = props.Tipo;
  const Mostrar_Anual = props.Mostrar_Anual;
  const Mes = props.Mes;
  const Año = props.Año;
  const zonas = [
    {
      Zona: "ZN",
      Nombre: "ZONA NORTE",
    },
    {
      Zona: "ZS",
      Nombre: "ZONA SUR",
    },
    {
      Zona: "ZO",
      Nombre: "ZONA OESTE",
    },
    {
      Zona: "ZA",
      Nombre: "ZONA AUSTRAL",
    },
  ];
  console.log("Cargó Lineas");
  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
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
              <div className="gridpie">
                {zonas.map((zonas, index) => (
                  <div className="grid-column" key={zonas.Zona}>
                    <MiniLinePieCard
                      Zona={zonas.Zona}
                      Nombre={zonas.Nombre}
                      Tipo={Tipo}
                      Mostrar_Anual={Mostrar_Anual}
                      Mes={Mes}
                      Año={Año}
                    ></MiniLinePieCard>
                  </div>
                ))}
              </div>
            </div>

              <CardActions disableSpacing style={{ padding: "0px 0px 0px 0px" }}>
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
                  {zonas.map((zonas, index) => (
                    <MultiBarChartCard
                      key={zonas.Zona}
                      Zona={zonas.Zona}
                      Nombre={zonas.Nombre}
                      Tipo={Tipo}
                      Mostrar_Anual={Mostrar_Anual}
                      Mes={Mes}
                      Año={Año}
                    ></MultiBarChartCard>
                  ))}
                </div>
              </CardContent> 
            </Collapse>  
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SectionMultiBarContainer;
