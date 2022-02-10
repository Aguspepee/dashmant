import React from "react";
//import LineAcumChartCard from "../Components/Cards/LineAcumChartCard";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import SectionMultiBarContainer from "../Components/Containers/SectionMultiBarContainer";
import SectionMultiNumContainer from "../Components/Containers/SectionMultiNumContainer";

function General() {
  return (
    <>
    <h1>Estaciones Transformadoras</h1>
      <SectionMultiPieContainer
        activity="RPM"
        title="Estado de avance del Plan Anual de Mantenimiento"
        description="Unidades de Mantenimiento intervenidas."
        bar="true">
      </SectionMultiPieContainer>
      <SectionMultiNumContainer
        activity="MCP"
        title="Intervenciones Correctivas"
        description="Candidad de intervenciones"
        >
      </SectionMultiNumContainer>
      <SectionMultiPieContainer
        activity="RSP"
        title="Recorrido de Seguridad Pública"
        description="Estado de avance de la ejeción de las recorridas de seguridad publica programadas."
        bar="false">
      </SectionMultiPieContainer>
      <SectionMultiPieContainer
        activity="MUA"
        title="Muestreos de Aceite"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento"
        bar="false">
      </SectionMultiPieContainer>
      
      {/* <LineAcumChartCard></LineAcumChartCard> */}
      <h1>Líneas Eléctricas</h1>
      <SectionMultiBarContainer
        activity="PINM"
        title="Inspección Minuciosa"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento"
        >
          
      </SectionMultiBarContainer>
    </>
  )
}

export default General;