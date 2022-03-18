import React, { useRef, useContext } from "react";
import SectionDistributionContainer from "../Components/Containers/SectionDistributionContainer";
import SectionMultiPieContainer from "../Components/Containers/SectionMultiPieContainer";
import SectionMultiNumContainer from "../Components/Containers/SectionMultiNumContainer";
import DateContext from "../Context/DateContext";
import SectionMultiBarContainer from "../Components/Containers/SectionMultiBarContainer";
import Help from "../Utils/Help"

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function General() {
  const myRef = useRef(null);
  console.log("Numero",Number("045"))
  const [year, setYear, month, setMonth] = useContext(DateContext);
  return (
    <>
      <h3 style={{ paddingTop: "50px", paddingBottom: "0px" }}>
        Estaciones Transformadoras
      </h3>

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
        Help={Help.HELP.RPM}
      ></SectionMultiPieContainer>

      <SectionMultiNumContainer
        Titulo="Mantenimiento Correctivo de Equipos"
        Descripcion="Cantidad de intervenciones"
        Mes={month}
        Año={year}
        Cl_actividad_PM="MCP"
        Clase_de_orden="ZTCP"
        Texto_breve="false"
        Pto_tbjo_resp="ETRA"
        Operacion="0010"
        BorrarDuplicados="false"
        Help={Help.HELP.MCP}
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
        Help={Help.HELP.RSP}
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
        Help={Help.HELP.MUA}
      ></SectionMultiPieContainer>

      <SectionDistributionContainer
        Titulo="Distribución de actividades"
        Descripcion="Horas hombres utilizadas por rubro"
        Mes={month}
        Año={year}
        Help={Help.DIST}
      ></SectionDistributionContainer>

      <h3 style={{ paddingTop: "10px", paddingBottom: "0px" }}>
        Líneas de Alta Tensión
      </h3>
      <SectionMultiNumContainer
        Titulo="Mantenimiento Correctivo de LAT"
        Descripcion="Cantidad de intervenciones"
        Mes={month}
        Año={year}
        Cl_actividad_PM="MCP"
        Clase_de_orden="ZTCP"
        Texto_breve="false"
        Pto_tbjo_resp="LATS"
        Operacion="0010"
        BorrarDuplicados="false"
        Help={Help.HELP.MCP}
      ></SectionMultiNumContainer>

      <div>
        <SectionMultiBarContainer
          Titulo="Inspección Minuciosa"
          Descripcion="Piquetes"
          Tipo="PINM"
          Mostrar_Anual="true"
          Mes={month}
          Año={year}
          Help={Help.HELP.PINM}
        ></SectionMultiBarContainer>
      </div>

      <div>
        <SectionMultiBarContainer
          Titulo="Inspección Terrestre"
          Descripcion="Piquetes"
          Tipo="PINT"
          Mostrar_Anual="true"
          Mes={month}
          Año={year}
          Help={Help.HELP.PINT}
        ></SectionMultiBarContainer>
      </div>
    </>
  );
}

export default General;
