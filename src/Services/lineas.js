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

function filterLines(year, month) {
  //console.log(year)
  lineasDB.map((lineasDB) => {
    let lineaDB = lineasDB["Código"].replace("-", "");
    return (
      //Minuciosa Anual Ejecutada
      (lineasDB["Ejecutado Minuciosa Anual"] = SAPlineasDB.filter(
        (SAPlineasDB) => {
          let lineaSAP = SAPlineasDB["Equipo"].split("-")[1];
          return (
            SAPlineasDB["Código valorac."] === "PINM" &&
            lineaDB === lineaSAP &&
            year === SAPlineasDB["Fecha"].slice(6, 10)
          );
        }
      ).length),
      //Terrestre Anual Ejecutada
      (lineasDB["Ejecutado Terrestre Anual"] = SAPlineasDB.filter(
        (SAPlineasDB) => {
          let lineaSAP = SAPlineasDB["Equipo"].split("-")[1];
          return (
            SAPlineasDB["Código valorac."] === "PINT" &&
            lineaDB === lineaSAP &&
            year === SAPlineasDB["Fecha"].slice(5, 10)
          );
        }
      ).length),
       //Minuciosa Mensual Ejecutada
       (lineasDB["Ejecutado Minuciosa Mensual"] = SAPlineasDB.filter(
        (SAPlineasDB) => {
          let lineaSAP = SAPlineasDB["Equipo"].split("-")[1];
          //console.log(month + "/" + year)
          return (
            SAPlineasDB["Código valorac."] === "PINM" &&
            lineaDB === lineaSAP &&
            month + "/" + year === SAPlineasDB["Fecha"].slice(3, 10)
          );
        }
      ).length),
      //Terrestre Mensual Ejecutada
      (lineasDB["Ejecutado Terrestre Mensual"] = SAPlineasDB.filter(
        (SAPlineasDB) => {
          let lineaSAP = SAPlineasDB["Equipo"].split("-")[1];
          return (
            SAPlineasDB["Código valorac."] === "PINT" &&
            lineaDB === lineaSAP &&
            month + "/" + year === SAPlineasDB["Fecha"].slice(3, 10)
          );
        }
      ).length)
    );
  });

  zones.map((zones) => {
    return (zones["Line"] = lineasDB.filter((lineasDB) => {
      return (
        lineasDB["Zona"] + "1" === zones["Grupo planif."] &&
        lineasDB["Show"] === "true"
      );
    }));
  });

  zones.map((zones) => {
    //console.log(zones.Line[0]["Ejecutado Minuciosa Anual"])
    zones["Anual Ejecutado Minuciosa"] = zones["Line"].reduce(
      (total, obj) => obj["Ejecutado Minuciosa Anual"] + total,
      0
    );
    zones["Anual Ejecutado Terrestre"] = zones["Line"].reduce(
      (total, obj) => obj["Ejecutado Terrestre Anual"] + total,
      0
    );
    zones["Anual Previsto Minuciosa"] = Math.round(
      zones["Line"].reduce((total, obj) => obj["Torres Cantidad"] + total, 0) /
        4
    );
    zones["Anual Previsto Terrestre"] = Math.round(
      zones["Line"].reduce((total, obj) => obj["Torres Cantidad"] + total, 0) /
        0.5
    );
    zones["Mensual Ejecutado Minuciosa"] = zones["Line"].reduce(
      (total, obj) => obj["Ejecutado Minuciosa Mensual"] + total,
      0
    );
    //zones["Mensual Ejecutado Minuciosa"] = "hola"
    zones["Mensual Ejecutado Terrestre"] = zones["Line"].reduce(
      (total, obj) => obj["Ejecutado Terrestre Mensual"] + total,
      0
    );
    zones["Mensual Previsto Minuciosa"] =  Math.round(
      zones["Line"].reduce((total, obj) => obj["Torres Cantidad"] + total, 0) /
        (4*12)
    );
    zones["Mensual Previsto Terrestre"] =  Math.round(
      zones["Line"].reduce((total, obj) => obj["Torres Cantidad"] + total, 0) /
        (0.5*12)
    );
  });

  console.log(zones);
  return zones;
}
export default filterLines;
