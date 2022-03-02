//var data = require("../Data/dataJan.json");

function getDatesBetweenDates() {
  let startDate = new Date(2022, 0, 1);
  let endDate = new Date(2022, 11, 31);
  let dates = [];
  let LinearChart = [];
  //to avoid modifying the original date
  let theDate = new Date(startDate);
  while (theDate < endDate) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  dates = [...dates, endDate];
  dates.map((dates, index) => {
    let MyDateString =
      ("0" + dates.getDate()).slice(-2) +
      "/" +
      ("0" + (dates.getMonth() + 1)).slice(-2) +
      "/" +
      dates.getFullYear();

    LinearChart[index] = { Fecha: MyDateString };
  });
  return LinearChart;
}

function FrecuenciaAcumulado(data) {
  let status = "EJEC";
  let dataFrecAcum = getDatesBetweenDates();
  let acumulador_previsto = 0;
  let acumulador_ejecutado = 0;
  dataFrecAcum.map((dataFrecAcum, index) => {
    //Frecuencia
    return (
      //Frecuencia Prevista
      (dataFrecAcum["Frecuencia_Prevista"] = data.filter((data) => {
        return data["Inicio program."] === dataFrecAcum["Fecha"];
      }).length),
      //Frecuencia Ejecutada
      (dataFrecAcum["Frecuencia_Ejecutada"] = data.filter((data) => {
        return (
          data["Inicio program."] === dataFrecAcum["Fecha"] &&
          data["Status usuario"] === status
        );
      }).length),
      //(dataFrecAcum["Acumulado_Previsto"] = dataFrecAcum[index]["Acumulado_Previsto"]+dataFrecAcum[index+1]["Acumulado_Previsto"] ),
      (dataFrecAcum["Acumulado_Previsto"] = acumulador_previsto),
      (acumulador_previsto =
        acumulador_previsto + dataFrecAcum["Frecuencia_Prevista"]),
      (dataFrecAcum["Acumulado_Ejecutado"] = acumulador_ejecutado),
      (acumulador_ejecutado =
        acumulador_ejecutado + dataFrecAcum["Frecuencia_Ejecutada"]),
      (dataFrecAcum["Diferencia_Prevista"] = 20),
      (dataFrecAcum["Diferencia_Ejecutada"] =
        dataFrecAcum["Frecuencia_Prevista"] -
        dataFrecAcum["Frecuencia_Ejecutada"])
    );
  });

  //console.log("Esta", dataFrecAcum);
  return dataFrecAcum;
}

export default FrecuenciaAcumulado;
