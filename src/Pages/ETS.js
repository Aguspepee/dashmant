import React, { useRef } from "react";
import SectionDistributionContainer from "../Components/Containers/SectionDistributionContainer";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import SectionMultiNumContainer from "../Components/Containers/SectionMultiNumContainer";
import AppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

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

function ETS(props) {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
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
            zIndex: "0",
            width: "100%",
            boxShadow: "0px 10px 13px -8px rgba(0,0,0,0.47)",
          }}
        >
          <Toolbar>
            <Typography
              variant="primary"
              component="div"
              style={{ color: "gray" }}
            >
              ESTACIONES TRANSFORMADORAS
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar style={{ marginBottom: "40px" }} />

      {/*     <div>
    <button style={{position:"fixed"}} onClick={executeScroll}></button>
  </div> */}
      {/*             <h1>Estaciones Transformadoras</h1> */}

      <SectionMultiPieContainer
        activity="RPM"
        title="Mantenimiento Programado de Equipos"
        description="Unidades de Mantenimiento"
        bar="true"
        filters={{
          filterByIng: true,
          filterByMuesAceite: false,
          filterByProtecciones: true,
          deleteDuplicates: true,
        }}
      ></SectionMultiPieContainer>

      <SectionMultiNumContainer
        activity="MCP"
        title="Mantenimiento Correctivo de Equipos"
        description="Candidad de intervenciones"
        filters={{
          filterByIng: false,
          filterByMuesAceite: false,
          filterByProtecciones: false,
          deleteDuplicates: true,
        }}
      ></SectionMultiNumContainer>

      <SectionMultiPieContainer
        activity="RSP"
        title="Seguridad Pública"
        description="Recorridas de Seguridad Pública"
        bar="true"
        filters={{
          filterByIng: true,
          filterByMuesAceite: false,
          filterByProtecciones: true,
          deleteDuplicates: false,
        }}
      ></SectionMultiPieContainer>
      <div ref={myRef}></div>

      <SectionDistributionContainer
        activity="MCP"
        title="Distribución de actividades"
        description="Horas hombres utilizadas por rubro"
        filters={{
          filterByIng: true,
          filterByMuesAceite: false,
          filterByProtecciones: false,
          deleteDuplicates: false,
        }}
      ></SectionDistributionContainer>
      <SectionMultiPieContainer
        activity="MUA"
        title="Muestreos de Aceite"
        description="Extracciones de Aceite"
        bar="true"
        filters={{
          filterByIng: true,
          filterByMuesAceite: true,
          filterByProtecciones: true,
          deleteDuplicates: false,
        }}
      ></SectionMultiPieContainer>
    </>
  );
}

export default ETS;
