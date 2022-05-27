import React, { useEffect,useState } from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { resumenSap } from "../../Services/sapBaseService";
import { Datos_Gestion, Datos_Columnas } from "../../Utils/Datos_Gestion";

//import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps({
                  style: {
                    fontSize: "12px",
                    textAlign: "center",
                    backgroundColor: "gray",
                  },
                })}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps({
                      style: {
                        fontWeight: cell.column.fontWeight,
                        fontSize: cell.column.fontSize,
                        minWidth: cell.column.minWidth,
                        textAlign: "center",
                        width: cell.column.width,
                        backgroundColor: cell.column.backgroundColor,
                      },
                    })}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function Tabla() {
  const columns = Datos_Columnas;
  const [data, setData] = useState(Datos_Gestion);
  const [resumen, setResumen] = useState([])

  useEffect(() => {
    const update = async () => {
      //Se crea una promesa compuesta
      try {
        const res = await resumenSap();
        if (res){
        for (let i = 1; i < 5; i++) {
          for (let j = 1; j < 13; j++) {
            res.data[1][`G_${j}`] = resumen?.gestion_aceites_generadas ? resumen?.gestion_aceites_generadas[j]?.ZN : 0;
            res.data[1][`C_${j}`] = resumen?.gestion_aceites_cerradas ? resumen?.gestion_aceites_cerradas[j]?.ZN : 0;
            res.data[2][`G_${j}`] = resumen?.gestion_aceites_generadas ? resumen?.gestion_aceites_generadas[j]?.ZS : 0;
            res.data[2][`C_${j}`] = resumen?.gestion_aceites_cerradas ? resumen?.gestion_aceites_cerradas[j]?.ZS : 0;
          }
        }}
        console.log("resultado",res)
        setResumen(res);
      } catch (e) {
        console.log(e);
      }
    };
    update();
  }, []);
  console.log(resumen)
  // Gestión de aceites
  
  console.log(data);
  return (
    <Styles>
      <h5>Ordenes de Trabajo Gestionadas por SAP</h5>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default Tabla;
