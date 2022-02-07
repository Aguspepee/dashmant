let lineasDB = require("../Data/lineasDB.json");
let SAPlineasDB = require("../Data/SAPlineasDB.json");

function filterLines(filter) {
  console.log(filter);
  lineasDB.map((lineasDB) => {
    lineasDB["Ejecutado Minuciosa"] = SAPlineasDB.filter((SAPlineasDB) => {
      if ((SAPlineasDB["Código valorac."] === "PINM") & (lineasDB["Código"]==="AK-OP")) {
        return true;
      } else {
        return false;
      }
    }).length;
    lineasDB["Ejecutado Terrestre"] = SAPlineasDB.filter((SAPlineasDB) => {
      if (SAPlineasDB["Código valorac."] === "PINT") {
        return true;
      } else {
        return false;
      }
    }).length;
  });
  return lineasDB;
}

export default filterLines;
