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

const labels = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun", "Jul.","Ago.","Sep.", "Oct.","Nov.", "Dic."];


export const data = {
  labels,
  datasets: [
    {
      label: "Previsto",
      data: [0, 4, 6, 8, 9, 14, 15,16,18,20,21,23],
      borderColor: "#BDE7BD",
      backgroundColor: "#BDE7BD",
      fill: false,
    },
    {
      label: "Ejecutado",
      data: [0, 5, 7, 9, 13, 15, 15,16,20,22,27,28 ],
      borderColor: "#FF6962",
      backgroundColor: "#FF6962",
      fill: false,
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
