//import hours from "../Data/hours.json";

function hoursCalc(dataRealMonth) {
  let hours = dataRealMonth;
  console.log(hours);
  let zonas = [
    { Zona: "ZN1", Nombre: "Zona Norte", Activity: [] },
    { Zona: "ZS1", Nombre: "Zona Sur", Activity: [] },
    { Zona: "ZO1", Nombre: "Zona Oeste", Activity: [] },
    { Zona: "ZA1", Nombre: "Zona Austral", Activity: [] },
  ];
  let Total = [];
  for (let i = 0; i < zonas.length; i++) {
    let activity = [
      { Actividad: "RPM", NombreActividad: "Mantenimiento Preventivo Programado", Mostrar: true },
      { Actividad: "MCP", NombreActividad: "Mantenimiento Correctivo", Mostrar: true },
      { Actividad: "MUA", NombreActividad: "Muestreos de Aceite", Mostrar: true },
      { Actividad: "RSP", NombreActividad: "Recorridos de Seguridad Público", Mostrar: true },
      { Actividad: "RCE", NombreActividad: "Recorrido de Control de Estaciones", Mostrar: true },
      { Actividad: "MPL", NombreActividad: "Mantenimiento Preventivo No Programado", Mostrar: true },
      { Actividad: "MST", NombreActividad: "Servicios a Terceros", Mostrar: true },
      { Actividad: "MAC", NombreActividad: "Actividades Complementarias", Mostrar: true },
      { Actividad: "TER", NombreActividad: "Termografía", Mostrar: true },
      { Actividad: "LIT", NombreActividad: "LAT Inspección Terrestre", Mostrar: true },
      { Actividad: "LMT", NombreActividad: "LAT Inspección Minuciosa", Mostrar: true },
      { Actividad: "MPT", NombreActividad: "Medición de Resistencia de PAT", Mostrar: true },
      { Actividad: "MRS", NombreActividad: "Medición de Resistividad de Suelo", Mostrar: true },
      { Actividad: "PCA", NombreActividad: "Medición de Protección Catódica", Mostrar: true },
      { Actividad: "MPT", NombreActividad: "LAT Inspección Minuciosa", Mostrar: true },
      { Actividad: "RPE", NombreActividad: "Recorrido Periódico", Mostrar: true },
    ];
    for (let j = 0; j < activity.length; j++) {
      let horas = hours
        .filter((hours) => {
          return (
            hours["Cl.actividad PM"] === activity[j]["Actividad"] &&
            hours["Grupo planif."] === zonas[i]["Zona"]
          );
        })
        .reduce((a, b) => a + b["Trabajo real"], 0);
      activity[j]["Horas"] = horas;
    }
    zonas[i]["Activity"] = activity;
  }
  // console.log(zonas)
  return zonas;
}
export default hoursCalc;
