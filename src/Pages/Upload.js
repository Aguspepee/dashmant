import React, { useState } from "react";
import * as xlsx from "xlsx/xlsx.mjs";
import Button from "@mui/material/Button";
import axios from "axios";

const fileTypes = ["XLS", "XLSX", "CSV"];

function Upload() {
  let json = [];
  const [file, setFile] = useState(null);

  function uploadFiles(json) {
    console.log("comienza carga", json);

    //Para desarrollo
    axios.delete("http://localhost:9000/saps/").then(
      axios
        .post("http://localhost:9000/saps/", json)

        //Para producción
        //    axios.delete('https://backmant.herokuapp.com/saps/')
        //       .then(axios.post('https://backmant.herokuapp.com/saps/', json)
        .then((res) => {
          const ots = res.data;
          console.log("Se cargaron los archivos", ots);
        })
    );
  }

  //Renombrar las keys de la base de datos de SAP con los nombres utilizados en MongoDB
  function keyModifi(data) {
    let idModified = data.map((obj) => {
      return {
        Cl_actividad_PM: obj["Cl.actividad PM"],
        Clase_de_orden: obj["Clase de orden"],
        Equipo: obj["Equipo"],
        Fecha_ref: obj["Fecha ref."],
        Grupo_planif: obj["Grupo planif."],
        Inicio_program: obj["Inicio program."],
        Operacion: obj["Operación"],
        Orden: obj["Orden"],
        Pto_tbjo_resp: obj["Pto.tbjo.resp."],
        Status_usuario: obj["Status usuario"],
        Texto_breve: obj["Texto breve"],
        Trabajo_real:obj["Trabajo real"],
        Ubicac_técnica: obj["Ubicac.técnica"],
      };
    });
    return idModified;
  }

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        json = xlsx.utils.sheet_to_json(worksheet, { raw: false });
        json = keyModifi(json);
        console.log(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <>
      <h3 style={{ paddingTop: "40px" }}>Carga de bases de datos</h3>
      <form>
        <div>
          <label htmlFor="upload">Base de datos general</label>
        </div>
        <input
          type="file"
          name="upload"
          id="upload"
          onChange={readUploadFile}
        />
        <div style={{ padding: "1em 1em 1em 1em" }}>
          <Button variant="primary" onClick={() => uploadFiles(json)}>
            Guardar
          </Button>
        </div>
      </form>
    </>
  );
}

export default Upload;
