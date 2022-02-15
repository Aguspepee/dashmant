import React from "react";
import { useEffect, useContext } from "react";
import { Card } from "@mui/material";
import "./gridstyle.css";

import LineAcumChartCard from "../Cards/LineAcumChartCard";




import { CardContent } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import "./gridstyle.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import FilterContext from "../../Context/FilterContext";

function SectionLineChartContainer(props) {
  const [
    pieChartData,
        setPieChartData,
        year,
        setYear,
        handleYearChange,
        month,
        setMonth,
        handleMonthChange,
        dataBruta,
        setDataBruta,
        dataNormalizada,
        setDataNormalizada,
        dataFiltrada,
        setDataFiltada,
        normalizeData,
        filterDataByVarious,
        filterDataByDate
  ] = useContext(FilterContext);



  useEffect(() => {

  }, []);

  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        <Card style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <CardContent>
            <CardHeader
              action={
                <IconButton aria-label="settings" >
                  <MoreVertIcon />
                </IconButton>
              }
              title="Hola"
              subheader="Claro"
            />
            <div className="gridline">
            <LineAcumChartCard></LineAcumChartCard>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
export default SectionLineChartContainer;