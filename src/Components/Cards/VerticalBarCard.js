import React,{ useContext } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CardContent } from "@mui/material";
import DateContext from "../../Context/DateContext";


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function VerticalBarCard(props) {
  const [year, setYear, month, setMonth] = useContext(DateContext);
  const list = props.list.Lineas;
  let max = props.max;

  const options = {
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      legend: {
        display: false,
      },
      axes: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    indexAxis: "y",
    //barThickness: "10",
    barPercentage: 1,

    responsive: true,
    scales: {
      x: {
        stacked: true,
        min: 0,
        max: max,
        title: {
          display: true,
          text: "Piquetes programados anuales",
        },
        grid: {
          display: false,
        },
        scaleLabel: {
          display: true,
        },
        ticks: {
          display: true, // it should work
        },
      },
      y: {
        stacked: true,
        title: {
          display: false,
          text: "Líneas",
        },
        grid: {
          display: false,
        },
        scaleLabel: {
          display: true,
        },
        ticks: {
          display: true, // it should work
        },
      },
    },
  };

  let labels = [];
  let ejecutado = [];
  let faltante_mensual = [];
  let faltante_anual = [];
  let factor = props.factor;
  if (list) {
    labels = list.map((list, index) => {
      return list.Codigo_Completo;
    });
    ejecutado = list.map((list, index) => {
      return list.Torres_Inspeccionadas;
    });
    faltante_mensual = list.map((list, index) => {
      return list.Torres_Cantidad * factor * (month/12) - ejecutado[index]
    });
    faltante_anual = list.map((list, index) => {
      return list.Torres_Cantidad * factor - ejecutado[index] - faltante_mensual[index]
    });
  }
  const data = {
    labels,
    datasets: [
      {
        label: ["Ejecutado"],
        data: ejecutado,
        backgroundColor: "#BDE7BD",
      },
      {
        label: ["Mensual faltante"],
        data: faltante_mensual,
        backgroundColor: "#FF6962",
      },
      {
        label: ["Anual faltante"],
        data: faltante_anual,
        backgroundColor: "#EBECF0",
      },
    ],
  };

  //Setea la altura de cada bloque de barras.
  //Para una cantidad de barras menor a 4, debe setearse una por una
  let heightChart;
  if (labels.length === 0) {
    heightChart = 140 + "px";
  } else if (labels.length <= 1) {
    heightChart = labels.length * 140 + "px";
  } else if (labels.length <= 3) {
    heightChart = labels.length * 70 + "px";
  } else if (labels.length <= 7) {
    heightChart = labels.length * 45 + "px";
  } else {
    heightChart = labels.length * 25 + "px";
  }
  // console.log(heightChart)
  return (
    <>
      <CardContent
        style={{ width: "100%", height: heightChart, paddingLeft: "0px" }}
      >
        <Bar options={options} data={data} />
      </CardContent>
    </>
  );
}

export default VerticalBarCard;
