import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';








function createData(name, calories, fat, carbs, protein, sdfsdf, sdfsdfs, sdfsddfs) {
  return { name, calories, fat, carbs, protein, sdfsdf, sdfsdfs, sdfsddfs };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 159, 6.0, 24, 4.0, 6.0, 24, 4.0),
  createData('Eclair', 159, 6.0, 24, 4.0, 6.0, 24, 4.0),
  createData('Cupcake', 159, 6.0, 24, 4.0, 6.0, 24, 4.0),
  createData('Gingerbread', 159, 6.0, 24, 4.0, 6.0, 24, 4.0),
];

export default function Tabla() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>


         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" >{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.sdfsdf}</TableCell>
              <TableCell align="right">{row.sdfsdfs}</TableCell>
              <TableCell align="right">{row.sdfsddfs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}