import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
//import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import MiniBarChartCard from "../Cards/MiniBarChartCard";
import { Container } from "@mui/material";
import "./animation.css";
ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      display: false,
      
    },
  },
};

let percentajeNow
//Cálculo de día del año
let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);


function MiniPieChartCard(props) {
  let bar = props.bar;
  let barra;

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

  let percentaje  
  
  if (!Number.isNaN(quantity[1] / (quantity[0] + quantity[1] + quantity[2]))){
    percentaje = ((quantity[1] / (quantity[0] + quantity[1] + quantity[2])) * 100 ).toFixed(0);
  }else{
    percentaje = "-"
  }
  

  //Se inicializa el gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        data: quantity,
       // backgroundColor: ["#bbbbbb", "#2c3e50", "#aadeee"],
       backgroundColor: ["#bbbbbb", "green", "red"],
         
       borderColor: ["#bbbbbb", "#2c3e50", "#aadeee"],
        borderWidth: 0,
      },
    ],
  };

  data.datasets.forEach(dataset => {
     if (data.datasets[0].data.every(el => el === 0)) {
      data.datasets[0].backgroundColor.push('rgba(240,240,240,1)');
      data.datasets[0].data.push(1); 
    } 
  }) 

  let chipColor;

  percentaje < 30
    ? (chipColor = "error")
    : percentaje < 75
    ? (chipColor = "warning")
    : (chipColor = "success");

  let percentajeBar =
    (quantity[1] * 100) / dataList.UnidadadesMantenimientoCant;
  percentajeNow = day*100/365;

  if (bar === "true") {
    barra = (
      <Container>
        <Typography variant="body1" color="text.secondary" component="div" style={{fontSize: "1.2em"}}>
          Anual
        </Typography>
        <MiniBarChartCard percentaje={percentajeBar} percentajeNow={percentajeNow}></MiniBarChartCard>
        <Typography variant="overline" color="text.secondary" component="div" style={{fontSize: "0.8em"}}>
          {quantity[1]}/{dataList.UnidadadesMantenimientoCant} ud.
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
        <CardContent sx={{ flex: "1 0 auto",width: "10%"}} >
          <Typography variant="body1" color="text.secondary" component="div" style={{fontSize: "1.2em"}}>
            Mensual
          </Typography>
          <Typography component="div" variant="h4" style={{fontSize: "2.5em"}}>
            {/* <Typography component="div" variant="h5" style={{ color: percentaje>75? "#00a65a" : percentaje>30?"#f39c12" :"#e74c3c"}}> */}
            {percentaje}%
          </Typography>
          <Typography variant="overline" color="text.secondary" component="div" style={{paddingBottom:"5px",fontSize: "0.8em"}}>
            {quantity[1]}/{(quantity[0] + quantity[1] + quantity[2])} Ud.
          </Typography>
          <Chip className="chip" label="Estado" color={chipColor} />
        </CardContent>

        <Box
          sx={{
            display: "flex",
            //flexDirection: "column",
            justifyContent: 'left',
            width: "55%",
            alignItems: "center",
            padding: "1em 1em 0em 1em",
          }}
        >
          
          <Doughnut data={data} options={options} />
          {/* <Pie data={data} options={options} /> */}
        
        </Box>
       
      </Card>
      {barra}
    </>
  );
}

export default MiniPieChartCard;
