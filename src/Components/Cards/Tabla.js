import React, { useEffect } from "react";
import styled from "styled-components";
import { useTable } from "react-table";
import { resumenSap } from "../../Services/sapBaseService";

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

  useEffect(() => {
    const update = async () => {
      //Se crea una promesa compuesta
      try {
        const res = await resumenSap();
        console.log(res.data)
      } catch (e) {
        console.log(e);
      }
    };
    update();
  }, []);


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
  const columns = React.useMemo(
    () => [
      {
        Header: "                ",
        columns: [
          {
            Header: "     ",
            columns: [
              {
                Header: "        ",
                accessor: "Tipo",
                fontSize: "12px",
                fontWeight: "bold",
                minWidth: 110,
                backgroundColor: "gray",
              },
            ],
          },
        ],
      },
      {
        Header: "PERIODO 2020",
        columns: [
          {
            Header: " ",
            columns: [
              {
                Header: "RPM",
                accessor: "RPM_2020",
                fontSize: "12px",
                fontWeight: "bold",
                minWidth: 110,
              },
              {
                Header: "Generadas",
                accessor: "Generadas_2020",
                fontSize: "12px",
                minWidth: 60,
                //backgroundColor: "gray",
              },
              {
                Header: "Cerradas",
                accessor: "Cerradas_2020",
                fontSize: "12px",
                minWidth: 60,
                //backgroundColor: "gray",
              },
            ],
          },
        ],
      },
      {
        Header: "PERIODO 2021",
        columns: [
          {
            Header: "  ",
            columns: [
              {
                Header: "RPM",
                accessor: "RPM_2021",
                fontSize: "12px",
                fontWeight: "bold",
                minWidth: 110,
              },
              {
                Header: "Generadas",
                accessor: "Generadas_2021",
                fontSize: "12px",
                minWidth: 60,
                //backgroundColor: "gray",
              },
              {
                Header: "Cerradas",
                accessor: "Cerradas_2021",
                fontSize: "12px",
                minWidth: 60,
                //backgroundColor: "gray",
              },
            ],
          },
        ],
      },
      {
        Header: "PERIODO 2022",
        columns: [
          {
            Header: "   ",
            columns: [
              {
                Header: "RPM",
                accessor: "RPM_2022",
                fontSize: "12px",
                fontWeight: "bold",
                minWidth: 110,
              },
            ],
          },
          {
            Header: "ene-22",
            columns: [
              {
                Header: "Generadas",
                accessor: "Generadas_2022_ene",
              },
              {
                Header: "Cerradas",
                accessor: "Cerradas_2022_ene",
              },
            ],
          },
          {
            Header: "feb-22",
            columns: [
              {
                Header: "Generadas",
                accessor: "Generadas_2022_feb",
              },
              {
                Header: "Cerradas",
                accessor: "Cerradas_2022_feb",
              },
            ],
          },
          {
            Header: "mar-22",
            columns: [
              {
                Header: "Generadas",
                accessor: "Generadas_2022_mar",
              },
              {
                Header: "Cerradas",
                accessor: "Cerradas_2022_mar",
              },
            ],
          },
          {
            Header: "abr-22",
            columns: [
              {
                Header: "Generadas",
                accessor: "Generadas_2022_abr",
                //maxWidth: 70,
                //minWidth: 130,
                //width: 150,
              },
              {
                Header: "Cerradas",
                accessor: "Cerradas_2022_abr",
              },
            ],
          },
          {
            Header: "may-22",
            columns: [
              {
                Header: "Generadas",
                accessor: "Generadas_2022_may",
              },
              {
                Header: "Cerradas",
                accessor: "Cerradas_2022_may",
              },
            ],
          },
        ],
      },
    ],
    []
  );

  const data = [
    { Tipo: "GESTIÓN DE ACEITES" },
    {
      Tipo: "ZN",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    {
      Tipo: "ZS",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    {
      Tipo: "ZO",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    {
      Tipo: "ZA",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    { Tipo: "MANTENIMIENTO ESTACIONES" },
    {
      Tipo: "ZN",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    {
      Tipo: "ZS",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    {
      Tipo: "ZO",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    {
      Tipo: "ZA",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    { Tipo: "MANTENIMIENTO LÍNEAS" },
    {
      Tipo: "ZN",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    {
      Tipo: "ZS",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    {
      Tipo: "ZO",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
    {
      Tipo: "ZA",
      RPM_2020: "Plan Estacional",
      Generadas_2020: "207",
      Cerradas_2020: "137",
      RPM_2021: "Plan Estacional",
      Generadas_2021: "207",
      Cerradas_2021: "137",
      RPM_2022: "Plan Estacional",
    },
  ];

  return (
    <Styles>
      <h5>Ordenes de Trabajo Gestionadas por SAP</h5>
      <Table columns={columns} data={data} />
    </Styles>
  );
}

export default Tabla;
