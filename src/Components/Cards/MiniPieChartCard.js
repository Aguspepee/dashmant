import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MiniBarChartCard from "../Cards/MiniBarChartCard";
import { Container } from "@mui/material";
import "./animation.css";
import Chip from '@mui/material/Chip';
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

function MiniPieChartCard(props) {
  let bar = props.bar;
  let barra;

  const dataList = props.dataPie; //Esta data está filtrada por mes y por año
  const dataBar = props.dataBar; //Esta data está filtada por año
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

  if (!Number.isNaN(quantity[0] / (quantity[0] + quantity[1] + quantity[2] + quantity[3]))) {
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
        backgroundColor: ["#28a745", "#dc3545", "#dc3545", "#dc3545"],
        borderColor: ["#28a745", "#dc3545", "#dc3545", "#dc3545"],
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

  let chipColor;

  percentaje < 30
    ? (chipColor = "error")
    : percentaje < 75
    ? (chipColor = "warning")
    : (chipColor = "success");

    
  let percentajeBar = (dataBar.Lista[0].Cantidad * 100) / dataBar.TotAnual;
  percentajeNow = (day * 100) / 365;

  if (bar === "true") {
    barra = (
      <Container>
        <Typography
          variant="body1"
          color="text.secondary"
          component="div"
          style={{ fontSize: "1.2em" }}
        >
          Anual
        </Typography>
        <MiniBarChartCard
          percentaje={percentajeBar}
          percentajeNow={percentajeNow}
        ></MiniBarChartCard>
        <Typography
          variant="overline"
          color="text.secondary"
          component="div"
          style={{ fontSize: "0.8em" }}
        >
          {dataBar.Lista[0].Cantidad}/{dataBar.TotAnual} ud.
        </Typography>
      </Container>
    );
  }

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
      <Card
        sx={{
          display: "flex",
          border: "0px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0px 0px 0px white",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto", width: "10%" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            component="div"
            style={{ fontSize: "1.2em" }}
          >
            Mensual
          </Typography>
          <Typography
            component="div"
            variant="h4"
            style={{ fontSize: "2.5em" }}
          >
            {percentaje}%
          </Typography>
          <Typography
            variant="overline"
            color="text.secondary"
            component="div"
            style={{ paddingBottom: "5px", fontSize: "0.8em" }}
          >
            {quantity[0]}/{quantity[0] + quantity[1] + quantity[2] + quantity[3]} Ud.
          </Typography>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            width: "55%",
            alignItems: "center",
            padding: "1em 1em 0em 1em",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
      </Card>
      {barra}
    </>
  );
}

export default MiniPieChartCard;
