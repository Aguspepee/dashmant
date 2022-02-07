import React from "react";
import LineAcumChartCard from "../Components/Cards/LineAcumChartCard";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";

function General() {
  return (
    <>
      <SectionMultiPieContainer activity="RPM" title="Unidades de Mantenimiento"></SectionMultiPieContainer>
      <SectionMultiPieContainer activity="RSP" title="Seguridad Pública de ET"></SectionMultiPieContainer>
      {/* <LineAcumChartCard></LineAcumChartCard> */}
    </>
  )
}

export default General;