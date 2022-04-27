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
import { filterGeneral } from "../../Services/sapBaseService"
ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

function BigPieChartCard(props) {
  //Extrae las propiedades, configuración y titulos
  const zona = props.zona;
  const config = props.config;
  const TotalAnual = props.TotalAnual
  

  //Setea los estados
  const [list, setList] = useState([]);
  //Previo a renderizar el componente se consulta la API
  useEffect(() => {
    const update = async () => {
      try {
        const res = await filterGeneral(config, zona)
        console.log(res.data)
        setList(res.data);
      } catch (e) {
        console.log(e); 
      }
    };
    update();
  }, [setList, config.Mes, config.Año,zona]);

  //Se inicializan los labels y las cantidades
  let labels = ["Ejec.", "No Ejec."];
  let Programado_Mensual = 0;
  let Ejecutado_Mensual = 0;

  //Se calcula el programado mensual en funcion de la fecha de inicio programado
  if (list.Inicio_Programado_Mensual) {
    for (let i = 0; i < list.Inicio_Programado_Mensual.length; i++) {
      Programado_Mensual = Programado_Mensual + list.Inicio_Programado_Mensual[i].Count;
    }
  }

  let datos = list.Fecha_Referencia_Mensual
  if (list.Fecha_Referencia_Mensual) {
    Ejecutado_Mensual = datos.filter((datos) => datos.Status === "CTEC")

  }
  if (Ejecutado_Mensual[0]) {
    Ejecutado_Mensual = Ejecutado_Mensual[0].Count
  } else {
    Ejecutado_Mensual = 0
  }

  //Se calculan los porcentajes mensuales
  let percentaje
  if (
    !Number.isNaN(
      Ejecutado_Mensual * 100 / Programado_Mensual
    )
  ) {
    percentaje = (
      Ejecutado_Mensual * 100 / Programado_Mensual
    ).toFixed(0);
  } else {
    percentaje = "-";
  }


  let quantity = [Ejecutado_Mensual, Programado_Mensual - Ejecutado_Mensual]

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

  //En caso de no haber ningun dato, crea una serie color gris
  data.datasets.forEach((dataset) => {
    if (data.datasets[0].data.every((el) => el === 0)) {
      data.datasets[0].backgroundColor.push("rgba(240,240,240,1)");
      data.datasets[0].data.push(1);
    }
  });

  //  TOTAL PREVISTO AL MES EN CURSO
  let Planificado_Anual = list.Inicio_Programado_Acumulado
  if (Planificado_Anual) {
    let nume
    Planificado_Anual = Planificado_Anual.filter((Planificado_Anual) => {
      nume = Planificado_Anual.Inicio_program_Mes
      return (nume <= config.Mes)
    })
    Planificado_Anual = Planificado_Anual.reduce((a, b) => a + (b["Count"] || 0), 0)
  }

  // TOTAL ANUAL PREVISTO
  let Total_Anual = TotalAnual[0][config.Cl_actividad_PM];

  // TOTAL ANUAL EJECUTADO
  let Ejecutado_Anual = 0;
  if (datos) {
    datos = list.Fecha_Referencia_Anual;
    //Se extraen los labels
    let cant = datos.filter((datos) => {
      return (datos.Status === "CTEC")
    })[0]
    if (cant) {
      Ejecutado_Anual = cant.Count
    } else {
      Ejecutado_Anual = 0
    }
  }


  let percentajeBar = (Ejecutado_Anual * 100) / Total_Anual;
  let percentajeNow = (Planificado_Anual * 100) / Total_Anual;

  return (
    <>
      <Divider light style={{ width: "100%" }} />
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
          <Divider light style={{ width: "100%" }} />
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
            style={{ paddingBottom: "0px", fontSize: "0.7em" }}
          >
            PROGRAMADAS: {Programado_Mensual}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
            style={{ paddingBottom: "0px", fontSize: "0.7em" }}
          >
            INTERVENIDAS: {Ejecutado_Mensual}
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
      <Divider light style={{ width: "100%" }} />

      {config.Mostrar_Anual === "true" &&
        <Container>
          <Typography
            variant="body1"
            color="text.secondary"
            component="div"
            style={{ paddingTop: "1em", fontSize: "1.2em" }}
          >
            Anual
          </Typography>
          <Divider light style={{ width: "37%" }} /> 
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
            PROGRAMADAS: {Total_Anual}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
            style={{ paddingBottom: "0px", fontSize: "0.7em" }}
          > 
            PREVISTAS: {Planificado_Anual}
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            component="div"
            style={{ paddingBottom: "0px", fontSize: "0.7em" }}
          >
            INTERVENIDAS: {Ejecutado_Anual}
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
      }
      <Divider light style={{ width: "100%" }} />
    </>
  );
}

export default BigPieChartCard;
