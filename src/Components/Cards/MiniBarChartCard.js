import * as React from "react";
//import PropTypes from "prop-types";
//import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//import LinearProgress from "@mui/material/LinearProgress";
import { ProgressBar } from "react-bootstrap";

export default function MiniBarChartCard(props) {
  let percentaje;
  let percentajeNow = props.percentajeNow;

  if (Number.isNaN(props.percentaje)) {
    percentaje = 0;
  } else {
    percentaje = Math.round(props.percentaje);
  }

  return (
    <Box direction="row" sx={{ width: "100%" }}>
      <ProgressBar style={{width:"90%"}}>
        <ProgressBar striped now={percentaje}  key={1} style={{backgroundColor:"#2c3e50"}}/>
        <ProgressBar animated now={percentajeNow-percentaje} key={2} style={{backgroundColor:"#bbbbbb"}}/>
      </ProgressBar>{percentaje}%
    </Box>
  );
}
