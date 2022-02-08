import React from "react";
//import LineAcumChartCard from "../Components/Cards/LineAcumChartCard";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import SectionMultiBarContainer from "../Components/Containers/SectionMultiBarContainer";

function General() {
  return (
    <>
      <SectionMultiPieContainer
        activity="RPM"
        title="Unidades de Mantenimiento (RPM)"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento">
      </SectionMultiPieContainer>
      <SectionMultiPieContainer
        activity="RSP"
        title="Seguridad Pública de ET (RSP)"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento">
      </SectionMultiPieContainer>
      <SectionMultiPieContainer
        activity="MUA"
        title="Muestreos de Aceite (MUA)"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento">
      </SectionMultiPieContainer>
      {/* <LineAcumChartCard></LineAcumChartCard> */}
      <SectionMultiBarContainer
        activity="PINM"
        title="Inspección Minuciosa (LMI)"
        description="Porcentaje de avance mensual en la ejecución de la inspección de las Unidades de Mantenimiento">
      </SectionMultiBarContainer>
    </>
  )
}

export default General;