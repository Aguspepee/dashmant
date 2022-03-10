import React, { Suspense, useRef, useEffect,useContext  } from "react";
import SectionDistributionContainer from "../Components/Containers/SectionDistributionContainer";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import SectionMultiNumContainer from "../Components/Containers/SectionMultiNumContainer";
import DateContext from "../Context/DateContext";
const SectionMultiBarContainer = React.lazy(() =>
  import("../Components/Containers/SectionMultiBarContainer")
);

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function General() {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const [
    year,
    setYear,
    month,
    setMonth,
  ] = useContext(DateContext);
  console.log("cargó general")
 
  return (
    <>
      <div>
        <button style={{ position: "fixed" }} onClick={executeScroll}></button>
      </div>
      <h1>Estaciones Transformadoras</h1>

      <SectionMultiPieContainer
        Titulo="Mantenimiento Programado de Equipos"
        Descripcion="Unidades de Mantenimiento"
        Mostrar_Anual="true"
        Mes={month}
        Año={year}
        Cl_actividad_PM="RPM"
        Clase_de_orden="ZTPL"
        Texto_breve="false"
        Pto_tbjo_resp="ETRA"
        Operacion="0010"
        BorrarDuplicados="true"
      ></SectionMultiPieContainer>

      <SectionMultiNumContainer
        Titulo="Mantenimiento Correctivo de Equipos"
        Descripcion="Cantidad de intervenciones"
        Mes={month}
        Año={year}
        Cl_actividad_PM="MCP"
        Clase_de_orden="ZTCP"
        Texto_breve="false"
        Pto_tbjo_resp="false"
        Operacion="0010"
        BorrarDuplicados="false"
      ></SectionMultiNumContainer> 

      <SectionMultiPieContainer
        Titulo="Seguridad Pública"
        Descripcion="Recorridas de Seguridad Pública"
        Mostrar_Anual="true"
        Mes={month}
        Año={year}
        Cl_actividad_PM="RSP"
        Clase_de_orden="ZTPL"
        Texto_breve="false"
        Pto_tbjo_resp="ETRA"
        Operacion="0010"
        BorrarDuplicados="false"
      ></SectionMultiPieContainer>

      <SectionMultiPieContainer
        Titulo="Muestreos de Aceite"
        Descripcion="Extracciones de Aceite"
        Mostrar_Anual="true"
        Mes={month}
        Año={year}
        Cl_actividad_PM="MUA"
        Clase_de_orden="false"
        Texto_breve="Muestreo"
        Pto_tbjo_resp="false"
        Operacion="0010"
        BorrarDuplicados="false"
      ></SectionMultiPieContainer>

       <SectionDistributionContainer
        title="Distribución de actividades"
        Descripcion="Horas hombres utilizadas por rubro"
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
