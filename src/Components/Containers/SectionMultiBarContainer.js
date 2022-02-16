import React from "react";
import { Card } from "@mui/material";
import filterLines from "../../Services/lineas";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import MultiBarChartCard from "../Cards/MultiBarChartCard"

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
  //Cálculo de día del año

  const year = "2022";
  const title = props.title;
  const description = props.description;
  const detail = props.detail;
  const lineas = filterLines(year);
  const porcentajeAnual = 0.25;
  let actividad = props.activity;
  let factor;
  if ((actividad = "PINT")) {
    factor = 2;
  } else if ((actividad = "PINM")) {
    factor = 0.5;
  }

  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        <Card
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "20px 20px 20px 20px ",
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

            {lineas.map((lineas,index) => (
              <MultiBarChartCard key={lineas["Grupo planif."]} lineas={lineas} detail={detail} actividad={actividad} year={year}></MultiBarChartCard>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SectionMultiBarContainer;
