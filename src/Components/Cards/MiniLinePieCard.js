import React, { useEffect, useState } from "react";
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
import { NovedadesResumen } from "../../Services/lineasNovedadesService"

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

function MiniLinePieCard(props) {
  //Extrae las propiedades, configuración y titulos
  const Zona = props.Zona;
  const Nombre = props.Nombre;
  const Mostrar_Anual = props.Mostrar_Anual;
  const Mes = props.Mes;
  const Año = props.Año;
  const Tipo = props.Tipo;

  const [list, setList] = useState([]);
  //Previo a renderizar el componente se consulta la API
  useEffect(() => {
    const update = async () => {
      try {
        const res = await NovedadesResumen(Mes, Año, Zona,Tipo)
        setList(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    update();
  }, [setList, Mes, Año, Zona]);

  //Se obtienen los labels
  let labels = ["Ejecutado", "Previsto"];
  //Se obtienen los datos
  let quantity = [list.Total_Mensual_Ejecutado, list.Total_Mensual_Previsto];

  let percentaje = Math.round(list.Total_Mensual_Ejecutado * 100 / list.Total_Mensual_Previsto)

  //Se inicializa el gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        data: quantity,
        backgroundColor: ["#BDE7BD", "#FF6962"],
        borderColor: ["#BDE7BD", "#FF6962"],
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

  let percentajeBar = Math.round(list.Total_Anual_Ejecutado * 100 / list.Total_Anual_Previsto)
  percentajeNow = Math.round(3 * 100 / 12)
  let barra
  if (Mostrar_Anual === "true") {
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
        <MiniBarChartCard
          percentaje={percentajeBar}
          percentajeNow={percentajeNow}
        ></MiniBarChartCard>
        <Typography
          variant="caption"
          color="text.secondary"
          component="div"
          style={{ paddingBottom: "0px", fontSize: "0.7em" }}
        >
          PROGRAMADAS: {Math.round(list.Total_Anual_Previsto)}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          component="div"
          style={{ paddingBottom: "0px", fontSize: "0.7em" }}
        >
          INTERVENIDAS: {Math.round(list.Total_Anual_Ejecutado)}
        </Typography>
        <Typography component="div" variant="h4" style={{ fontSize: "2.5em" }}>
          {Math.round(list.Total_Anual_Ejecutado * 100 / list.Total_Anual_Previsto)}%
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
        {Nombre}
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
            PROGRAMADAS: {Math.round(list.Total_Mensual_Previsto)}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
            style={{ paddingBottom: "0px", fontSize: "0.7em" }}
          >
            INTERVENIDAS: {Math.round(list.Total_Mensual_Ejecutado)}
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
