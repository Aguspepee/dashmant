import { Card } from "@mui/material";
import React from "react";
import Tabla from "../Components/Cards/Tabla";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [4,2]
};

function GestionOT() {
  return (
    <>
      <h1>Líneas</h1>
      <Pdf targetRef={ref} filename="Ordenes de Trabajo.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <Card >
      <div ref={ref} style={{ width: "100%", overflow: "auto", display: "flex" }}>
        <Tabla ></Tabla>
        </div>
      </Card>
    </>
  );
}
export default GestionOT;
