import React, { Suspense, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import SectionBigDistributionContainer from "../Components/Containers/SectionBigDistributionContainer";
import SectionBigPieContainer from "../Components/Containers/SectionBigPieContainer";
import SectionMultiNumContainer from "../Components/Containers/SectionMultiNumContainer";
import "../Components/Containers/gridstyle.css"
const SectionBigBarContainer = React.lazy(() =>
  import("../Components/Containers/SectionBigBarContainer")
);


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function Zonas() {
  let id = useParams().id;
  //console.log("parametro", id);
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  return (
    <>
      <div>
        <button style={{ position: "fixed" }} onClick={executeScroll}></button>
      </div>
      <h1 style={{paddingTop:"30px"}}>Estaciones Transformadoras</h1>
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
        
        <SectionBigPieContainer
          activity="MCP"
          title="Mantenimiento Correctivo de Equipos"
          description="Candidad de intervenciones"
          zone={id}
          filters={{
            filterByIng: false,
            filterByMuesAceite: false,
            filterByProtecciones: false,
            deleteDuplicates: true,
          }}
        ></SectionBigPieContainer>
        
      </div>
      <h1>Líneas de Alta Tensión</h1>
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
