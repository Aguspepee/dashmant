import React from "react";
import { useEffect, useContext } from "react";
import { Card } from "@mui/material";
import filterLines from "../../Services/lineas";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import MultiBarChartCard from "../Cards/MultiBarChartCard";
import FilterContext from "../../Context/FilterContext";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import MiniLinePieCard from "../Cards/MiniLinePieCard";

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

function SectionMultiBarContainer(props) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
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

  //Cálculo de día del año
  const year1 = year.toString();
  const title = props.title;
  const description = props.description;
  const detail = props.detail;
  const lineas = filterLines(year, month);
  let dataPie = lineas
  let dataBar = lineas
  //console.log("Lineas", lineas);
  let actividad = props.activity;

  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        <Card
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            //padding: "20px 20px 20px 20px ",
          }}
        >
          <CardContent>
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={title}
              subheader={description}
            />
            <div style={{ padding: "0em 0em 1em 0em" }}>
              <div className="gridpie">
                {dataPie.map((dataPie, index) => (
                  <div className="grid-column" key={dataPie.Zona}>
                    <MiniLinePieCard
                      dataPie={dataPie}
                      dataBar={dataBar[index]}
                      detail={detail}
                      bar="true"
                    ></MiniLinePieCard>
                  </div>
                ))}
              </div>
            </div>

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
                  {lineas.map((lineas, index) => (
                    <MultiBarChartCard
                      key={lineas["Grupo planif."]}
                      lineas={lineas}
                      detail={detail}
                      actividad={actividad}
                      year={year}
                    ></MultiBarChartCard>
                  ))}
                </div>
              </CardContent>
            </Collapse>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SectionMultiBarContainer;
