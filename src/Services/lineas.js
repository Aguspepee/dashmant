let lineasDB = require("../Data/lineasDB.json");
let SAPlineasDB = require("../Data/SAPlineasDB.json");

const zones = [
  {
    "Grupo planif.": "ZN1",
    Zona: "Zona Norte",
  },
  {
    "Grupo planif.": "ZS1",
    Zona: "Zona Sur",
  },
  {
    "Grupo planif.": "ZO1",
    Zona: "Zona Oeste",
  },
  {
    "Grupo planif.": "ZA1",
    Zona: "Zona Austral",
  },
];

function filterLines(year) {
  //console.log(year)
  lineasDB.map((lineasDB) => {
    let lineaDB = lineasDB["Código"].replace("-", "");
    return (lineasDB["Ejecutado Minuciosa"] = SAPlineasDB.filter(
      (SAPlineasDB) => {
        let lineaSAP = SAPlineasDB["Equipo"].split("-")[1];
        if (SAPlineasDB["Código valorac."] === "PINM" && lineaDB === lineaSAP &&  year === SAPlineasDB["Fecha"].slice(6, 10)) {
          return true;
        } else {
          return false;
        }
      }
    ).length);
  });

  lineasDB.map((lineasDB) => {
    let lineaDB = lineasDB["Código"].replace("-", "");
    return (lineasDB["Ejecutado Terrestre"] = SAPlineasDB.filter(
      (SAPlineasDB) => {
        let lineaSAP = SAPlineasDB["Equipo"].split("-")[1];
       if (SAPlineasDB["Código valorac."] === "PINT" && lineaDB === lineaSAP &&  year === SAPlineasDB["Fecha"].slice(6, 10)) {
          return true;
        } else {
          return false;
        }
      }
    ).length);
  });

  zones.map((zones) => {
    return (zones["Line"] = lineasDB.filter((lineasDB) => {
      return lineasDB["Zona"] + "1" === zones["Grupo planif."];
    }));
  });
  let lineasDBflitrada = zones;
  console.log("lineas DB",lineasDB)
  return lineasDBflitrada;
}
export default filterLines;
