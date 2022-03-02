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
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
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

function MiniLinePieCard(props) {
  let bar = props.bar;
  let barra;
  let detail = props.detail;

  const dataList = props.dataPie; //Esta data está filtrada por mes y por año
  //Esta data está filtada por año
  //Se obtienen los labels
  let labels = ["Ejecutado", "Previsto"];
  //Se obtienen los datos
  let quantity = [
    dataList["Mensual Ejecutado " + detail],
    dataList["Mensual Previsto " + detail],
  ];

  let percentaje = Math.round(
    (dataList["Mensual Ejecutado " + detail] * 100) /
      dataList["Mensual Previsto " + detail]
  );

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

  let percentajeBar =
    (dataList["Anual Ejecutado " + detail] * 100) /
    dataList["Anual Previsto " + detail];
  percentajeNow = (day * 100) / 365;

  if (bar === "true") {
    barra = (
      <Container>
        <Typography
          variant="body1"
          color="text.secondary"
          component="div"
          style={{ paddingTop: "1em", fontSize: "1.2em" }}
        >
          Anual
        </Typography>
        {/* <Divider light style={{ width: "37%" }} /> */}
        <MiniBarChartCard
          percentaje={percentajeBar}
          percentajeNow={percentajeNow}
        ></MiniBarChartCard>
        {/* <Typography
          variant="overline"
          color="text.secondary"
          component="div"
          style={{ fontSize: "0.8em" }}
        >
          {dataList.Lista[0].Cantidad}/{dataList.TotAnual} ud.
        </Typography> */}
        <Typography
          variant="caption"
          color="text.secondary"
          component="div"
          style={{ paddingBottom: "0px", fontSize: "0.7em" }}
        >
          PROGRAMADAS: {dataList["Anual Previsto " + detail]}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          component="div"
          style={{ paddingBottom: "0px", fontSize: "0.7em" }}
        >
          INTERVENIDAS: {dataList["Anual Ejecutado " + detail]}
        </Typography>
        <Typography component="div" variant="h4" style={{ fontSize: "2.5em" }}>
          {Math.round(percentajeBar)}%
        </Typography>
        <Typography
          variant="body2"
          color="text.primary"
          component="div"
          style={{ fontSize: "0.9em", paddingBottom: "10px" }}
        >
          EJECUTADO
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
      <Divider light style={{ width: "90%" }} />
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
          <Divider light style={{ width: "90%" }} />
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
            style={{ paddingBottom: "0px", fontSize: "0.7em" }}
          >
            PROGRAMADAS: {dataList["Mensual Previsto " + detail]}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
            style={{ paddingBottom: "0px", fontSize: "0.7em" }}
          >
            INTERVENIDAS: {dataList["Mensual Ejecutado " + detail]}
          </Typography>

          <Typography
            component="div"
            variant="h4"
            style={{ fontSize: "2.5em" }}
          >
            {percentaje}%
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            component="div"
            style={{ fontSize: "0.9em" }}
          >
            EJECUTADO
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            width: "55%",
            alignItems: "center",
            padding: "1em 3em 1em 1em",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
      </Card>
      <Divider light style={{ width: "90%" }} />
      {barra}
      <Divider light style={{ width: "90%" }} />
    </>
  );
}

export default MiniLinePieCard;
