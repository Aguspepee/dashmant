import React, { Suspense, useRef, useEffect } from "react";
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

let zonas = [
  { Zona: "ZN1", Nombre: "Zona Norte", Activity: [] },
  { Zona: "ZS1", Nombre: "Zona Sur", Activity: [] },
  { Zona: "ZO1", Nombre: "Zona Oeste", Activity: [] },
  { Zona: "ZA1", Nombre: "Zona Austral", Activity: [] },
];

const SectionBigBarContainer = React.lazy(() =>
  import("../Components/Containers/SectionBigBarContainer")
);

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

function Zonas(props) {
  let id = useParams().id;
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
              style={{ color: "gray", fontSize: "1.2em" }}
            >
              {zonas
                .filter((zonas) => {
                  return zonas.Zona === id;
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
          activity="RPM"
          title="Mantenimiento Programado de Equipos"
          description="Unidades de Mantenimiento"
          bar="true"
          zone={id}
          filters={{
            filterByIng: true,
            filterByMuesAceite: false,
            filterByProtecciones: true,
            deleteDuplicates: true,
          }}
        ></SectionBigPieContainer>

        <SectionBigPieContainer
          activity="RSP"
          title="Seguridad Pública"
          description="Recorridas de Seguridad Pública"
          bar="true"
          zone={id}
          filters={{
            filterByIng: true,
            filterByMuesAceite: false,
            filterByProtecciones: true,
            deleteDuplicates: false,
          }}
        ></SectionBigPieContainer>

        <SectionBigPieContainer
          activity="MUA"
          title="Muestreos de Aceite"
          description="Extracciones de Aceite"
          bar="true"
          zone={id}
          filters={{
            filterByIng: true,
            filterByMuesAceite: true,
            filterByProtecciones: true,
            deleteDuplicates: false,
          }}
        ></SectionBigPieContainer>

        <SectionBigDistributionContainer
          activity="MCP"
          title="Distribución de actividades"
          description="Horas hombres utilizadas por rubro"
          zone={id}
          filters={{
            filterByIng: true,
            filterByMuesAceite: false,
            filterByProtecciones: false,
            deleteDuplicates: false,
          }}
        ></SectionBigDistributionContainer>

        <SectionBigNumContainer
          activity="MCP"
          title="Mantenimiento Correctivo de Equipos"
          description="Cantidad de intervenciones"
          zone={id}
          filters={{
            filterByIng: false,
            filterByMuesAceite: false,
            filterByProtecciones: false,
            deleteDuplicates: true,
          }}
        ></SectionBigNumContainer>
      </div>
      <h3 style={{ paddingTop: "20px", paddingBottom: "0px" }}>Líneas de Alta Tensión</h3>
      <div className="gridline">
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <SectionBigBarContainer
              activity="PINM"
              title="Inspección Minuciosa"
              description="Piquetes"
              detail="Minuciosa"
              zone={id}
            ></SectionBigBarContainer>
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <SectionBigBarContainer
              activity="PINT"
              title="Inspección Terrestre"
              description="Piquetes"
              detail="Terrestre"
              zone={id}
            ></SectionBigBarContainer>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default Zonas;
