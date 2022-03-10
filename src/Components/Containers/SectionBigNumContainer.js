import React from "react";
import BigNumberCard from "../Cards/BigNumberCard";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import filterData from "../../Services/estaciones";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import { useEffect, useContext } from "react";
import FilterContext from "../../Context/FilterContext";

function SectionBigNumContainer(props) {
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
  const activity = props.activity;
  const title = props.title;
  const description = props.description;
  const filters = props.filters;
  const zone = props.zone;

  useEffect(() => {
    filterDataRealByDate();
  }, [dataBaseEstaciones, month, year]);

  //Hacer que sea un estado
  let calcularAcumulado = true;
  let data = filterData(activity, dataRealMonth, dataProgMonth, filters, calcularAcumulado);
  data = data.filter((data)=>{return(data.Zona===zone)});

  return (
    <>
      <div style={{ padding: "1em 1em 1em 1em"}}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
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
            <div className="gridnumber" style={{alignItems:"center",justifyItems: "center"}}>
              {data.map((data) => (
                <div className="grid-column" key={data.Zona} style={{alignItems:"center",justifyItems: "center"}}>
                  <BigNumberCard data={data}></BigNumberCard>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default SectionBigNumContainer;
