import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import axios from "axios";

function MiniNumberCard(props) {
  //Extrae las propiedades, configuración y titulos
  const zona = props.zona;
  const nombre = props.nombre;
  const config = props.config;

  //Setea los estados
  const [list, setList] = useState([]);
  //Previo a renderizar el componente se consulta la API
  useEffect(() => {
    const update = async () => {
      try {
        const res = await axios.get(
        //Para desarrollo 
          `http://localhost:9000/sapBase/filterGeneral/${config.Mes}-${config.Año}-${config.Cl_actividad_PM}-${config.Clase_de_orden}-${zona}-${config.Texto_breve}-${config.Pto_tbjo_resp}-${config.Operacion}-${config.BorrarDuplicados}`
        //Para producción
          //`https://backmant.herokuapp.com/sapBase/filterGeneral/${config.Mes}-${config.Año}-${config.Cl_actividad_PM}-${config.Clase_de_orden}-${zona}-${config.Texto_breve}-${config.Pto_tbjo_resp}-${config.Operacion}-${config.BorrarDuplicados}`
        );
        setList(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    update();
  }, [setList, config.Mes, config.Año]);

  //Se inicializan los labels y las cantidades
  let labels = ["CTEC", "EJEC", "ABIE", "CTEC CENE"];
  let quantity = [0, 0, 0, 0]

  //Se extraen los labels
  let datos = list.Fecha_Referencia_Mensual;
  if (datos) {
    quantity = labels.map((labels, index) => {
      let cant = datos.filter((datos) => {
        return (datos.Status === labels)
      })[0]
      if (cant) {
        cant = cant.Count
      } else {
        cant = 0
      }
      return (
        cant
      )
    })
  }


  return (
    <>
      <Card
        sx={{
          display: "flex",
          border: "0px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0px 0px 0px white",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="button"
              color="text.primary"
              component="div"
              style={{
                fontSize: "1.2em",
                paddingLeft: "0.8em",
                paddingBottom: "0px",
              }}
            >
              {nombre}
            </Typography>
            <Typography
              component="div"
              variant="h5"
              align="center"
              style={{ fontSize: "3em" }}
            >
              {quantity[0]}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              align="center"
              style={{ fontSize: "0.8em" }}
            >
              Ejecutados
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}

export default MiniNumberCard;
