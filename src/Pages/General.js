import React, { useRef, useContext } from "react";
import SectionDistributionContainer from "../Components/Containers/SectionDistributionContainer";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import SectionMultiNumContainer from "../Components/Containers/SectionMultiNumContainer";
import DateContext from "../Context/DateContext";
import SectionMultiBarContainer from "../Components/Containers/SectionMultiBarContainer";
import Help from "../Utils/Help";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

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

function General(props) {
  const [year, setYear, month, setMonth] = useContext(DateContext);
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
          <Toolbar style={{}}>
            <Typography
              variant="primary"
              component="div"
              style={{ color: "gray", fontSize: "1.2em" }}
            >
              VISTA GENERAL
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar style={{ marginBottom: "20px" }} />
      <h3 style={{ paddingTop: "20px", paddingBottom: "0px" }}>
        Estaciones Transformadoras
      </h3>

      <SectionMultiPieContainer
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
        Help={Help.HELP.RPM}
      ></SectionMultiPieContainer>

      <SectionMultiNumContainer
        Titulo="Mantenimiento Correctivo de Equipos"
        Descripcion="Cantidad de intervenciones"
        Mes={month}
        Año={year}
        Cl_actividad_PM="MCP"
        Clase_de_orden="ZTCP"
        Texto_breve="false"
        Pto_tbjo_resp="ETRA"
        Operacion="0010"
        BorrarDuplicados="false"
        Help={Help.HELP.MCP}
      ></SectionMultiNumContainer>

      <SectionMultiPieContainer
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
        Help={Help.HELP.RSP}
      ></SectionMultiPieContainer>

      <SectionMultiPieContainer
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
        Help={Help.HELP.MUA}
      ></SectionMultiPieContainer>

      <SectionDistributionContainer
        Titulo="Distribución de actividades"
        Descripcion="Horas hombres utilizadas por rubro"
        Mes={month}
        Año={year}
        Help={Help.DIST}
      ></SectionDistributionContainer>

      <h3 style={{ paddingTop: "10px", paddingBottom: "0px" }}>
        Líneas de Alta Tensión
      </h3>
      <SectionMultiNumContainer
        Titulo="Mantenimiento Correctivo de LAT"
        Descripcion="Cantidad de intervenciones"
        Mes={month}
        Año={year}
        Cl_actividad_PM="MCP"
        Clase_de_orden="ZTCP"
        Texto_breve="false"
        Pto_tbjo_resp="LATS"
        Operacion="0010"
        BorrarDuplicados="false"
        Help={Help.HELP.MCP}
      ></SectionMultiNumContainer>

      <div>
        <SectionMultiBarContainer
          Titulo="Inspección Minuciosa"
          Descripcion="Piquetes"
          Tipo="PINM"
          Mostrar_Anual="true"
          Mes={month}
          Año={year}
          Help={Help.HELP.PINM}
        ></SectionMultiBarContainer>
      </div>

      <div>
        <SectionMultiBarContainer
          Titulo="Inspección Terrestre"
          Descripcion="Piquetes"
          Tipo="PINT"
          Mostrar_Anual="true"
          Mes={month}
          Año={year}
          Help={Help.HELP.PINT}
        ></SectionMultiBarContainer>
      </div>
    </>
  );
}

export default General;
