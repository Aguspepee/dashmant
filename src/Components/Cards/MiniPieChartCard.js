import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
//import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

function MiniPieChartCard(props) {
  const dataList = props.data;
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
  let sum = quantity.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);
  if (sum === 0) {
    console.log("entro,sum");
    quantity = [0, 1, 0];
  }
  let percentaje = (
    (quantity[1] / (quantity[0] + quantity[1] + quantity[2])) *
    100
  ).toFixed(0);

  //Se inicializa el gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: quantity,
        backgroundColor: ["#bbbbbb", "#2c3e50", "#aadeee"],
        borderColor: ["#bbbbbb", "#2c3e50", "#aadeee"],
        borderWidth: 0,
      },
    ],
  };

  let chipColor;

  percentaje < 30
    ? (chipColor = "error")
    : percentaje < 75
    ? (chipColor = "warning")
    : (chipColor = "success");

  return (
    <>
      <Card
        sx={{
          display: "flex",
          border: "0px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0px 0px 0px white",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", width: "45%" }}>
          <CardContent sx={{ flex: "1 0 auto", width: "50%" }}>
            <Typography
              variant="button"
              color="text.primary"
              component="div"
              style={{ fontSize: "0.8em" }}
            >
              {dataList.ZonaNombre}
            </Typography>
            <Typography component="div" variant="h4">
              {/* <Typography component="div" variant="h5" style={{ color: percentaje>75? "#00a65a" : percentaje>30?"#f39c12" :"#e74c3c"}}> */}
              {percentaje}%
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              style={{ fontSize: "0.8em", paddingBottom: "6px" }}
            >
              Ejecutado
            </Typography>

            <Chip label="Estado" color={chipColor} />
          </CardContent>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "55%",
            padding: "1em 1em 0em 1em",
          }}
        >
          <Doughnut data={data} options={options} />
          {/* <Pie data={data} options={options} /> */}
        </Box>
      </Card>
    </>
  );
}

export default MiniPieChartCard;
