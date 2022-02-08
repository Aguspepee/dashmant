import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};



function MiniPieChartCart(props) {
  const dataList = props.data;
  //Se obtienen los labels
  let labels = []
  for (let i = 0; i < dataList.Lista.length; i++) {
    labels.push(dataList.Lista[i].Tipo)
  }
  //Se obtienen los datos
  let quantity = []
  for (let i = 0; i < dataList.Lista.length; i++) {
    quantity.push(dataList.Lista[i].Cantidad)
  }

  //Se inicializa el gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: quantity,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(53, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <>
      <Card sx={{ display: "flex", border: '0px solid rgba(0, 0, 0, 0.05)', boxShadow: '0px 0px 0px white' }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {(quantity[1]/(quantity[0]+quantity[1]+quantity[2])*100).toFixed(0)}%
            </Typography>
            <Typography
              variant='body1'
              color="text.secondary"
              component="div"
              style={{fontSize:"0.8em"}}
            >
              Finalizado
            </Typography>
            <Typography
              variant="button"
              color="text.primary"
              component="div"
            >
              {dataList.Zona}
            </Typography>
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
          <Pie data={data} options={options} />
        </Box>
      </Card>
    </>
  );
}

export default MiniPieChartCart;
