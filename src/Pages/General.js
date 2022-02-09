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
        title="Unidades de Mantenimiento"
        description="Avance mesual y anual de la ejecución mantenimiento por zona"
        bar="true">
      </SectionMultiPieContainer>
      <SectionMultiNumContainer
        activity="MCP"
        title="Intervenciones Correctivas"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento"
        >
      </SectionMultiNumContainer>
      <SectionMultiPieContainer
        activity="RSP"
        title="Recorrido de Seguridad Pública"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento"
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