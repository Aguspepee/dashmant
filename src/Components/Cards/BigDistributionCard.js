import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Typography from "@mui/material/Typography";
import "./animation.css";
import Divider from "@mui/material/Divider";
import { CardContent } from "@mui/material";
import {
  distribucionHoraria,
  horasPlanificadas,
} from "../../Services/sapBaseService";
ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    legend: {
      display: true,
      align: "start",
    },
    labels: {
      render: "percentage",
      precision: 2,
    },
  },
};

function BigDistributionCard(props) {
  //----- CATEGORÍAS INDIVIDUALES----.//
  //Extrae las propiedades, configuración y titulos
  const zona = props.zona;
  const config = props.config;

  //Setea los estados
  const [list, setList] = useState([]);
  const [horas, setHoras] = useState([]);

  //Previo a renderizar el componente se consulta la API
  useEffect(() => {
    const update = async () => {
      //Se crea una promesa compuesta
      const res2 = await horasPlanificadas(config, zona);
      const res1 = await distribucionHoraria(config, zona);
      const getPromises = [res1, res2];
      const getResponses = Promise.all(getPromises);
      try {
        const resultados = await getResponses;
        setList(resultados[0].data.Distribucion);
        setHoras(resultados[1].data.Horas);
      } catch (e) {
        console.log(e);
      }
    };
    update();
  }, [setList, config.Mes, config.Año, zona]);
console.log(horas)
  //Se inicializan los labels y las cantidades
  let quantity;
  let labels = [
    "Mantenimiento Programado",
    "Mantenimiento Correctivo",
    "Recorridos de Seguridad Público",
    "Mantenimiento Preventivo No Programado",
    "Servicios a Terceros",
    "Actividades Complementarias",
    "Horas no informadas",
  ];

  //Se calculan las cantidades (quantity)
  let datos = list;
  if (datos) {
    quantity = labels.map((labels, index) => {
      let cant = datos.filter((datos) => {
        return datos.Grupo_Agrupamiento === labels;
      })[0];
      if (cant) {
        cant = cant.Count;
      } else {
        cant = 0;
      }
      return cant;
    });
  }

  //Se calcula el total
  const reducer = (accumulator, curr) => accumulator + curr;
  let total = quantity.reduce(reducer);

  let horasNoContempladas = horas - total;
  quantity[6] = horasNoContempladas < 0 ? 0 : horasNoContempladas;

  //Se inicializa el gráfico
  const data = {
    labels: labels,
    datasets: [
      {
        data: quantity,
        backgroundColor: [
          "#7eb0d5",
          "#b2e061",
          "#bd7ebe",
          "#ffb55a",
          "#ffee65",
          "#beb9db",
          "#bababa", //horas no informadas
          "#fdcce5",
          "#8bd3c7",
        ],
        borderColor: [
          "#7eb0d5",
          "#b2e061",
          "#bd7ebe",
          "#ffb55a",
          "#ffee65",
          "#beb9db",
          "#bababa", //horas no informadas
          "#fdcce5",
          "#8bd3c7",
        ],
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

  return (
    <>
      <div className="BigDistri" style={{ paddingBottom: "1em" }}>
        <CardContent>
          <Doughnut data={data} options={options} />
        </CardContent>
        <CardContent>
          <Divider light style={{ width: "100%" }} />
          <Typography
            variant="body1"
            color="text.primary"
            component="div"
            style={{
              fontSize: "0.8em",
              paddingLeft: "2em",
              paddingBottom: "0px",
            }}
          >
            HH Informadas: {total}
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            component="div"
            style={{
              fontSize: "0.8em",
              paddingLeft: "2em",
              paddingBottom: "0px",
            }}
          >
            HH mínimas no Informadas: {horas - total}
          </Typography>
          <Typography
            variant="body1"
            color="text.primary"
            component="div"
            style={{
              fontSize: "0.8em",
              paddingLeft: "2em",
              paddingBottom: "0px",
            }}
          >
            HH mínimas esperadas: {horas}
          </Typography>
          <Divider light style={{ width: "100%" }} />
        </CardContent>
      </div>
    </>
  );
}

export default BigDistributionCard;
