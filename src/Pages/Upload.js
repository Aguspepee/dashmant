import React, { useState } from "react";
import * as xlsx from "xlsx/xlsx.mjs";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import axios from "axios";

const fileTypes = ["XLS", "XLSX", "CSV"];

function Upload() {
  let json = [];
  const [file, setFile] = useState(null);

  function uploadFiles(json) {
    console.log("comienza carga", json);
    //Para desarrollo
    axios.delete("http://localhost:9000/sapBase/").then(
      axios
        .post("http://localhost:9000/sapBase/", json)
        //Para producción
        //    axios.delete('https://backmant.herokuapp.com/sapBase/')
        //       .then(axios.post('https://backmant.herokuapp.com/sapBase/', json)
        .then((res) => {
          const ots = res.data;
          console.log("Se cargaron los archivos", ots);
        })
    );
  }

  //Renombrar las keys de la base de datos de SAP con los nombres utilizados en MongoDB
  function keyModifiSapBase(data) {
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
        Trabajo_real: obj["Trabajo real"],
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
        json = keyModifiSapBase(json);
        console.log(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <>
    <h3 style={{paddingTop:"50px"}}>Carga de base de datos</h3>
    <div style={{paddingTop:"10px"}}>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <CardContent>
          <CardHeader
            title="Base de datos general"
            subheader="Cargue la base de datos general de SAP"
          />
         <form style={{padding:" 0em 3em 0em 3em"}}>
          <div>
            <label htmlFor="upload"></label>
          </div>
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
          />
          <div style={{ padding: "1em 1em 1em 1em" }}>
            <Button variant="contained" onClick={() => uploadFiles(json)}>
              Guardar
            </Button>
          </div>
        </form>
        </CardContent>
      </Card>
      </div>

      <div style={{paddingTop:"15px"}}>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <CardContent>
          <CardHeader
            title="Historias de Líneas"
            subheader="Cargue la base de datos general de SAP"
          />
         <form style={{padding:" 0em 3em 0em 3em"}}>
          <div>
            <label htmlFor="upload"></label>
          </div>
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
          />
          <div style={{ padding: "1em 1em 1em 1em" }}>
            <Button variant="contained" onClick={() => uploadFiles(json)}>
              Guardar
            </Button>
          </div>
        </form>
        </CardContent>
      </Card>
      </div>

      <div style={{paddingTop:"15px"}}>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <CardContent>
          <CardHeader
            title="Historias de Estaciones"
            subheader="Cargue la base de datos general de SAP"
          />
         <form style={{padding:" 0em 3em 0em 3em"}}>
          <div>
            <label htmlFor="upload"></label>
          </div>
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
          />
          <div style={{ padding: "1em 1em 1em 1em" }}>
            <Button variant="contained" onClick={() => uploadFiles(json)}>
              Guardar
            </Button>
          </div>
        </form>
        </CardContent>
      </Card>
      </div>

      <div style={{paddingTop:"15px"}}>
      <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <CardContent>
          <CardHeader
            title="Base de datos de Líneas"
            subheader="Cargue la base de datos general de SAP"
          />
         <form  style={{padding:" 0em 3em 0em 3em"}}>
          <div>
            <label htmlFor="upload"></label>
          </div>
          <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
          />
          <div style={{ padding: "1em 1em 1em 1em" }}>
            <Button variant="contained" onClick={() => uploadFiles(json)}>
              Guardar
            </Button>
          </div>
        </form>
        </CardContent>
      </Card>
      </div>
    </>
  );
}

export default Upload;
