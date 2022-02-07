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
import { Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat };
}

const rows = [
  createData("Frozen yoghurt", 50, 6.0),
  createData("Ice cream sandwich", 37, 9.0),
  createData("Eclair", 67, 16.0),
  createData("Cupcake", 78, 3.7),
  createData("Gingerbread", 89, 16.0),
];

function SectionMultiBarContainer(props) {
  const title = props.title;

  return (
    <>
      <div style={{ padding: "0em 0em 1em 0em" }}>
        <Card
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "20px 20px 20px 20px ",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <TableContainer
            component={Paper}
            style={{ boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px" }}
          >
            <Table sx={{}} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Linea MT</TableCell>
                  <TableCell align="right">Total Piquetes</TableCell>
                  <TableCell align="right">Previsto Mensual</TableCell>
                  <TableCell align="right">Ejecutado Mensual</TableCell>
                  <TableCell align="right">Avance</TableCell>
                  <TableCell align="right">[%]</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" width="15%" >
                      {row.name}
                    </TableCell>
                    
                    <TableCell width="10%" align="right">{row.fat}</TableCell>
                    <TableCell width="10%" align="right">{row.fat}</TableCell>
                    <TableCell width="10%" align="right">{row.fat}</TableCell>
                    <TableCell width="45%" align="right">
                      <MiniBarChartCard
                        percentaje={row.calories}
                      ></MiniBarChartCard>
                    </TableCell>
                    <TableCell width="10%" align="right">{row.fat}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </>
  );
}

export default SectionMultiBarContainer;
