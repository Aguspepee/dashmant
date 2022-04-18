import React, { useEffect, useState } from "react";
import { resumenAnual } from "../../Services/sapBaseService";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "../Containers/gridstyle.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);



function LineAcumChartCard(props) {
  //Extrae las propiedades, configuración y titulos
  const zona = props.zona;
  const config = props.config;
  //Setea los estados
  const [list, setList] = useState([]);

  useEffect(() => {
    const update = async () => {
      try {
        const res = await resumenAnual(config, zona)
        setList(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    update();
  }, [setList, config.Mes, config.Año, zona]);


  const labels = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun", "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];
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
  let baseLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  baseLabels = baseLabels.slice(0,Number(config.Mes))
  //Se extraen los labels
  let quantity1 = []
  let quantity2 = []
  let datos = list.Fecha_Referencia_Acumulado_Total;
  if (datos) {
    quantity1 = baseLabels.map((baseLabels, index) => {
      let cant = datos.filter((datos) => {
        return (datos.Inicio_program_Mes === baseLabels)
      })[0]
      if (cant) {
        cant = cant.Count
      } else {
        cant = 0
      }
      return (
        cant
      )
    })
  }

  for (let i = 1; i < quantity1.length; i++) {
    if (quantity1[i] !== null) { quantity1[i] = quantity1[i] + quantity1[i - 1] }
  }



  datos = list.Fecha_Referencia_Acumulado_Ejecutado
  if (datos) {
    quantity2 = baseLabels.map((baseLabels, index) => {
      let cant = datos.filter((datos) => {
        return (datos.Inicio_program_Mes === baseLabels)
      })[0]
      if (cant) {
        cant = cant.Count
      } else {
        cant = null
      }
      return (
        cant
      )
    })
  }
  for (let i = 1; i < quantity2.length; i++) {
    if (quantity2[i] !== null) { quantity2[i] = quantity2[i] + quantity2[i - 1] }
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Programado",
        data: quantity1,
        borderColor: "#BDE7BD",
        backgroundColor: "#BDE7BD",
        fill: false,
      },
      {
        label: "Ejecutado",
        data: quantity2,
        borderColor: "#FF6962",
        backgroundColor: "#FF6962",
        fill: false,
      },
    ],
  };

  return (
    <div className="lineChart" style={{ padding: "0em 0em 0em 0em", width: '100%'}}>

      <Line options={options} data={data} />
    </div>
  );
}

export default LineAcumChartCard;
