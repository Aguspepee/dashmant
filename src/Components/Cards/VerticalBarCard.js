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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function VerticalBarCard(props) {
    const list = props.list.Lineas
    let max = props.max
    
    const options = {
        plugins: {

            title: {
                display: false,
                text: 'Chart.js Bar Chart - Stacked',
            },
            legend: {
                display: false,
            },
            axes: {
                display: false,
            },
        },
        maintainAspectRatio: false,
        indexAxis: 'y',
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
                    text: 'Piquetes programados anuales'
                },
                grid: {
                    display: false
                },
                scaleLabel: {
                    display: true
                },
                ticks: {
                    display: true // it should work
                }
            },
            y: {
                stacked: true,
                title: {

                    display: false,
                    text: 'Líneas'
                },
                grid: {
                    display: false
                },
                scaleLabel: {
                    display: true
                },
                ticks: {
                    display: true // it should work
                }
            },
        },
    };

    let labels = []
    let ejecutado = []
    let previsto = []
    let factor = props.factor
    if (list) {
        list.map((list, index) => { labels[index] = list.Codigo_Completo })
        list.map((list, index) => { ejecutado[index] = list.Torres_Inspeccionadas })
        list.map((list, index) => { previsto[index] = list.Torres_Cantidad * factor })
    }
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
        heightChart = (labels.length * 140 + "px")
    } else if (labels.length <= 2) {
        heightChart = (labels.length * 66 + "px")
    } else if (labels.length <= 7) {
        heightChart = (labels.length * 45 + "px")
    } else {
        heightChart = (labels.length * 25 + "px")
    }
    // console.log(heightChart)
    return (
        <>

            <CardContent style={{ width: "100%", height: heightChart, paddingLeft: "0px" }}>
                <Bar options={options} data={data} />
            </CardContent>
        </>
    )
}

export default VerticalBarCard