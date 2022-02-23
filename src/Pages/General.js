import React, { Suspense } from "react";
import SectionLineChartContainer from "../Components/Containers/SectionLineChartContainer";
import SectionDistributionContainer from "../Components/Containers/SectionDistributionContainer";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import SectionMultiNumContainer from "../Components/Containers/SectionMultiNumContainer";
const SectionMultiBarContainer = React.lazy(() =>
  import("../Components/Containers/SectionMultiBarContainer")
);

function General() {
  return (
    <>
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

      <SectionMultiPieContainer
        activity="MUA"
        title="Muestreos de Aceite"
        description="Extracciones de Aceite"
        bar="false"
        filters={{
          filterByIng: true,
          filterByMuesAceite: true,
          filterByProtecciones: true,
          deleteDuplicates: false,
        }}
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
            detail="Ejecutado Minuciosa"
          ></SectionMultiBarContainer>
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <SectionMultiBarContainer
            activity="PINT"
            title="Inspección Terrestre"
            description="Piquetes"
            detail="Ejecutado Terrestre"
          ></SectionMultiBarContainer>
        </Suspense>
      </div>
    </>
  );
}

export default General;
