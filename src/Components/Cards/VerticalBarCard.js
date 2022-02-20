import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { CardContent } from "@mui/material";
import { height } from '@mui/system';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked',
        },
    },
    maintainAspectRatio: false,
    indexAxis: 'y',
    //barThickness: "10",
    barPercentage: 0.6,

    responsive: true,
    scales: {
        x: {
            stacked: true,
            min: 0,
            //max: 200,
        },
        y: {
            stacked: true,
        },
    },
};



function VerticalBarCard(props) {
    let dataLines = props.data
    dataLines = dataLines.filter((dataLines) => {
        return (dataLines["Ejecutado Minuciosa"] !== 0)
    })
    console.log("lineas", dataLines)

    let labels = []
    let ejecutado = []
    let previsto = []
    let factor = 0.5
    dataLines.map((dataLines, index) => { labels[index] = dataLines["Código"] })
    dataLines.map((dataLines, index) => { ejecutado[index] = dataLines["Ejecutado Minuciosa"] })
    dataLines.map((dataLines, index) => { previsto[index] = dataLines["Torres Cantidad"] * factor - dataLines["Ejecutado Minuciosa"] })

    const data = {
        labels,
        datasets: [
            {
                label: ["Ejecutado"],
                data: ejecutado,
                backgroundColor: '#BDE7BD',
            },
            {
                label: ["Sin ejecutar"],
                data: (previsto),
                backgroundColor: '#FF6962',
            },
        ],
    };

    //Setea la altura de cada bloque de barras. 
    //Para una cantidad de barras menor a 4, debe setearse una por una
    let heightChart
    if (labels.length === 0) {
        heightChart = (140 + "px")
    } else if (labels.length <= 1) {
        heightChart = (labels.length * 130 + "px")
    } else if (labels.length <= 2) {
        heightChart = (labels.length * 70 + "px")
    } else if (labels.length <= 7) {
        heightChart = (labels.length * 60 + "px")
    } else {
        heightChart = (labels.length * 50 + "px")
    }

    console.log(heightChart)


    return (
        <CardContent style={{ width: "100%", height: heightChart }}>
            <Bar options={options} data={data} />
        </CardContent>
    )



}

export default VerticalBarCard