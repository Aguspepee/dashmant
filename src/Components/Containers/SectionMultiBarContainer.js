import React from "react";
import MiniBarChartCard from "../Cards/MiniBarChartCard";
import { Card } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import filterLines from "../../Services/lineas";
import Range from "../Controls/Range";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { CardContent } from "@mui/material";

function SectionMultiBarContainer(props) {
  const title = props.title;
  const description = props.description;
  const lineas = filterLines(props.activity);
  const porcentajeAnual = 0.25;
  const porcentajeMensual = porcentajeAnual / 12;
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

            <TableContainer
              component={Paper}
              style={{ boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px" }}
            >
              <Table sx={{}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Linea MT</TableCell>
                    <TableCell align="right">Total Piquetes</TableCell>
                    <TableCell align="right">Ejecutado</TableCell>
                    <TableCell align="right">Avance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lineas.map((lineas) => (
                    <TableRow
                      key={lineas["Código"]}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" width="15%">
                        {lineas["Código"]}
                      </TableCell>
                      <TableCell width="10%" align="right">
                        {Math.round(lineas["Torres Cantidad"])}
                      </TableCell>
                      <TableCell width="10%" align="right">
                        {Math.round(lineas["Ejecutado Minuciosa"])}
                      </TableCell>
                      <TableCell width="53%" align="right">
                        <MiniBarChartCard
                          percentaje={Math.round(
                            (lineas["Ejecutado Minuciosa"] * 100) /
                              lineas["Torres Cantidad"]
                          )}
                        ></MiniBarChartCard>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default SectionMultiBarContainer;
