import React from "react";
import SectionLineChartContainer from "../Components/Containers/SectionLineChartContainer";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import SectionMultiBarContainer from "../Components/Containers/SectionMultiBarContainer";
import SectionMultiNumContainer from "../Components/Containers/SectionMultiNumContainer";

function General() {
  return (
    <>
      <h1>Estaciones Transformadoras</h1>

      <SectionMultiPieContainer
        activity="RPM"
        title="Unidades de Mantenimiento intervenidas respecto de las programadas"
        description="Unidades de Mantenimiento intervenidas."
        bar="true"
        filters={{
          filterByIng:  true,
          filterByMuesAceite: false,
          filterByProtecciones:true,
          deleteDuplicates: true,
        }}
      ></SectionMultiPieContainer>

      <SectionMultiNumContainer
        activity="MCP"
        title="Intervenciones Correctivas"
        description="Candidad de intervenciones"
        filters={{
          filterByIng: true,
          filterByMuesAceite: false,
          filterByProtecciones:true,
          deleteDuplicates: false,
        }}
      ></SectionMultiNumContainer>

      <SectionMultiPieContainer
        activity="RSP"
        title="Inspección de Seguridad Pública"
        description="Estado de avance de la ejecución de las recorridas de seguridad publica programadas."
        bar="true"
        filters={{
          filterByIng: true,
          filterByMuesAceite: false,
          filterByProtecciones:true,
          deleteDuplicates: false,
        }}
      ></SectionMultiPieContainer>

      <SectionMultiPieContainer
        activity="MUA"
        title="Muestreos de Aceite"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento"
        bar="false"
        filters={{
          filterByIng: true,
          filterByMuesAceite: true,
          filterByProtecciones:true,
          deleteDuplicates: false,
        }}
      ></SectionMultiPieContainer>

      <h1>Líneas Eléctricas</h1>
      <SectionMultiBarContainer
        activity="PINM"
        title="Inspección Minuciosa"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento"
        detail="Ejecutado Minuciosa"
      ></SectionMultiBarContainer>
      <SectionMultiBarContainer
        activity="PINT"
        title="Inspección Terrestre"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento"
        detail="Ejecutado Terrestre"
      ></SectionMultiBarContainer>
    </>
  );
}

export default General;
