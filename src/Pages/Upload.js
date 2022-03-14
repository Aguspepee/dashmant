import React from "react";
import Uploader from "../Components/User/Uploader";
import { keyModifiSapBase, keyModifiLineasBase, keyModifiLineasNovedades } from "../Utils/keyConverters";




function Upload() {


  return (
    <>
      <h3 style={{ paddingTop: "50px" }}>Carga de base de datos</h3>
      <Uploader
        dbSubBaseURL="sapBase"
        keyConverter={keyModifiSapBase}
        Titulo="SAP - Datos Generales SAP"
        Subtitulo="Seleccione el archivo"
        fileTypes=".xlsx , xls"
      ></Uploader>

      <Uploader
        dbSubBaseURL="lineasNovedades"
        keyConverter={keyModifiLineasNovedades}
        Titulo="SAP - Novedades de Lineas"
        Subtitulo="Seleccione el archivo"
        fileTypes=".xlsx , xls"
      ></Uploader>

      <Uploader
        dbSubBaseURL="lineasBase"
        keyConverter={keyModifiLineasBase}
        Titulo="Datos de Lineas"
        Subtitulo="Seleccione el archivo"
        fileTypes=".xlsx , xls"
      ></Uploader>
    </>

  )

}

export default Upload;
