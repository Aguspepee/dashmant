import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function BasicTable(props) {
  const dataList = props.data;

  function createData(name, calories) {
    return { name, calories };
  }

  const rows = [
    createData(dataList.Lista[0].Tipo, dataList.Lista[0].Cantidad),
    createData(dataList.Lista[1].Tipo, dataList.Lista[1].Cantidad),
    createData(dataList.Lista[2].Tipo, dataList.Lista[2].Cantidad),
  ];

  return (
    <TableContainer
      component={Paper}
      style={{ boxShadow: "0px 0px 0px white", width: "90%" }}
    >
      <Typography
        variant="button"
        color="text.primary"
        component="div"
        style={{
          fontSize: "1.4em",
          paddingLeft: "0.8em",
          paddingBottom: "0px",
        }}
      >
        {dataList.ZonaNombre}
      </Typography>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tipo</TableCell>
            <TableCell align="right">Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
