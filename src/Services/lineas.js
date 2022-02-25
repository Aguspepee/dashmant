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
        if (
          SAPlineasDB["Código valorac."] === "PINM" &&
          lineaDB === lineaSAP &&
          year === SAPlineasDB["Fecha"].slice(6, 10)
        ) {
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
        if (
          SAPlineasDB["Código valorac."] === "PINT" &&
          lineaDB === lineaSAP &&
          year === SAPlineasDB["Fecha"].slice(6, 10)
        ) {
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

  zones.map((zones) => {
    //console.log(zones.Line[0]["Ejecutado Minuciosa"])
    zones["Anual Ejecutado Minuciosa"] = zones["Line"].reduce((total, obj) => obj["Ejecutado Minuciosa"] + total,0);
    zones["Anual Ejecutado Terrestre"] = zones["Line"].reduce((total, obj) => obj["Ejecutado Terrestre"] + total,0);
    zones["Anual Previsto Minuciosa"] = Math.round((zones["Line"].reduce((total, obj) => obj["Torres Cantidad"] + total,0))/4);
    zones["Anual Previsto Terrestre"] = Math.round((zones["Line"].reduce((total, obj) => obj["Torres Cantidad"] + total,0))/0.5);
    zones["Mensual Ejecutado Minuciosa"] = "clao";
    zones["Mensual Ejecutado Terrestre"] = "clao";
    zones["Mensual Previsto Minuciosa"] = "clao";
    zones["Mensual Previsto Terrestre"] = "clao";
  });

  console.log(zones);
  return zones;
}
export default filterLines;
