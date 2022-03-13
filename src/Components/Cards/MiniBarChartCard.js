import * as React from "react";
//import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//import LinearProgress from "@mui/material/LinearProgress";
import { ProgressBar } from "react-bootstrap";

export default function MiniBarChartCard(props) {
  let percentaje1;
  let percentaje2;
  let percentajeNow = props.percentajeNow;

  if (Number.isNaN(props.percentaje)) {
    percentaje1 = 0;
  } else {
    percentaje1 = Math.round(props.percentaje);
  }

  if (percentajeNow - percentaje1 > 0) {
    percentaje2 = percentajeNow - percentaje1;
  } else {
    percentaje2 = 0;
  }

  return (
    <>
      <Box sx={{ width: "90%", display: "inline-flex",paddingTop:"5px"}}>
        <ProgressBar style={{ width: "100%" }}>
          <ProgressBar
            
            now={percentaje1}
            key={1}
            style={{ backgroundColor: "#BDE7BD" }}
          />
          <ProgressBar
            
            now={percentaje2}
            key={2}
            style={{ backgroundColor: "#FF6962" }}
          />
        </ProgressBar>
      </Box>
    </>
  );
}
