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
      display: false,
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

  const dataList = props.dataPie; //Esta data está filtrada por mes y por año
  //Se obtienen los labels
  let labels = [];
  for (let i = 0; i < dataList.Lista.length; i++) {
    labels.push(dataList.Lista[i].Tipo);
  }
  //Se obtienen los datos
  let quantity = [];
  for (let i = 0; i < dataList.Lista.length; i++) {
    quantity.push(
      Number.isNaN(dataList.Lista[i].Cantidad)
        ? true
        : dataList.Lista[i].Cantidad
    );
  }

  let percentaje;

  if (
    !Number.isNaN(
      quantity[0] / (quantity[0] + quantity[1] + quantity[2] + quantity[3])
    )
  ) {
    percentaje = (
      (quantity[0] / (quantity[0] + quantity[1] + quantity[2] + quantity[3])) *
      100
    ).toFixed(0);
  } else {
    percentaje = "-";
  }

  //Se inicializa el gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        data: quantity,
        backgroundColor: ["#BDE7BD", "#FF6962", "#FF6962", "#FF6962"],
        borderColor: ["#BDE7BD", "#FF6962", "#FF6962", "#FF6962"],
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
        {dataList.ZonaNombre}
      </Typography>
      <Divider light style={{ width: "90%" }} />
      <Card
        sx={{
          display: "flex",
          border: "0px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0px 0px 0px white",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto", width: "10%" }}>

        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            width: "100%",
            alignItems: "center",
            padding: "1em 3em 1em 1em",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
      </Card>
      <Divider light style={{ width: "90%" }} />

    </>
  );
}

export default MiniDistributionCard;
