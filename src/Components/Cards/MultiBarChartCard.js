import React from "react";
import MiniBarChartCard from "../Cards/MiniBarChartCard";
import { Card, CardContent } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import filterLines from "../../Services/lineas";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import VerticalBarCard from "./VerticalBarCard";

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

function MultiBarChartCard(props) {
  //Cálculo de día del año

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let now = new Date();
  let start = new Date(now.getFullYear(), 0, 0);
  let diff = now - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);

  const year = props.year;

  const detail = props.detail;
  //const lineas = filterLines(year);
  const lineas = props.lineas;
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
      <div key={lineas["Grupo planif."]}>
        <Typography
          variant="button"
          color="text.primary"
          component="div"
          style={{
            fontSize: "1.4em",
            paddingLeft: "0.3em",
            paddingBottom: "0px",
          }}
        >
          {lineas["Zona"]}
        </Typography>
        {/* <CardContent style={{ width: "100%"}}> */}
          <VerticalBarCard data={lineas["Line"]} detail={detail}/>
       {/*  </CardContent> */}
        <CardActions disableSpacing>
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
          <TableContainer
            component={Paper}
            style={{ boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px" }}
          >
            <Table sx={{}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell align="left">Piquetes Totales</TableCell>
                  <TableCell align="right">Piquetes Programados</TableCell>
                  <TableCell align="right">Piquetes Intervenidos</TableCell>
                  <TableCell align="right">Ejecutado</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lineas["Line"].map((lineas) => (
                  <TableRow
                    key={lineas["Código"]}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row" width="10%">
                      <Typography
                        variant="button"
                        color="text.primary"
                        component="div"
                        style={{
                          fontSize: "1em",
                          paddingLeft: "0em",
                          paddingBottom: "0px",
                        }}
                      >
                        {lineas["Código"]}
                      </Typography>


                    </TableCell>
                    <TableCell width="4%" align="left">
                      <Typography
                        variant="button"
                        color="text.primary"
                        component="div"
                        style={{
                          fontSize: "1em",
                          paddingLeft: "0em",
                          paddingBottom: "0px",
                        }}
                      >
                        {Math.round(lineas["Torres Cantidad"])}
                      </Typography>

                    </TableCell>
                    <TableCell width="5%" align="right">
                      {Math.round(
                        (lineas["Torres Cantidad"] * day) / (365 * factor)
                      )}
                    </TableCell>
                    <TableCell width="5%" align="right">
                      {Math.round(lineas[detail])}
                    </TableCell>
                    <TableCell width="80%" align="right">
                      <MiniBarChartCard
                        percentaje={Math.round(
                          (lineas[detail] * 100) /
                          (lineas["Torres Cantidad"] * factor)
                        )}
                        percentajeNow={(day * 100) / (365 * factor)}
                      ></MiniBarChartCard>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Collapse>
      </div>
    </>
  );
}

export default MultiBarChartCard;
