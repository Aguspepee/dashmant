import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./animation.css";
import Divider from "@mui/material/Divider";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);

//Configuración del gráfico
export const options = {
  plugins: {
    legend: {
      display: true,
      align: "start",
    },
    labels: {
      render: "percentage",
      precision: 2,
    },
  },
};

function MiniDistributionCard(props) {
  //Extrae las propiedades, configuración y titulos
  const zona = props.zona;
  const nombre = props.nombre;
  const config = props.config;
  const TotalAnual = props.TotalAnual;

  //Setea los estados
  const [list, setList] = useState([]);
  //Previo a renderizar el componente se consulta la API
  useEffect(() => {
    const update = async () => {
      try {
        const res = await axios.get(
          //Para desarrollo
          `http://localhost:9000/saps/DistibucionHoraria/${config.Mes}-${config.Año}-${zona}`

          //Para producción
          //`https://backmant.herokuapp.com/saps/filterGeneral/${config.Mes}-${config.Año}-${config.Cl_actividad_PM}-${config.Clase_de_orden}-${zona}-${config.Texto_breve}-${config.Pto_tbjo_resp}-${config.Operacion}-${config.BorrarDuplicados}`
        );
       // console.log(config.Mes,config.Año,zona)
        console.log("RESULTADO",res.data)
        setList(res.data.Distribucion);
      } catch (e) {
        console.log(e);
      }
    };
    update();
  }, [setList, config.Mes, config.Año]);

  let labels = [];
  let quantity = [];

  if (list) {
    console.log(list)
    //Se obtienen los labels
    for (let i = 0; i < list.length; i++) {
      labels.push(list[i].Grupo_Agrupamiento);
    }
    console.log("labels",labels)
    //Se obtienen los datos
    for (let i = 0; i < list.length; i++) {
      quantity.push(Number.isNaN(list[i].Count) ? true : list[i].Count);
    }
    console.log("quant",quantity)
  }

  let total = 50;
  // let total = quantity.reduce(reducer);

  //Se inicializa el gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        data: quantity,
        backgroundColor: [
          "#fd7f6f",
          "#7eb0d5",
          "#b2e061",
          "#bd7ebe",
          "#ffb55a",
          "#ffee65",
          "#beb9db",
          "#fdcce5",
          "#8bd3c7",
        ],
        borderColor: [
          "#fd7f6f",
          "#7eb0d5",
          "#b2e061",
          "#bd7ebe",
          "#ffb55a",
          "#ffee65",
          "#beb9db",
          "#fdcce5",
          "#8bd3c7",
        ],
        borderWidth: 0,
      },
    ],
  };

  data.datasets.forEach((dataset) => {
    if (data.datasets[0].data.every((el) => el === 0)) {
      data.datasets[0].backgroundColor.push("rgba(240,240,240,1)");
      data.datasets[0].data.push(1);
    }
  });

  return (
    <>
      <Typography
        variant="button"
        color="text.primary"
        component="div"
        style={{
          fontSize: "1.4em",
          paddingLeft: "0.8em",
          paddingBottom: "0px",
        }}
      >
        {nombre}
      </Typography>
      <Divider light style={{ width: "90%" }} />
      <Card
        sx={{
          display: "flex",
          border: "0px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0px 0px 0px white",
          backgroundColor: "rgba(0, 0, 0, 0.0)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            width: "100%",
            alignItems: "center",
            padding: "1em 1em 1em 1em",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
      </Card>
      <Typography
        variant="body1"
        color="text.primary"
        component="div"
        style={{
          fontSize: "1em",
          paddingLeft: "2em",
          paddingBottom: "0px",
        }}
      >
        Total Horas Hombre: {total}
      </Typography>
      <Divider light style={{ width: "90%" }} />
    </>
  );
}

export default MiniDistributionCard;
