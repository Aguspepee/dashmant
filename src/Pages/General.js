import React from "react";
import LineAcumChartCard from "../Components/Cards/LineAcumChartCard";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import MiniBarChartCard from "../Components/Cards/MiniBarChartCard";
import SectionMultiBarContainer from "../Components/Containers/SectionMultiBarContainer";

function General() {
  return (
    <>
      <SectionMultiPieContainer activity="RPM" title="Unidades de Mantenimiento (RPM)"></SectionMultiPieContainer>
      <SectionMultiPieContainer activity="RSP" title="Seguridad Pública de ET (RSP)"></SectionMultiPieContainer>
      <SectionMultiPieContainer activity="MUA" title="Muestreos de Aceite (MUA)"></SectionMultiPieContainer>
      {/* <LineAcumChartCard></LineAcumChartCard> */}
      <SectionMultiBarContainer activity="MUA" title="Inspección Minuciosa (LMI)"></SectionMultiBarContainer>
    </>
  )
}

export default General;