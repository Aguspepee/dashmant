import React, { useState } from "react";
import * as xlsx from "xlsx/xlsx.mjs";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import axios from "axios";

function Uploader(props) {
    let json = [];
    const dbSubBaseURL = props.dbSubBaseURL;
    const keyConverter = props.keyConverter;
    const Titulo = props.Titulo;
    const Subtitulo = props.Subtitulo;
    const fileTypes = props.fileTypes;
    

    function uploadFiles(json) {
        console.log("comienza carga en ", dbSubBaseURL, json);
        //Para desarrollo

        const options = {
            onUploadProgress: (progressEvent) =>{
                const {loaded,total} = progressEvent;
                let percent = Math.floor((loaded * 100)/total)
                console.log(percent)
            }

        }



        axios.delete(`http://localhost:9000/${dbSubBaseURL}/`).then(
            axios.post(`http://localhost:9000/${dbSubBaseURL}/`, json,options)
                //Para producción
                //    axios.delete('https://backmant.herokuapp.com/sapBase/')
                //       .then(axios.post('https://backmant.herokuapp.com/sapBase/', json)
                .then((res) => {
                    const ots = res.data;
                    console.log("Se cargaron los archivos", ots);
                })
        );
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
                json = keyConverter(json);
                console.log(json);
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    };

    return (
        <>

            <div style={{ paddingTop: "10px" }}>
                <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                    <CardContent>
                        <CardHeader
                            title={Titulo}
                            subheader={Subtitulo}
                        />
                        <form style={{ padding: " 0em 3em 0em 3em" }}>
                            <div>
                                <label htmlFor="upload"></label>
                            </div>
                            <input
                                type="file"
                                name="upload"
                                id="upload"
                                onChange={readUploadFile}
                                accept={fileTypes}
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

export default Uploader;