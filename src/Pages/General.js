import React, { Suspense, useRef, useEffect } from "react";
import SectionDistributionContainer from "../Components/Containers/SectionDistributionContainer";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import SectionMultiNumContainer from "../Components/Containers/SectionMultiNumContainer";
const SectionMultiBarContainer = React.lazy(() =>
  import("../Components/Containers/SectionMultiBarContainer")
);

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function General() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const Month = "01";
  const Year = "2022";
  const Operacion = "0010";
  
  return (
    <>
      <div>
        <button style={{ position: "fixed" }} onClick={executeScroll}></button>
      </div>
      <h1>Estaciones Transformadoras</h1>

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
        Month={Month}
        Year={Year}
        Cl_actividad_PM="RPM"
        Clase_de_orden="ZTPL"
        Texto_breve="false"
        Pto_tbjo_resp=""
        Operacion={Operacion}
      ></SectionMultiPieContainer>

      <SectionMultiNumContainer
        activity="MCP"
        title="Mantenimiento Correctivo de Equipos"
        description="Cantidad de intervenciones"
        filters={{
          filterByIng: false,
          filterByMuesAceite: false,
          filterByProtecciones: false,
          deleteDuplicates: true,
        }}
        Month={Month}
        Year={Year}
        Cl_actividad_PM="MCP"
        Clase_de_orden="ZTPL"
        Texto_breve="false"
        Operacion={Operacion}
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
        Month={Month}
        Year={Year}
        Cl_actividad_PM="RSP"
        Clase_de_orden="ZTPL"
        Texto_breve="false"
        Pto_tbjo_resp=""
        Operacion={Operacion}
      ></SectionMultiPieContainer>

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
        Month={Month}
        Year={Year}
        Cl_actividad_PM="MUA"
        Clase_de_orden="false"
        Texto_breve="Muestreo"
        Pto_tbjo_resp=""
        Operacion={Operacion}
      ></SectionMultiPieContainer>

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

      <h1>Líneas de Alta Tensión</h1>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <SectionMultiBarContainer
            activity="PINM"
            title="Inspección Minuciosa"
            description="Piquetes"
            detail="Minuciosa"
          ></SectionMultiBarContainer>
        </Suspense>
      </div>

      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <SectionMultiBarContainer
            activity="PINT"
            title="Inspección Terrestre"
            description="Piquetes"
            detail="Terrestre"
          ></SectionMultiBarContainer>
        </Suspense>
      </div>
    </>
  );
}

export default General;
