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
import MultiBarChartCard from "../Cards/MultiBarChartCard";

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

function SectionMultiPieContainer(props) {
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
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {};

  useEffect(() => {
    filterDataRealByDate();
  }, [dataBaseEstaciones, month, year]);

  let calcularAcumulado = false;
  let dataPie = filterData(activity, dataRealMonth, dataProgMonth, filters, calcularAcumulado);
  //console.log("PIE",dataPie)
  calcularAcumulado = true;
  let dataBar = filterData(activity, dataRealYear, dataProgYear, filters, calcularAcumulado);
  //console.log("BAR",dataBar)
  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        
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
          
      </div>
    </>
  );
}
export default SectionMultiPieContainer;
