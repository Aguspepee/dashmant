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

import Card from "@mui/material/Card";

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
  //  width: 10,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
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
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      fill: true,
    },
    {
      label: "Ejecutado",
      data: [0, 5, 7, 8, 10, 15, 16],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      fill: true,
    },
  ],
};

function LineAcumChartCard() {
  return (
    <div className="gridlinear" >
      <div style={{ width: "100%" }}>
        <Card
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <Line options={options} data={data} />
        </Card>
      </div>
      <div style={{ width: "100%" }}>
        <Card
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <Line options={options} data={data} />
        </Card>
      </div>
    </div>
  );
}

export default LineAcumChartCard;
