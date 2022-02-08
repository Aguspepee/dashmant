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
  { "Grupo planif.": "ZN1" , "Zona":"Zona Norte", "Unidades de Mantenimiento":249},
  { "Grupo planif.": "ZS1" , "Zona":"Zona Sur", "Unidades de Mantenimiento":368},
  { "Grupo planif.": "ZO1" , "Zona":"Zona Oeste", "Unidades de Mantenimiento":41},
  { "Grupo planif.": "ZA1" , "Zona":"Zona Austral", "Unidades de Mantenimiento":53},
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
   let totalOT= listValues.reduce(function (a, b) {
    return {listValues: a.Cantidad + b.Cantidad}; // returns object with property x
  })
   
    console.log(totalOT)
    listValues.push({
      Tipo: "TOTAL",
      Cantidad: zones[j]["Unidades de Mantenimiento"]//totalOT,
    })
    //console.log(listValues)
    pieChartData[j] = { Zona: zones[j]["Grupo planif."],ZonaNombre:zones[j]["Zona"], UnidadadesMantenimientoCant:zones[j]["Unidades de Mantenimiento"], Lista: listValues };
  }
  return pieChartData;
  
}
export default filterData;
