import React, { useEffect, useState } from "react";
import { resumenAnual } from "../../Services/sapBaseService";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import "../Containers/gridstyle.css";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

function BarAcumChartCard(props) {
  //Extrae las propiedades, configuración y titulos
  const zona = props.zona;
  const config = props.config;
  
  //Setea los estados
  const [list, setList] = useState([]);


  useEffect(() => {
    const update = async () => {
      try {
        const res = await resumenAnual(config, zona);
        setList(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    update();
  }, [setList, config.Mes, config.Año, zona]);

  const labels = [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ];
  let baseLabels = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
  ];

  baseLabels = baseLabels.slice(0,Number(config.Mes))
  
  //Se extraen los labels
  let quantity1 = [];
  let quantity2 = [];

  let datos = list.Fecha_Referencia_Acumulado_Total;
  if (datos) {
    quantity1 = baseLabels.map((baseLabels, index) => {
      let cant = datos.filter((datos) => {
        return datos.Inicio_program_Mes === baseLabels;
      })[0];
      if (cant) {
        cant = cant.Count;
      } else {
        cant = 0;
      }
      return cant;
    });
  }

  datos = list.Fecha_Referencia_Acumulado_Ejecutado;
  if (datos) {
    quantity2 = baseLabels.map((baseLabels, index) => {
      let cant = datos.filter((datos) => {
        return datos.Inicio_program_Mes === baseLabels;
      })[0];
      if (cant) {
        cant = cant.Count;
      } else {
        cant = null;
      }
      return cant;
    });
  }

  const data = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Programado",
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#FFFFFF",
        //borderWidth: 2,
        fill: false,
        data: quantity1,
      },
      {
        type: "bar",
        label: "Ejecutado",
        backgroundColor: "rgb(75, 192, 192)",
        data: quantity2,
        borderColor: "rgb(75, 192, 192)",
       // borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
   maintainAspectRatio: false,
   plugins: {
     legend: {
       display: true
     },
     title: {
       display: false,
       text: "Ejecución de UM Acumulada",
     },
   }, 
};

  return (
    <>
    <div className="lineChart" style={{ padding: "0em 0em 0em 0em", width: '100%'}}>
      <Chart type="bar" data={data} options={options} />
      </div>
    </>
  );
}

export default BarAcumChartCard;
