import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function MiniNumberCard(props) {
  const dataList = props.data;
  //Se obtienen los labels
  let labels = [];
  for (let i = 0; i < dataList.Lista.length; i++) {
    labels.push(dataList.Lista[i].Tipo);
  }
  //Se obtienen los datos
  let quantity = [];
  for (let i = 0; i < dataList.Lista.length; i++) {
    quantity.push(dataList.Lista[i].Cantidad);
  }

  return (
    <>
      <Card
        sx={{
          display: "flex",
          border: "0px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0px 0px 0px white",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="button"
              color="text.primary"
              component="div"
              style={{
                fontSize: "1.2em",
                paddingLeft: "0.8em",
                paddingBottom: "0px",
              }}
            >
              {dataList.ZonaNombre}
            </Typography>
            <Typography
              component="div"
              variant="h5"
              align="center"
              style={{ fontSize: "3em" }}
            >
              {quantity[1] + quantity[0]}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              align="center"
              style={{ fontSize: "0.8em" }}
            >
              Ejecutados
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}

export default MiniNumberCard;
