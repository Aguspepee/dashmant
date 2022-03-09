import React from "react";
import { useEffect, useContext } from "react";
import MiniPieChartCart from "../Cards/MiniPieChartCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListTableCard from "../Cards/ListTableCard";
import "./gridstyle.css";
import filterData from "../../Services/estaciones";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import FilterContext from "../../Context/FilterContext";
import axios from 'axios';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const SectionMultiPieContainer = React.memo(function SectionMultiPieContainer(props) {
  const [
    filterDataProgByDate,
    filterDataRealByDate,
    year,
    setYear,
    handleYearChange,
    month,
    setMonth,
    handleMonthChange,
    dataBaseEstaciones,
    setDataBaseEstaciones,
    dataProgMonth,
    setDataProgMonth,
    dataProgYear,
    setDataProgYear,
    dataRealMonth,
    setDataRealMonth,
    dataRealYear,
    setDataRealYear,
  ] = useContext(FilterContext);

  const [expanded, setExpanded] = React.useState(false);
  const activity = props.activity;
  const title = props.title;
  const bar = props.bar;
  const filters = props.filters;
  const description = props.description;
  const Month = props.Month;
  const Year = props.Year;
  const Cl_actividad_PM = props.Cl_actividad_PM;
  const Clase_de_orden = props.Clase_de_orden;
  const Pto_tbjo_resp = "ZN1 ETRA,ZN2 ETRA";
  const Texto_breve = props.Texto_breve;

  const Operacion = props.Operacion
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => { };

  useEffect(() => {
    filterDataRealByDate();
  }, [dataBaseEstaciones, month, year]);

  function uploadFiles(Zona) {
    axios.get(`http://localhost:9000/saps/filterGeneral/${Month}-${Year}-${Cl_actividad_PM}-${Clase_de_orden}-${Zona}-${Texto_breve}-${Pto_tbjo_resp}-${Operacion}`)
      .then(res => {
        const results = res.data;
        console.log("Results", results)
      })
  }
  let zonas = [{ "Zona": "ZN1" },
  { "Zona": "ZS1" },
  { "Zona": "ZO1" },
  { "Zona": "ZA1" }]

  zonas.map((zonas, index) => { uploadFiles(zonas.Zona) })

  //uploadFiles(Zona)

  let calcularAcumulado = false;
  let dataPie = filterData(activity, dataRealMonth, dataProgMonth, filters, calcularAcumulado);
  calcularAcumulado = true;
  let dataBar = filterData(activity, dataRealYear, dataProgYear, filters, calcularAcumulado);
  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
          <CardContent>
            <CardHeader
              action={
                <IconButton aria-label="settings" onClick={handleExpandClick1}>
                  <MoreVertIcon />
                </IconButton>
              }
              title={title}
              subheader={description}

            />
            <div className="gridpie">
              {dataPie.map((dataPie, index) => (
                <div className="grid-column" key={dataPie.Zona}>
                  <MiniPieChartCart
                    dataPie={dataPie}
                    dataBar={dataBar[index]}
                    bar={bar}
                  ></MiniPieChartCart>
                </div>
              ))}
            </div>
          </CardContent>
          <CardActions disableSpacing style={{ padding: "0px 0px 0px 0px" }}>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div className="gridpie">
                {dataPie.map((dataPie, index) => (
                  <div className="grid-column" key={dataPie.Zona}>
                    <ListTableCard
                      data={dataPie}
                      dataBar={dataBar[index]}
                    ></ListTableCard>
                  </div>
                ))}
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
})
export default SectionMultiPieContainer;
