import React from "react";
import { useEffect, useContext } from "react";
import BigDistributionCard from "../Cards/BigDistributionCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./gridstyle.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import FilterContext from "../../Context/FilterContext";
import hoursCalc from "../../Services/hoursCalc";

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

function SectionDistributionContainer(props) {
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
  const filters = props.filters;
  const description = props.description;
  const zone = props.zone;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {};

  useEffect(() => {
    filterDataRealByDate();
  }, [dataBaseEstaciones, month, year]);

  //let calcularAcumulado = false;
  //let dataPie = filterData(activity, dataRealMonth, dataProgMonth, filters, calcularAcumulado);
  let dataPie = hoursCalc(dataRealMonth);
  dataPie = dataPie.filter((dataPie)=>{return(dataPie.Zona===zone)});
  //console.log("PIE",dataPie)

  return (
    <>
      <div style={{ padding: "1em 1em 1em 1em"}}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" , 
        //backgroundColor:"rgba(0, 0, 0, 0.0)"
        }}>
          <CardContent>
            <CardHeader
            style={{height:"120px"}}
              action={
                <IconButton aria-label="settings" onClick={handleExpandClick1}
                  
                  >
                  <MoreVertIcon />
                </IconButton>
              }
              title={title}
              subheader={description}
              
            />
            <div className="singlepie" >
              {dataPie.map((dataPie, index) => (
                <div className="grid-column" key={dataPie.Zona}>
                  <BigDistributionCard
                    dataPie={dataPie}
                  ></BigDistributionCard>
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
              <div className="singlepie">
                {dataPie.map((dataPie, index) => (
                  <div className="grid-column" key={dataPie.Zona}>
                  </div>
                ))}
              </div>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
}
export default SectionDistributionContainer;
