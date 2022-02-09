import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function MiniBarChartCard(props) {
  let percentaje;

  if (Number.isNaN(props.percentaje)) {
    percentaje = 0;
  } else {
    percentaje = props.percentaje;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel
        color="inherit"
        sx={{ height: "12px" }}
        style={{ borderRadius: "6px" }}
        value={percentaje}
      />
    </Box>
  );
}
