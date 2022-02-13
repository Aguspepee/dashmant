//var data = require("../Data/dataJan.json");

//FILTROS PARA RPM
const filterRPM = [
  {
    "Status denominacion": "En Ejecución",
    "Status usuario": "EJEC",
  },
  {
    "Status denominacion": "Cerrada Técnicamente",
    "Status usuario": "CTEC",
  },
  {
    "Status denominacion": "Cerrada Técnicamente No Ejecutado",
    "Status usuario": "CTEC CENE",
  },
];

const zones = [
  { "Grupo planif.": "ZN1" , "Zona":"Zona Norte", "Unidades de Mantenimiento":249},
  { "Grupo planif.": "ZS1" , "Zona":"Zona Sur", "Unidades de Mantenimiento":368},
  { "Grupo planif.": "ZO1" , "Zona":"Zona Oeste", "Unidades de Mantenimiento":41},
  { "Grupo planif.": "ZA1" , "Zona":"Zona Austral", "Unidades de Mantenimiento":53},
];

function filterData(actividad,dataBruta) {
  let data = dataBruta
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
        Tipo: filterRPM[i]["Status denominacion"],
        Cantidad: data_filter.length,
      }
    }
    pieChartData[j] = { Zona: zones[j]["Grupo planif."],ZonaNombre:zones[j]["Zona"], UnidadadesMantenimientoCant:zones[j]["Unidades de Mantenimiento"], Lista: listValues };
  }
  //console.log(pieChartData)
  return pieChartData;
  
}
export default filterData;
