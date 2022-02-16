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
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];


export const data = {
  labels,
  datasets: [
    {
      label: "Previsto",
      data: [0, 4, 6, 8, 9, 14, 15],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 1",
      fill: true,
    },
    {
      label: "Ejecutado",
      data: [0, 5, 7, 9, 13, 15, 15],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 1)",
      fill: true,
    },
  ],
};

function LineAcumChartCard() {
  return (
    <div style={{padding:"1em 1em 1em 1em", height:'200px',width:'100%'}}>
      <Line options={options} data={data}/>
    </div>
  );
}

export default LineAcumChartCard;
