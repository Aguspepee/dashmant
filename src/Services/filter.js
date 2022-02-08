var data = require("../Data/dataJan.json");

//FILTROS PARA RPM
const filterRPM = [
  {
    "Status denominacion": "Sin información",
    "Status usuario": "EJEC",
  },
  {
    "Status denominacion": "Terminada",
    "Status usuario": "CTEC",
  },
  {
    "Status denominacion": "No terminada",
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

//zona: array de zonas
/* const zones = [
  { "Grupo planif.": "ZN1" },
  { "Grupo planif.": "ZS1" },
  { "Grupo planif.": "ZO1" },
  { "Grupo planif.": "ZA1" },
]; */

//status: array de status [ ]

function filterData(actividad) {
  let pieChartData = [];
  let listValues = [];
  for (let j = 0; j < zones.length; j++) {
    listValues = [];
    for (let i = 0; i < 3; i++) {
      let data_filter = data.filter(
        (data) =>
          data["Cl.actividad PM"] === actividad &&
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
export default filterData;
