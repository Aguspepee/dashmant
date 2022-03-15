import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import SectionBigDistributionContainer from "../Components/Containers/SectionBigDistributionContainer";
import SectionBigPieContainer from "../Components/Containers/SectionBigPieContainer";
import SectionBigNumContainer from "../Components/Containers/SectionBigNumContainer";
import "../Components/Containers/gridstyle.css";
import AppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import DateContext from "../Context/DateContext";
import SectionBigBarContainer from "../Components/Containers/SectionBigBarContainer";
import Help from "../Utils/Help"

let zonas = [
  { Zona: "ZN1", Nombre: "Zona Norte", Activity: [] },
  { Zona: "ZS1", Nombre: "Zona Sur", Activity: [] },
  { Zona: "ZO1", Nombre: "Zona Oeste", Activity: [] },
  { Zona: "ZA1", Nombre: "Zona Austral", Activity: [] },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Zonas(props) {
  const [year, setYear, month, setMonth] = useContext(DateContext);
  let Zona = useParams().id;
  const drawerWidth = 240;
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            mt: 6,
            pl: { sm: `${drawerWidth}px` },
          }}
          style={{
            backgroundColor: "white",
            zIndex: "3",
            width: "100%",
            boxShadow: "0px 10px 13px -8px rgba(0,0,0,0.47)",
          }}
        >
          <Toolbar style={{ }}>
            <Typography
              variant="primary"
              component="div"
              style={{ color: "gray", fontSize: "1.2em" }}
            >
              {zonas
                .filter((zonas) => {
                  return zonas.Zona === Zona;
                })[0]
                .Nombre.toLocaleUpperCase()}
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar style={{ marginBottom: "20px" }} />
      <h3 style={{ paddingTop: "20px", paddingBottom: "0px" }}>
        Estaciones Transformadoras
      </h3>
      <div className="gridzone">
        <SectionBigPieContainer
          Titulo="Mantenimiento Programado de Equipos"
          Descripcion="Unidades de Mantenimiento"
          Mostrar_Anual="true" 
          Mes={month}
          Año={year}
          Cl_actividad_PM="RPM"
          Clase_de_orden="ZTPL"
          Texto_breve="false"
          Pto_tbjo_resp="ETRA"
          Operacion="0010"
          BorrarDuplicados="true"
          Zona={Zona}
          Help={Help.HELP.RPM}
        ></SectionBigPieContainer>

        <SectionBigPieContainer
          Titulo="Seguridad Pública"
          Descripcion="Recorridas de Seguridad Pública"
          Mostrar_Anual="true"
          Mes={month}
          Año={year}
          Cl_actividad_PM="RSP"
          Clase_de_orden="ZTPL"
          Texto_breve="false"
          Pto_tbjo_resp="ETRA"
          Operacion="0010"
          BorrarDuplicados="false"
          Zona={Zona}
          Help={Help.HELP.RSP}
        ></SectionBigPieContainer>

        <SectionBigPieContainer
          Titulo="Muestreos de Aceite"
          Descripcion="Extracciones de Aceite"
          Mostrar_Anual="true"
          Mes={month}
          Año={year}
          Cl_actividad_PM="MUA"
          Clase_de_orden="false"
          Texto_breve="Muestreo"
          Pto_tbjo_resp="false"
          Operacion="0010"
          BorrarDuplicados="false"
          Zona={Zona}
          Help={Help.HELP.MUA}
        ></SectionBigPieContainer>
        <div className="secondary">

        <SectionBigDistributionContainer
          Titulo="Distribución de actividades"
          Descripcion="Horas hombres utilizadas por rubro"
          Mes={month}
          Año={year}
          Zona={Zona}
          Help={Help.DIST}
        ></SectionBigDistributionContainer>

        <SectionBigNumContainer
          Titulo="Mantenimiento Correctivo de Equipos"
          Descripcion="Cantidad de intervenciones"
          Mes={month}
          Año={year}
          Cl_actividad_PM="MCP"
          Clase_de_orden="ZTCP"
          Texto_breve="false"
          Pto_tbjo_resp="false"
          Operacion="0010"
          BorrarDuplicados="false"
          Zona={Zona}
          Help={Help.HELP.MCP}
        ></SectionBigNumContainer>
        </div>
      </div>
      <h3 style={{ paddingTop: "20px", paddingBottom: "0px" }}>
        Líneas de Alta Tensión
      </h3>
      <div className="gridline">
        <div>
          <SectionBigBarContainer
            Titulo="Inspección Minuciosa"
            Descripcion="Piquetes"
            Tipo="PINM"
            Mostrar_Anual="true"
            Mes={month}
            Año={year}
            Zona={Zona}
            Help={Help.HELP.PINM}
          ></SectionBigBarContainer>
        </div>
        <div>
          <SectionBigBarContainer
            Titulo="Inspección Terrestre"
            Descripcion="Piquetes"
            Tipo="PINT"
            Mostrar_Anual="true"
            Mes={month}
            Año={year}
            Zona={Zona}
            Help={Help.HELP.PINT}
          ></SectionBigBarContainer>
        </div>
      </div>
    </>
  );
}

export default Zonas;
