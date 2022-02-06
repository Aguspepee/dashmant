var data = require("../Data/dataJan.json");

/* //Se definen los nombres
function getDaysInMonth(month, year) {
  let date = new Date(year, month, 1);
  let days = [];
  while (date.getMonth() === month) {
    let month = ("0" + (date.getUTCMonth() + 1)).slice(-2); //months from 1-12
    let day = ("0" + date.getUTCDate()).slice(-2);
    let year = date.getUTCFullYear();
    let newdate = day + "/" + month + "/" + year;
    let complet = [{ Day: newdate, Quantity: "hola" }];
    days.push(complet);
    date.setDate(date.getDate() + 1);
  }
  return days;
} */

/* function filterData(data, filters) {
  const myArray = Object.values(data);
  const myFilter = filters;
  let myArrayFiltered = myArray.filter(
    (myArray) => myArray.Status === myFilter.Status
  );
  return myArrayFiltered;
} */

//FILTROS PARA RPM
const filterRPM = [
  {
    "Cl.actividad PM": "RPM",
    "Status usuario": "EJEC",
  },
  {
    "Cl.actividad PM": "RPM",
    "Status usuario": "CTEC",
  },
  {
    "Cl.actividad PM": "RPM",
    "Status usuario": "CTEC CENE",
  },
];

const zones = [
  { "Grupo planif.": "ZN1" },
  { "Grupo planif.": "ZS1" },
  { "Grupo planif.": "ZO1" },
  { "Grupo planif.": "ZA1" },
];

//La estructura de los datos de la función es:
//actividad: String, puede ser RPM, etc
//zona: array de zonas [zona:"ZN1", denominacion:"Zona Norte"]
//status: array de status [ ]

function printData(actividad, zona, status) {
  let pieChartData = [];
  let listValues = [];
  for (let j = 0; j < zones.length; j++) {
    listValues = [];
    for (let i = 0; i < 3; i++) {
      let data_filter = data.filter(
        (data) =>
          data["Cl.actividad PM"] === filterRPM[i]["Cl.actividad PM"] &&
          data["Status usuario"] === filterRPM[i]["Status usuario"] &&
          data["Grupo planif."] === zones[j]["Grupo planif."]
      );
      listValues[i] = {
        Tipo: filterRPM[i]["Status usuario"],
        Cantidad: data_filter.length,
      }
    }
    pieChartData[j] = { Zona: zones[j]["Grupo planif."], Lista: listValues };
  }
  return pieChartData;
}
export default printData;
