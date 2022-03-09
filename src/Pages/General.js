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
  const Mes = "02";
  const Año = "2022";
  console.log("cargó general")
  return (
    <>
      <div>
        <button style={{ position: "fixed" }} onClick={executeScroll}></button>
      </div>
      <h1>Estaciones Transformadoras</h1>

      <SectionMultiPieContainer
        activity="RPM"
        title="Mantenimiento Programado de Equipos"
        Descripcion="Unidades de Mantenimiento"
        Mostrar_Anual="true"
        Mes={Mes}
        Año={Año}
        Cl_actividad_PM="RPM"
        Clase_de_orden="ZTPL"
        Texto_breve="false"
        Pto_tbjo_resp="ETRA"
        Operacion="0010"
        BorrarDuplicados="true"
      ></SectionMultiPieContainer>

     {/*  <SectionMultiNumContainer
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
        Clase_de_orden="ZTCP"
        Texto_breve="false"
        Pto_tbjo_resp="false"
        Operacion="0010"
        BorrarDuplicados="false"
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
        Pto_tbjo_resp="ETRA"
        Operacion="0010"
        BorrarDuplicados="false"
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
        Pto_tbjo_resp="false"
        Operacion="0010"
        BorrarDuplicados="false"
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
      </div> */}
    </>
  );
}

export default General;
