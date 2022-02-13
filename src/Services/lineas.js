let lineasDB = require("../Data/lineasDB.json");
let SAPlineasDB = require("../Data/SAPlineasDB.json");

const zones = [
  { "Grupo planif.": "ZN1" , "Zona":"Zona Norte", "Unidades de Mantenimiento":249},
  { "Grupo planif.": "ZS1" , "Zona":"Zona Sur", "Unidades de Mantenimiento":368},
  { "Grupo planif.": "ZO1" , "Zona":"Zona Oeste", "Unidades de Mantenimiento":41},
  { "Grupo planif.": "ZA1" , "Zona":"Zona Austral", "Unidades de Mantenimiento":53},
];

function filterLines(activity) {
  lineasDB.map((lineasDB) => {
    let lineaDB = lineasDB["Código"].replace("-", "")
    lineasDB["Ejecutado Minuciosa"] = SAPlineasDB.filter((SAPlineasDB) => {
      let lineaSAP = SAPlineasDB["Equipo"].split("-")[1]
      if ((SAPlineasDB["Código valorac."] === activity) & (lineaDB === lineaSAP)) {
        return true;
      } else {
        return false;
      }
    }).length;
    lineasDB["Ejecutado Terrestre"] = SAPlineasDB.filter((SAPlineasDB) => {
      let lineaSAP = SAPlineasDB["Equipo"].split("-")[1]
      if ((SAPlineasDB["Código valorac."] === "PINT") & (lineaDB === lineaSAP)) {
        return true;
      } else {
        return false;
      }
    }).length;
    
  });


  zones.map((zones)=>{zones["Line"]=lineasDB.filter((lineasDB)=>{return((lineasDB["Zona"]+"1")===zones["Grupo planif."])})})
//console.log(lineasDB.filter((lineasDB)=>{return((lineasDB["Zona"]+"1")===zones[1]["Grupo planif."])}))
let lineasDBflitrada = zones
  return lineasDBflitrada;
}
export default filterLines;
