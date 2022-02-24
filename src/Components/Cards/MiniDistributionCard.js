import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./animation.css";
import Divider from "@mui/material/Divider";
ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      display: true,
      align: "start",
    },
    labels: {
      render: 'percentage',
    precision: 2
    },
    
  },
};

let percentajeNow;
//Cálculo de día del año
let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);

function MiniDistributionCard(props) {
  //----- CATEGORÍAS INDIVIDUALES----.//
  const dataList = props.dataPie; //Esta data está filtrada por mes y por año
  //Se obtienen los labels
/*   let labels = [];
  for (let i = 0; i < dataList.Activity.length; i++) {
    labels.push(dataList.Activity[i].NombreActividad);
  }
  //Se obtienen los datos
  let quantity = [];
  for (let i = 0; i < dataList.Activity.length; i++) {
    quantity.push(
      Number.isNaN(dataList.Activity[i].Horas)
        ? true
        : dataList.Activity[i].Horas
    );
  } */

  //console.log(dataList);

 //----- CATEGORÍAS GRUPALES----.//
  const dataListGroup = dataList.Activity;
  var result = [];
  dataListGroup.reduce(function (res, value) {
    if (!res[value.Grupo]) {
      res[value.Grupo] = {
        Grupo: value.Grupo,
        NombreGrupo: value.NombreGrupo,
        Horas: 0,
      };
      result.push(res[value.Grupo]);
    }
    res[value.Grupo].Horas += value.Horas;
    return res;
  }, {});
  //Se obtienen los labels
  let labels = [];
  for (let i = 0; i < result.length; i++) {
    labels.push(result[i].NombreGrupo);
  }
  
  //Se obtienen los datos
  let quantity = [];
  for (let i = 0; i < result.length; i++) {
    quantity.push(Number.isNaN(result[i].Horas) ? true : result[i].Horas);
  }

  //console.log(result);

  const reducer = (accumulator, curr) => accumulator + curr;

  let total = quantity.reduce(reducer);
  //console.log(total);

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
        {dataList.Nombre}
      </Typography>
      <Divider light style={{ width: "90%" }} />
      <Card
        sx={{
          display: "flex",
          border: "0px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0px 0px 0px white",
          backgroundColor:"rgba(0, 0, 0, 0.0)"
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
