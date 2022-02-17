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

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Ejecución de UM Acumulada",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July",];


export const data = {
  labels,
  datasets: [
    {
      label: "Previsto",
      data: [0, 4, 6, 8, 9, 14, 15],
      borderColor: "#BDE7BD",
      backgroundColor: "#BDE7BD",
      fill: true,
    },
    {
      label: "Ejecutado",
      data: [0, 5, 7, 9, 13, 15, 15],
      borderColor: "#FF6962",
      backgroundColor: "#FF6962",
      fill: true,
    },
  ],
};

function LineAcumChartCard() {
  return (
    <div style={{padding:"0em 0em 0em 0em", height:'230px',width:'100%'}}>
      <Line options={options} data={data}/>
    </div>
  );
}

export default LineAcumChartCard;
