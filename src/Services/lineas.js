let lineasDB = require("../Data/lineasDB.json");
let SAPlineasDB = require("../Data/SAPlineasDB.json");

function filterLines(filter) {
  lineasDB.map((lineasDB) => {
    let lineaDB = lineasDB["Código"].replace("-", "")

    lineasDB["Ejecutado Minuciosa"] = SAPlineasDB.filter((SAPlineasDB) => {
      let lineaSAP = SAPlineasDB["Equipo"].split("-")[1]
      if ((SAPlineasDB["Código valorac."] === "PINM") & (lineaDB === lineaSAP)) {


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
  return lineasDB;
}

export default filterLines;
